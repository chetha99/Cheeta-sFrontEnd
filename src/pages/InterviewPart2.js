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
        this.setState({ jobsBasedOnPersonalityType: data});

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
                alert(`Model: ${model_accuracy}, \nPersonality Type: ${infoData?.personality_type}, \nStatus: ${value===1? "will stay":"will leave"}, Team Capability Score: ${payload?.Team_capability_score}`)

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

        const { jobsBasedOnPersonalityType, charactersBasedOnPersonalityType, EmpData } = this.state;

        return <>
<div>
<h1 hidden>RecruIT | Interviewee Details</h1>

<main class="main-wrapper no-sidebar" role="main">

    <section class="inner-full-section interviewee">
        <div class="container-fluid">
            <div class="row navbar-row">
                <div class="col-12 col-lg-2 logo">
                    <figure>
                        <img src={logo} alt="logo" />
                    </figure>
                </div>
                <div class="col-12 col-lg-10 menu">
                    {/* <div class="row">
                        <div class="col-12 col-lg-6">
                            <h3>Bio Data & His skills according to his personality type</h3>
                      
                    </div>
                </div> */}
            </div>
            <div class="row">
                <div class="col-12 col-lg-5 img-block">
                    <figure>
                        <img src={interviewee} class="img-fluid" alt="img" />
                    </figure>
                </div>

<div className="row">
<div className="col-md-6">
                   <div class="card">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
   
   <p>Name:</p>
   <p>Age:</p>
   <p>Address:</p>
   <p>Tel:</p>
   <p>Fax:</p>
   <p>Email:</p>
  </div>
</div>
                   </div>
                   <div className="col-md-6">
                   <div class="card">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
   
   <p>Name:</p>
   <p>Age:</p>
   <p>Address:</p>
   <p>Tel:</p>
   <p>Fax:</p>
   <p>Email:</p>
  </div>
</div>
                   </div>
</div>

                <div class="col-12 col-lg-7 form-block">
                    <div class="row">
                        
                        <p><u><b>Bio Data</b></u></p><br/>
                        <pre>
                            Email :{EmpData?.email} <br/>
                            Designation: {EmpData?.designation} <br/>
                            Civil Status: {EmpData?.civil_status} <br/>
                            Personality Type: {EmpData?.personality_type} <br/>
                            Project Team: {EmpData?.project_team} <br/>
                            status: {EmpData?.status} <br/>
                        </pre><br/>

                        <hr/><br/>

                        
                        <p><u><b>Character Shown</b></u></p><br/>
                        <pre>
                            {charactersBasedOnPersonalityType?.Predicted_Characters?.map((x,i)=>{
                                return `${i} ${x} \n`;
                            })}
                        </pre><br/>
                        <hr/><br/>

                        
                        <p><u><b>Best Job</b></u></p><br/>
                        <pre>
                            {jobsBasedOnPersonalityType?.Predicted_Job?.map((x,i)=>{
                                return `${i} ${x} \n`
                            })}
                        </pre><br/> 
                        <hr/><br/>

                        
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

export default adminLayout(AdminBlankPage);