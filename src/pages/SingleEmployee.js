import React from "react";
import adminLayout from "../hoc/adminLayout"
import office from '../assets/images/office-building-icon.svg'
import { Divider, Table } from 'antd';
import logo from "../assets/images/logo-white.png"
import avatar from '../assets/images/avatar-icon.svg'
import { Link } from "react-router-dom";

class AdminBlankPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {}
    }

    render(){
        return <>
<div>
<h1 hidden>RecruIT | Employee Details</h1>

<main class="main-wrapper" role="main">

    <section class="inner-full-section">
        <div class="container-fluid">
           
            <div class="row">
                
                <div class="col-12 col-lg-12 form-block">
                    <div class="row top-row">
                        <div class="col-12 col-lg-6 left px-0">
                            <figure>
                                <img src={avatar} class="img-fluid" alt="icon" />
                            </figure>
                            <span>Adam Kannangara</span>
                        </div>
                        <div class="col-12 col-lg-6 right px-0 text-right">
                        {/* <Link to="/appraisal" class="white-bg-btn">
                            Appraisal
                        </Link> */}

                        <Link to="/employee-details" class="white-bg-btn">
                            View List
                        </Link>
                        </div>
                    </div>
                    <div class="row form-inner">
                        <div class="col-12 col-lg-6">
                            <div class="form-group">
                                <label>First Name</label>
                                <input type="text" id="firstname" name="firstname" placeholder="Adam" required />
                            </div>
                        </div>
                        <div class="col-12 col-lg-6">
                            <div class="form-group">
                                <label>Last Name</label>
                                <input type="text" id="lastname" name="lastname" placeholder="Kannangara" required />
                            </div>
                        </div>
                        <div class="col-12 col-lg-6">
                            <div class="form-group">
                                <label>Email</label>
                                <input type="email" id="email" name="email" placeholder="adam@email.com" required />
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
                                <input type="text" id="personality" name="personality" placeholder="Lorem ipsum" required />
                            </div>
                        </div>
                        <div class="col-12 col-lg-6">
                            <div class="form-group">
                                <label>Team Capability Score</label>
                                <input type="text" id="teamcapability" name="teamcapability" placeholder="80%" required />
                            </div>
                        </div>
                        <div class="col-12 col-lg-6">
                            <div class="form-group">
                                <label>Status</label>
                                <input type="text" id="status" name="status" placeholder="Employed" required />
                            </div>
                        </div>
                        <div class="col-12 col-lg-6">
                        </div>
                        <div class="col-12 col-lg-6">
                            <div class="form-group multiple">
                                <label>Project Team</label>
                                <input type="text" id="team" name="team" placeholder="Lorem ipsum" />
                                <input type="text" id="team" name="team" placeholder="Lorem ipsum" />
                                <input type="text" id="team" name="team" placeholder="Lorem ipsum" />
                            </div>
                        </div>
                        <div class="col-12 col-lg-6">
                            <div class="form-group multiple">
                                <label>Training Completion</label>
                                <input class="complete" type="text" id="Training" name="Training" placeholder="Lorem ipsum" />
                                <input type="text" id="Training" name="Training" placeholder="Lorem ipsum" />
                                <input class="complete" type="text" id="Training" name="Training" placeholder="Lorem ipsum" />
                            </div>
                        </div>
                        <div class="col-12 col-lg-6">
                            <div class="form-group">
                                <label>Civil Status*</label>
                                <input type="text" id="civilstatus" name="civilstatus" placeholder="Lorem ipsum" required />
                            </div>
                        </div>
                        <div class="col-12 col-lg-6">
                            <div class="form-group">
                                <label>Lorem ipsum</label>
                                <input type="text" id="Lorem ipsum" name="Lorem ipsum" placeholder="Lorem ipsum" required />
                            </div>
                        </div>
                        <span class="border-line"></span>
                        <div class="col-12">
                            <h5>Health Assessment</h5>
                        </div>
                        <div class="col-12 col-lg-4">
                            <div class="form-group">
                                <label>Lorem ipsum</label>
                                <input type="text" id="Lorem ipsum" name="Lorem ipsum" placeholder="Lorem ipsum" required />
                            </div>
                        </div>
                        <div class="col-12 col-lg-4">
                            <div class="form-group">
                                <label>Lorem ipsum</label>
                                <input type="text" id="Lorem ipsum" name="Lorem ipsum" placeholder="Lorem ipsum" required />
                            </div>
                        </div>
                        <div class="col-12 col-lg-4">
                            <div class="form-group">
                                <label>Lorem ipsum</label>
                                <input type="text" id="Lorem ipsum" name="Lorem ipsum" placeholder="Lorem ipsum" required />
                            </div>
                        </div>
                        <div class="col-12 col-lg-4">
                            <div class="form-group">
                                <label>Lorem ipsum</label>
                                <input type="text" id="Lorem ipsum" name="Lorem ipsum" placeholder="Lorem ipsum" required />
                            </div>
                        </div>
                        <div class="col-12 col-lg-4">
                            <div class="form-group">
                                <label>Lorem ipsum</label>
                                <input type="text" id="Lorem ipsum" name="Lorem ipsum" placeholder="Lorem ipsum" required />
                            </div>
                        </div>
                        <div class="col-12 col-lg-4">
                            <div class="form-group">
                                <label>Lorem ipsum</label>
                                <input type="text" id="Lorem ipsum" name="Lorem ipsum" placeholder="Lorem ipsum" required />
                            </div>
                        </div>
                        <div class="col-12 btn-col">
                            <input type="submit" class="primary-btn" name="save" value="Save" />
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