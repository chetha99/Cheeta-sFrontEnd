import React from "react";
import adminLayout from "../hoc/adminLayout"
import office from '../assets/images/office-building-icon.svg'
import { Divider, Table } from 'antd';
import logo from "../assets/images/logo-white.png"
import interviewee from '../assets/images/interviewee-left-bg.png'
import './../assets/css/profile.css';

class AdminBlankPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {}
    }
    // componentWillMount() {
    //     document.body.classList.add('no-sidebar');
    // }
    render(){
        return <>
<div>
<h1 hidden>RecruIT | Interviewee Details</h1>

<main class="main-wrapper no-sidebar" role="main">

    <section class="inner-full-section interviewee type-two">
        <div class="container-fluid">
            {/* <div class="row navbar-row">
                <div class="col-12 col-lg-2 logo">
                    <figure>
                        <img src={logo} class="img-fluid" alt="logo" />
                    </figure>
                </div>
                
            </div> */}
            <div class="row">
                <div class="col-12 form-block">
                    <div class="row">
                        <div class="col-12 content-col type-two">
                            <p>Let’s get to know you more...</p>
                        </div>
                    </div>
                    <div class="row form-inner">
                        <div class="col-12 col-lg-4">
                            <div class="form-group">
                                <label>Civil Status*</label>
                                <input type="text" id="civilstatus" name="civilstatus" placeholder="Lorem ipsum" required />
                            </div>
                        </div>
                        <div class="col-12 col-lg-4">
                            <div class="form-group">
                                <label>Lorem ipsum</label>
                                <input type="text" id="Lorem ipsum" name="Lorem ipsum" placeholder="Lorem ipsum" required />
                            </div>
                        </div>
                        <div class="col-12 col-lg-4">
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
                    </div>
                    <div class="row">
                        <div class="col-12 col-lg-4 btn-col">
                            <input type="submit" class="primary-btn" name="save" value="Proceed" />
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