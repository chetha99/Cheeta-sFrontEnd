import React from "react";
import adminLayout from "../hoc/adminLayout"
import office from '../assets/images/office-building-icon.svg'

class AdminBlankPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {}
    }

    render(){
        return <>
<div>
<h1 hidden>RecruIT | Company Details</h1>

<main class="main-wrapper" role="main">

    <section class="inner-full-section">
        <div class="container-fluid">
           
            <div class="row">
               
                <div class="col-12 col-lg-12 form-block">
                    <div class="row top-row">
                        <div class="col-12 col-lg-6 left px-0">
                            <figure>
                                <img src={office} class="img-fluid" alt="icon" />
                            </figure>
                            <span>Rajapakshe & Sons</span>
                        </div>
                        <div class="col-12 col-lg-6 right px-0 text-right">
                            <a href="view-list-html.html" class="white-bg-btn">View List</a>
                        </div>
                    </div>
                    <div class="row form-inner">
                        <div class="col-12 col-lg-6">
                            <div class="form-group">
                                <label>Managerial Type</label>
                                <input type="text" id="firstname" name="firstname" placeholder="Lorem ipsum" required />
                            </div>
                        </div>
                        <div class="col-12 col-lg-6">
                            <div class="form-group">
                                <label>Incentive Cycle</label>
                                <input type="text" id="lastname" name="lastname" placeholder="Lorem ipsum" required />
                            </div>
                        </div>
                        <div class="col-12 col-lg-6">
                            <div class="form-group">
                                <label>Recreational Activities</label>
                                <input type="email" id="email" name="email" placeholder="Lorem ipsum" required />
                            </div>
                        </div>
                        <div class="col-12 col-lg-6">
                            <div class="form-group">
                                <label>Work Mode</label>
                                <input type="text" id="designation" name="designation" placeholder="Lorem ipsum" required />
                            </div>
                        </div>
                        <div class="col-12 col-lg-6">
                            <div class="form-group multiple">
                                <label>Suggested Training For Teams</label>
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