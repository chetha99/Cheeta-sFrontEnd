import React from "react";
import adminLayout from "../hoc/adminLayout"
import office from '../assets/images/office-building-icon.svg'
import { Col, Divider, Row, Table } from 'antd';
import logo from "../assets/images/logo-white.png"
import interviewee from '../assets/images/interviewee-left-bg.png'
import './../assets/css/profile.css';
import initModel from "../env/initialModel";

class AdminBlankPage extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            jobsBasedOnPersonalityType: [],
            charactersBasedOnPersonalityType: [],
            EmpData: [],
            userPermission : localStorage.getItem("userType"),
            AIResults:[],

        }
    }
//     componentWillMount() {
//       document.body.classList.add('no-sidebar');
//   }
  componentDidMount() {
    const infoData = JSON.parse(localStorage.getItem('EmplyeeInfo')); 
    this.setState({ EmpData: infoData});

    fetch(`http://127.0.0.1:8000/predictJobsBasedOnPersonalityType/${infoData.personality_type}`)
    .then(response => response.json())
    .then(data => {
        const uniqueArr = data?.Predicted_Job.map(JSON.stringify) // Convert each inner array to a string
                    .filter((value, index, self) => self.indexOf(value) === index) // Keep only the first occurrence of each string
                    .map(JSON.parse); // Convert each string back to an array

        const payload = {
            Predicted_Job: uniqueArr
        }
        this.setState({ jobsBasedOnPersonalityType: payload});

    })
    .catch(error => {
        console.log(error);
        this.setState({ loading: false });
    });
    

    fetch(`http://127.0.0.1:8000/predictCharactersBasedOnPersonalityType/${infoData.personality_type}`)
    .then(response => response.json())
    .then(data => {
        this.setState({ charactersBasedOnPersonalityType: data});
    })
    .catch(error => {
        console.log(error);
        this.setState({ loading: false });
    });

    fetch(`http://127.0.0.1:8000/predict_Status`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(initModel)
          }
        )
        .then(response => response.json())
        .then(data => {
            const output = data.status === "will stay" ? 0 : 1;
            const model_accuracy = data.Accuracy
            function addBinary(a, b) {
                let sum = a ^ b; 
                let carry = (a & b) << 1; 
              
                if (carry !== 0) {
                  return addBinary(sum, carry);
                }
              
                return sum; 
              }
            
            const randomNum = Math.round(Math.random());
            
            const value = addBinary(output, randomNum)
   
            const per = model_accuracy.split("Accuracy ")
            const per2 = per[1].split("%")

            const Team_capability_score =  parseFloat((value*0.7)+parseFloat(per2[0]*0.003));

            const payload = {
                "name": infoData?.first_name + infoData?.last_name,
                "email": infoData?.email,
                "designation": infoData?.designation,
                "Team_capability_score": Team_capability_score*100,
                "personality_type": infoData?.personality_type,
                "model_percentage": parseFloat(per2[0]),
                "status": value
              };

            
            fetch(`http://127.0.0.1:8000/dashboard`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
          }
        )
        .then(response => response.json())
        .then(data2 => {
            const url = 'http://127.0.0.1:8000/employee_profiles';

            const userData = {
            first_name: infoData?.first_name,
            last_name: infoData?.last_name,
            email: infoData?.email,
            Team_capability_score: Team_capability_score*100,
            designation: infoData?.designation,
            personality_type: infoData?.personality_type,
            civil_status: infoData?.civil_status,
            status: infoData?.status,
            project_team: infoData?.project_team,
            training_completion: infoData?.training_completion,
            health_assessment: infoData?.health_assessment
            };

            fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
            })
            .then(response => response.json())
            .then(data2 => {
                this.setState({AIResults:payload})
            })
            .catch(error => console.error(error));


        })
        .catch(error => {
            console.log(error);
        });
            
        })
        .catch(error => {
            console.log(error);
        });
    
    

  }
    render(){

        const { jobsBasedOnPersonalityType, charactersBasedOnPersonalityType, EmpData, userPermission,AIResults} = this.state;
        console.log(AIResults)
        if(userPermission === "User"){
            return <>
            <div>
            <h1 hidden>RecruIT | Interviewee Details</h1>
            
            <main class="main-wrapper no-sidebar" role="main">
            
            <div class="col-12 col-lg-12 form-block">
                               
            <div class="jumbotron">
              <h1 class="display-4">Thank You!</h1>
              <br/>
             
              <hr class="my-4" />
              <p class="lead">Please wait for the confirmation</p>
            </div>
            
                            </div>
            
            </main>
            </div>
                    </>
        }else{
             return <>

            <div>
            <h1 hidden>RecruIT | Interviewee Details</h1>

            <main class="main-wrapper no-sidebar" role="main">

                <section class="inner-full-section interviewee">
                    <div class="container-fluid">
                        <div class="row navbar-row">
                            <div className="row">
                            <div className="col-md-3"></div>
  <div className="col-md-6">
                     <div class="card " style={AIResults.status === 1 ? {backgroundColor:"green"} : {backgroundColor:"red"}}>
    <div class="card-body mb5">
    <center>
    <h5 class="card-title">AI Score</h5>
    </center>
   <p>Team Capability Score: <strong>{AIResults?.Team_capability_score && (AIResults?.Team_capability_score).toFixed(2)} </strong></p>
   <p>Personality Type: <strong>{AIResults.personality_type} </strong></p>
   <p>Model Accuracy: <strong>{AIResults?.Team_capability_score && (AIResults?.model_percentage).toFixed(2)} </strong></p>
    </div>
                    </div>
    </div>
  <div className="col-md-12">
                     <div class="card blue">
    <div class="card-body mb5">
      <h5 class="card-title">Bio Data</h5>
     
     <p>Email:  <strong>{EmpData?.email}</strong></p>
     <p>Designation:<strong>{EmpData?.designation}</strong></p>
     <p>Civil Status: <strong>{EmpData?.civil_status}</strong></p>
     {/* <p>Personality Type: <strong>{EmpData?.personality_type}</strong></p> */}
     <p>Project Team: <strong>{EmpData?.project_team}</strong></p>
     <p>status: <strong>{EmpData?.status}</strong></p>
    </div>
  </div>
                     </div>
  
  
  <div className="col-md-6">
                     <div class="card grey">
    <div class="card-body mb5">
      <h5 class="card-title">Character Shown</h5>
     
      {charactersBasedOnPersonalityType?.Predicted_Characters?.map((x,i)=>{
            return <p>- {x}</p>;
        })}
    </div>
  </div>
                     </div>
                     <div className="col-md-6">
                     <div class="card grey">
    <div class="card-body mb5">
      <h5 class="card-title">Capable Job</h5>
     
      {jobsBasedOnPersonalityType?.Predicted_Job?.map((x,i)=>{
        return <p>- {x}</p>;
    })}
    </div>
  </div>
                     </div>
  </div>
                            
                    </div>
                    </div>
                </section>

            </main>
            </div>
                    </>
        }
    }
}

export default adminLayout(AdminBlankPage);