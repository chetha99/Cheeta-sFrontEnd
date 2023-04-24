import React from "react";
import adminLayout from "../hoc/adminLayout"
import logo from "../assets/images/logo-white.png"


class AdminBlankPage extends React.Component {

    submitFun= () => {
        const firstname= document.getElementById('firstname').value;
        const lastname= document.getElementById('lastname').value;
        const email= document.getElementById('email').value;
        const designation= document.getElementById('designation').value;
        const personality= document.getElementById('personality').value;
        // const teamcapability= document.getElementById('teamcapability').value;
        const status= document.getElementById('status').value;
        const civilstatus= document.getElementById('civilstatus').value;
        const team= document.getElementById('team').value;
        // const Training= document.getElementById('Training').checked;

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
            Team_capability_score:0,
            designation: designation,
            personality_type: personality,
            civil_status: civilstatus,
            status: 'UnEmployed',
            project_team: team,
            training_completion: [],
            health_assessment: status
            };

            console.log(userData)
            fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
            })
            .then(response => response.json())
            .then(data => {
                fetch(`http://127.0.0.1:8000/employee_profiles/${email}`)
                .then(response => response.json())
                .then(data => {
                    if(data?.detail === "Employee profile not found"){
                        alert("email not found")
                    }else{
        
                        localStorage.setItem("EmplyeeInfo", JSON.stringify(data.profile));
                        window.location.assign("http://localhost:3000/interviewee-details-part-2");
                    }
                })
                .catch(error => {
                    console.log(error);
                });
               
            })
            .catch(error => console.error(error));
    
    }

    constructor(props){
        super(props);

        this.state = {}
    }
    componentWillMount() {
        document.body.classList.add('no-sidebar');
    }

    render(){
        const firstName = localStorage.getItem("first_name");
        const lastName = localStorage.getItem("last_name");
        const emailGot = localStorage.getItem("email");
        const pType = localStorage.getItem("PType");
        return <>
<div>
<main class="main-wrapper no-sidebar" role="main">

    
          
            <div class="row">
                
                <div class="col-12 col-lg-12 form-block">
                    <div class="row top-row">
                            <div class="col-12 col-lg-2 logo">
                            <figure>
                            <img src={logo} alt="logo" />
                            </figure>
                            </div>
                        
                    </div>
                    <div class="row form-inner">
                        <div class="col-12 col-lg-6">
                            <div class="form-group">
                                <label>First Name</label>
                                <input type="text" id="firstname" name="firstname" value={firstName} disabled={true} placeholder={firstName} />
                            </div>
                        </div>
                        <div class="col-12 col-lg-6">
                            <div class="form-group">
                                <label>Last Name</label>
                                <input type="text" id="lastname" name="lastname" value={lastName} disabled={true} placeholder={lastName} />
                            </div>
                        </div>
                        <div class="col-12 col-lg-6">
                            <div class="form-group">
                                <label>Email</label>
                                <input type="email" id="email" name="email" value={emailGot} disabled={true} placeholder={emailGot} />
                            </div>
                        </div>
                        <div class="col-12 col-lg-6">
                            <div class="form-group">
                                <label>Designation</label>
                                <input type="text" id="designation" name="designation" placeholder="Project Manager" required />
                            </div>
                        </div>
                        <div class="col-12 col-lg-6">
                            <div class="form-group">
                                <label>Personality Type</label>
                                <input type="text" id="personality" value={pType} disabled={true} name="personality" placeholder={pType} />
                            </div>
                        </div>
                        {/* <div class="col-12 col-lg-6">
                            <div class="form-group">
                                <label>Team Capability Score</label>
                                <input type="text" id="teamcapability" name="teamcapability" placeholder="80%" required />
                            </div>
                        </div> */}
                        <div class="col-12 col-lg-6">
                            <div class="form-group">
                                <label>Health Assessment</label>
                                <input type="text" id="status" name="status" placeholder="Health Assessment" required />
                            </div>
                        </div>
                        
                        <div class="col-12 col-lg-6">
                            <div class="form-group">
                                <label>Civil Status*</label>
                                <input type="text" id="civilstatus" name="civilstatus" placeholder="Civil Status" required />
                            </div>
                        </div>
                        <div class="col-12 col-lg-6">
                            <div class="form-group">
                                <label>Project Team</label>
                                <input type="text" id="team" name="team" placeholder="Project Team" required/>
                            </div>
                        </div>
                        {/* <div class="col-12 col-lg-6">
                        <div class="form-group">
                        <label for="Training">Training Completion</label>
                        <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="Training" name="Training" value="1" />
                        <label class="form-check-label" for="Training">
                            Completed
                        </label>
                        </div>
                    </div>
                        </div> */}
                        
                        <div class="col-12 btn-col">
                            <input type="submit"  onClick={this.submitFun} class="primary-btn" name="save" value="Save" />
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