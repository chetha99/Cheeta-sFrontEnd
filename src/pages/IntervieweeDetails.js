import React from "react";
import adminLayout from "../hoc/adminLayout"
import office from '../assets/images/office-building-icon.svg'
import { Divider, Table } from 'antd';
import logo from "../assets/images/logo-white.png"
import interviewee from '../assets/images/interviewee-left-bg.png'
import './../assets/css/profile.css';

class AdminBlankPage extends React.Component {

    proceedFun = () => {
        const email= document.getElementById('result').value;

        fetch(`http://127.0.0.1:8000/employee_profiles/${email}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
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
    
    }
    constructor(props){
        super(props);

        this.state = {}
    }
    componentWillMount() {
      document.body.classList.add('no-sidebar');
  }
    render(){
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
                    <div class="row">
                        <div class="col-12 col-lg-6">
                            <h3>Welcome</h3>
                      
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-lg-5 img-block">
                    <figure>
                        <img src={interviewee} class="img-fluid" alt="img" />
                    </figure>
                </div>
                <div class="col-12 col-lg-7 form-block">
                    <div class="row">
                        <div class="col-12 content-col">
                            <p>We believe in compatibility between teams and new team members. <br/>Let’s assess whether you and our team are compatible in few simple steps. However the final<br/> decision of<br/> your recruitment will be taken by the recruitment team. <br/>Good Luck!</p>
                        </div>
                        <div class="col-12 content-col type-two">
                            <p>Follow the below link to access the personality assessment. Provide the personality type<br/> generated at the 
end of the<br/> assessment at the end of the test below.<br/><a href="#">Link</a></p>
                        </div>
                        <div class="col-12 col-lg-4 btn-col">
                            {/* <form> */}
                                <div class="form-group">
                                    <input type="text" id="result" name="result" placeholder="candidate's email address" />
                                </div>
                                <br/>
                                <div class="form-group">
                                    <input type="submit"  onClick={this.proceedFun} class="primary-btn" name="save" value="Proceed" />
                                </div>
                            {/* </form> */}
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

export default adminLayout(AdminBlankPage);