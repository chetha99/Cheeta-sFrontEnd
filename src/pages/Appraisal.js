import React from "react";
import adminLayout from "../hoc/adminLayout"

const dataOptions = {
    data1 : [
        "HTML","CSS","JavaScript","Response Design", "Version Control", "Web Performance Optimization", "BrowserDeveloping Tools", "Build Tools", "UI/UX Design"
    ],
    data2 : [
       "Server-Side Programming Languages","Database","Web services", "APIs", "Version Control", "Security", "Caching", "Scalability", "Cloud Computing", "DevOps"
    ],
    data3: [
        "Cloud Computing Platforms", "Infrastructure as code", "Containers and Orchestration", "Security", "Networking","Serverless Computing","Big Data and Analytics", "DevOps"
    ],
    data4: [
        "SDLC", "Test Planning and Design", "Test Automation","Defect Management", "Performance and Load Testing", "Security Testing", "Industry Standards and Best Practices"
    ],
    data5: [
        "Communication", "Critical Thinking and Problem Solving ", "Business Knowledge", "Data Analysis","Requirements Gathering","Project management", "Stakeholder Management", "Technical Knowledge"
    ],
    data6: [
        "Network Security", "Application Security", "Risk management ", "Security Compliance","Incident Response", "Penetration Testing", "Cryptographs", "Ethical hacking"
    ]
}
class AdminBlankPage extends React.Component {

    submitFun= (training_data) => { 
        const firstname= document.getElementById('firstname').value;
        const lastname= document.getElementById('lastname').value;
        const email= document.getElementById('email').value;
        const designation= document.getElementById('designation').value;
        const personality= document.getElementById('personality').value;
        const teamcapability= document.getElementById('teamcapability').value;
        const status= document.getElementById('status').value;
        const civilstatus= document.getElementById('civilstatus').value;
        const health_ass= document.getElementById('health_ass').value;
        const team= document.getElementById('team').value;

        console.log(health_ass)
        // Perform validation on each input field
        if (firstname === '') {
            alert('Please enter your first name');
            return;
        }

        if (lastname === '') {
            alert('Please enter your last name');
            return;
        }

        if (email === '') {
            alert('Please enter your email');
            return;
        }

        if (!email.includes('@')) {
            alert('Please enter a valid email address');
            return;
        }

        if (designation === '') {
            alert('Please enter your designation');
            return;
        }

        if (personality === '') {
            alert('Please enter your personality type');
            return;
        }

        if (teamcapability === '') {
            alert('Please enter your team capability score');
            return;
        }

        if (status === '') {
            alert('Please enter your status');
            return;
        }

        if (civilstatus === '') {
            alert('Please enter your civil status');
            return;
        }
        if (team === '') {
            alert('Please enter your team status');
            return;
        }

        const url = 'http://127.0.0.1:8000/employee_profiles';

            const userData = {
            first_name: firstname,
            last_name: lastname,
            email: email,
            Team_capability_score:teamcapability,
            designation: designation,
            personality_type: personality,
            civil_status: civilstatus,
            status: status,
            project_team: team,
            training_completion: training_data,
            health_assessment: health_ass
            };

            // console.log(userData)

                fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
                })
                .then(response => response.json())
                .then(data => {
                    
                    window.location.assign("http://localhost:3000/employee-details");
                })
                .catch(error => console.error(error));
    
    }

    constructor(props){
        super(props);

        this.state = {}
    }

    componentDidMount() {
        const data = localStorage.getItem('selectedEmployee'); 
        const localStorageValue = data.replace(/"/g, '');


    fetch(`http://127.0.0.1:8000/employee_profiles/${localStorageValue}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ data:data })

        switch(data.profile.designation){
            //
            case "Frontend Engineer":
            case "Senior Frontend Engineer":
            case "SFE":
            case "FE":
            case "UX/UI":
                this.setState({ designationOptions:dataOptions.data1 })
                break;
            case "Backend Engineer":
            case "BE":
            case "Senior Backend Engineer":
            case "SBE":
                this.setState({ designationOptions:dataOptions.data2 })
                break;
            case "FullStack Engineer":
            case "SSE":
            case "Senior Software Engineer":
                const value = dataOptions.data1.concat(dataOptions.data2)
                const uniqueData = [...new Set(value)];
                this.setState({ designationOptions:uniqueData })
                break;
            case "Cloud Engineer":
            case "Senior Cloud Engineer":
                this.setState({ designationOptions:dataOptions.data3 })
                break;
            case "QA":
                this.setState({ designationOptions:dataOptions.data4 })
                break;
            case "BA":
            case "CEO":
            case "PM":
            case "Business Analysts" :
            case "Project Manager":
                this.setState({ designationOptions:dataOptions.data5 })
                break;
            case "Cyber Security":
                this.setState({ designationOptions:dataOptions.data6 })
                break;
        }
        // this.setState({ designation:data.profile.designation })
        this.setState({training_data: data.profile.training_completion});
      })
      .catch(error => {
        console.log(error);
        this.setState({ loading: false });
      });
    }

    render(){

        const { data, designationOptions,training_data } = this.state; 

        const chnageTrigger = (e) => {
            switch(e.target.value){
                //
                case "Frontend Engineer":
                case "Senior Frontend Engineer":
                case "SFE":
                case "FE":
                case "UX/UI":
                    this.setState({ designationOptions:dataOptions.data1 })
                    break;
                case "Backend Engineer":
                case "BE":
                case "Senior Backend Engineer":
                case "SBE":
                    this.setState({ designationOptions:dataOptions.data2 })
                    break;
                case "FullStack Engineer":
                case "SSE":
                case "Senior Software Engineer":
                    const value = dataOptions.data1.concat(dataOptions.data2)
                    this.setState({ designationOptions:value })
                    break;
                case "Cloud Engineer":
                case "Senior Cloud Engineer":
                    this.setState({ designationOptions:dataOptions.data3 })
                    break;
                case "QA":
                    this.setState({ designationOptions:dataOptions.data4 })
                    break;
                case "BA":
                case "CEO":
                case "PM":
                case "Business Analysts" :
                case "Project Manager":
                    this.setState({ designationOptions:dataOptions.data5 })
                    break;
                case "Cyber Security":
                    this.setState({ designationOptions:dataOptions.data6 })
                    break;
            }
        }

        const valueChnage = (e) =>{
            const value = e.target.value;
            const checked = e.target.checked;

            let preData = training_data;

            if(checked){
                preData.push(value);
                this.setState({training_data:preData});
            }else{
                preData = preData.filter(preData => preData !== value);
                this.setState({training_data:preData});

            }
        }
        return <>
<div>
<main class="main-wrapper" role="main">

    
          
            <div class="row">
                
                <div class="col-12 col-lg-12 form-block">
                    {/* <div class="row top-row">
                        <div class="col-12 col-lg-6 left px-0">
                            <figure>
                                <img src={avatar} class="img-fluid" alt="icon" />
                            </figure>
                            <span>Adam Kannangara</span>
                        </div>
                    </div> */}
                    <div class="row form-inner">
                        <div class="col-12 col-lg-6">
                            <div class="form-group">
                                <label>First Name</label>
                                <input type="text" id="firstname" name="firstname" placeholder="Adam" defaultValue={data?.profile.first_name} required />
                            </div>
                        </div>
                        <div class="col-12 col-lg-6">
                            <div class="form-group">
                                <label>Last Name</label>
                                <input type="text" id="lastname" name="lastname" placeholder="Kannangara" defaultValue={data?.profile.last_name} required />
                            </div>
                        </div>
                        <div class="col-12 col-lg-6">
                            <div class="form-group">
                                <label>Email</label>
                                <input type="email" id="email" name="email" placeholder="adam@email.com" defaultValue={data?.profile.email} readOnly required />
                            </div>
                        </div>
                        <div class="col-12 col-lg-6">
                            <div class="form-group">
                                <label>Designation</label>
                                <input type="text" id="designation" name="designation" onChange={chnageTrigger} placeholder="Project Manager" defaultValue={data?.profile.designation} required />
                            </div>
                        </div>
                        <div class="col-12 col-lg-6">
                            <div class="form-group">
                                <label>Personality Type</label>
                                <input type="text" id="personality" name="personality" placeholder="Lorem ipsum"  defaultValue={data?.profile.personality_type} required />
                            </div>
                        </div>
                        <div class="col-12 col-lg-6">
                            <div class="form-group">
                                <label>Team Capability Score</label>
                                <input type="text" id="teamcapability" name="teamcapability" placeholder="80%" defaultValue={data?.profile.Team_capability_score} required />
                            </div>
                        </div>
                        <div class="col-12 col-lg-6">
                            <div class="form-group">
                                <label>Status</label>
                                <input type="text" id="status" name="status" placeholder="Employed" defaultValue={data?.profile.status} required />
                            </div>
                        </div>
                        <div class="col-12 col-lg-6">
                            <div class="form-group">
                                <label>Health</label>
                                <input type="text" id="health_ass" name="health_ass" placeholder="health_ass" defaultValue={data?.profile.health_assessment} required />
                            </div>
                        </div>
                        <div class="col-12 col-lg-6">
                            <div class="form-group">
                                <label>Civil Status*</label>
                                <input type="text" id="civilstatus" name="civilstatus" placeholder="Lorem ipsum" defaultValue={data?.profile.civil_status} required />
                            </div>
                        </div>
                        <div class="col-12 col-lg-6">
                            <div class="form-group">
                                <label>Project Team</label>
                                <input type="text" id="team" name="team" placeholder="Lorem ipsum" defaultValue={data?.profile.project_team} required/>
                            </div>
                        </div>
                        <hr/>
                        <div class="col-12 col-lg-6">
                            <div class="form-group">
                                <label for="Training">Training Completion</label>
                                <div class="form-check">
                                    {/* {console.log(designationOptions)} */}
                                    {designationOptions?.map((x) =>{
                                        if ( training_data && training_data.includes(x)) {
                                            return(
                                                <>
                                                <input class="form-check-input" type="checkbox" onChange={valueChnage} id={x} value={x} checked/>
                                                    {x} <br/>
                                                </>
                                            )                                          
                                        } else {
                                                return(
                                                    <>
                                                    <input class="form-check-input" type="checkbox" onChange={valueChnage} id={x} value={x} />
                                                        {x} <br/>
                                                    </>
                                                )                                          
                                            }                                        
                                    })}
                                    
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-12 btn-col">
                            <input type="submit"  onClick={()=>{
                                this.submitFun(training_data)
                                }} class="primary-btn" name="save" value="Save" />
                        </div>
                    </div>
                </div>
            </div>
       
   

</main>
</div>

        </>
    }
} 

export default adminLayout(AdminBlankPage);