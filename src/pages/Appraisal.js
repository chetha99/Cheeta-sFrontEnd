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
        "Communication skills workshop","Team building workshop","Critical Thinking and Problem Solving ", "Business Knowledge", "Data Analysis","Requirements Gathering","Project management", "Stakeholder Management", "Technical Knowledge"
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
        const status1= document.getElementById('status1').value;
        const status2= document.getElementById('status2').value;
        const status3= document.getElementById('status3').checked;
        const team= document.getElementById('team').value;

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
            health_assessment1: status1,
            health_assessment2: status2,
            health_assessment3: status3
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
                    if(data?.profile?.email){
                        fetch(`http://127.0.0.1:8000/dashboard/${data?.profile?.email}`)
                        .then(response => response.json())
                        .then(data2 => {
                            let workEffort = 1;
                            if(data?.profile?.project_team === "projectA"){
                                workEffort = 0.4;
                            }else if (data?.profile?.project_team === "projectB"){
                                workEffort = 0.5;
                            }else if (data?.profile?.project_team === "projectC"){
                                workEffort = 0.1;
                            }else{
                                workEffort = 0;
                            }

                            const Team_capability_score =  parseFloat((data2?.user?.status*0.7)+parseFloat(data2?.user?.model_percentage*0.0003)+parseFloat(workEffort*0.15));

                            const userData = {
                                first_name: data?.profile?.first_name,
                                last_name: data?.profile?.last_name,
                                email: data?.profile?.email,
                                Team_capability_score: Team_capability_score*100,
                                designation: data?.profile?.designation,
                                personality_type: data?.profile?.personality_type,
                                civil_status: data?.profile?.civil_status,
                                status: data?.profile?.status,
                                project_team: data?.profile?.project_team,
                                training_completion: data?.profile?.training_completion,
                                health_assessment1: data?.profile?.health_assessment1,
                                health_assessment2: data?.profile?.health_assessment2,
                                health_assessment3: data?.profile?.health_assessment3
                                };

                                fetch(`http://127.0.0.1:8000/employee_profiles/${data?.profile?.email}`, {
                                    method: 'PUT',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify(userData)
                                    })
                                    .then(response => response.json())
                                    .then(data3 => {
                                        window.location.assign("http://localhost:3000/employee-details");
                                    })
                                    .catch(error => console.error(error));
                        })
                        .catch(error => {
                            console.log(error);
                        });
                    }
                    
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
            case "Project coordinator":
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
        if (data?.profile?.health_assessment3) {
            document.getElementById('status3').checked = true;
          }

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
                case "Project coordinator":        
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
                                <label for="status">Status</label>
                                <select id="status" name="status" class="form-control" required>
                                    <option value="">Select Option</option>
                                    {data?.profile.status === "Employed" ? <option value="Employed" selected>Employed</option> : <option value="Employed">Employed</option> }
                                    {data?.profile.status === "UnEmployed" ? <option value="UnEmployed" selected>UnEmployed</option> : <option value="UnEmployed">UnEmployed</option> }
                                    {data?.profile.status === "Rejected" ? <option value="Rejected" selected>Rejected</option> : <option value="Rejected">Rejected</option> }
                                </select>
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
                            <label for="status">Project Team</label>
                                <select id="team" name="team" class="form-control" required>
                                    <option value="">Select Option</option>
                                    {data?.profile.project_team === "projectA" ? <option value="projectA" selected>projectA</option> : <option value="projectA">projectA</option> }
                                    {data?.profile.project_team === "projectB" ? <option value="projectB" selected>projectB</option> : <option value="projectB">projectB</option> }
                                    {data?.profile.project_team === "projectC" ? <option value="projectC" selected>projectC</option> : <option value="projectC">projectC</option> }
                                </select>
                                {/* <input type="text" id="team" name="team" placeholder="Lorem ipsum" defaultValue={data?.profile.project_team} required/> */}
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
                        <hr/>
                        

                        <label><b>Health Assessment</b></label>

                        <div class="col-12 col-lg-12">
                            <div class="form-group">
                                <label>Do you have any pre-existing medical conditions? Specify if, Yes</label>
                                <input type="text" id="status1" name="status1" placeholder="Type No or Yes" defaultValue={data?.profile.health_assessment1} required />
                            </div>
                        </div><br/>
                        <div class="col-12 col-lg-12">
                            <div class="form-group">
                                <label>Do you have history of mental health conditions such as anxiety or depression that could impact your job? Specify if Yes</label>
                                <input type="text" id="status2" name="status2" placeholder="Type No or Yes" defaultValue={data?.profile.health_assessment2} required />
                            </div>
                        </div><br/>
                        <div class="col-12 col-lg-12">
                            <div class="form-group">
                                <label>Are you willing to participate in a pre-employement medical check up?</label><br/>
                                <input class="form-check-input" type="checkbox" id="status3" name="status3" value="1"/>
                                    <label class="form-check-label" for="status3">
                                        &nbsp;Sure
                                    </label>
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