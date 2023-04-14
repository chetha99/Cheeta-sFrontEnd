import React from "react";
import adminLayout from "../hoc/adminLayout"
import office from '../assets/images/office-building-icon.svg'

class AdminBlankPage extends React.Component {
    submitFun= () => {
        const company_code = this.state.company_code;
        const managerial_Type = document.getElementById('firstname').value;
        const incentive_cycle = document.getElementById('lastname').value;
        const recreational_Activities = document.getElementById('email').value;
        const work_mode = document.getElementById('designation').value;
        const suggested_training= document.getElementById('team').value;
        const training_completion = document.getElementById('Training').value;

        if( managerial_Type === ""){
            alert('please enter your Managerial Type');
            return 
        }

        if( incentive_cycle === ""){
            alert('please enter your Incentive Cycle ');
            return 
        }

        if( recreational_Activities === ""){
            alert('please enter your Recreational Activities');
            return 
        }

        if( work_mode === ""){
            alert('please enter your Work Mode');
            return 
        }

        if( suggested_training === ""){
            alert('please enter your  Suggested Training For Teams');
            return 
        }

        if( training_completion === ""){
            alert('please enter your Training Completion');
            return 
        }

        const url = 'http://127.0.0.1:8000/company/';

        const userData = {
            company_code: company_code,
            managerial_type: managerial_Type,
            incentive_cycle: incentive_cycle,
            recreational_activities:recreational_Activities,
            work_mode: work_mode,
            suggested_training: suggested_training,
            training_completion: training_completion,
            };

            fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                alert("updated")
            })
            .catch(error => console.error(error));
    }
    constructor(props){
        super(props);

        this.state = {
            company_code : "",
            dataV:[],
        }
    }
 
    componentDidMount() {
        // call the code here; abd change the selectedEmploye
        const company_code = localStorage.getItem('company_code');
        this.setState({ company_code: company_code});

        fetch(`http://127.0.0.1:8000/company/${company_code}`)
        .then(response => response.json())
        .then(data => {
            this.setState({ dataV: data })
      })
      .catch(error => {
        console.log(error);
        this.setState({ loading: false });
      });
    }

    render(){
        const {company_code, dataV} = this.state
        console.log(dataV)
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
                            <span>{company_code}</span>
                        </div>
                    </div>
                    <div class="row form-inner">
                        <div class="col-12 col-lg-6">
                            <div class="form-group">
                                <label>Managerial Type</label>
                                <input type="text" id="firstname" name="firstname" placeholder="Lorem ipsum" defaultValue={dataV?.company?.managerial_type} required />
                            </div>
                        </div>
                        <div class="col-12 col-lg-6">
                            <div class="form-group">
                                <label>Incentive Cycle</label>
                                <input type="text" id="lastname" name="lastname" placeholder="Lorem ipsum" defaultValue={dataV?.company?.incentive_cycle} required />
                            </div>
                        </div>
                        <div class="col-12 col-lg-6">
                            <div class="form-group">
                                <label>Recreational Activities</label>
                                <input type="text" id="email" name="email" placeholder="Lorem ipsum" defaultValue={dataV?.company?.recreational_activities} required />
                            </div>
                        </div>
                        <div class="col-12 col-lg-6">
                            <div class="form-group">
                                <label>Work Mode</label>
                                <input type="text" id="designation" name="designation" placeholder="Lorem ipsum"  defaultValue={dataV?.company?.work_mode} required />
                            </div>
                        </div>
                        <div class="col-12 col-lg-6">
                                <label>Suggested Training For Teams</label>
                                <input type="text" id="team" name="team" placeholder="Lorem ipsum" defaultValue={dataV?.company?.suggested_training} />
                        </div>
                        <div class="col-12 col-lg-6">
                                <label>Training Completion</label>
                                <input class="complete" type="text" id="Training" name="Training" placeholder="Lorem ipsum" defaultValue={dataV?.company?.training_completion} />
                        </div>
                        <div class="col-12 btn-col">
                            <input type="submit" onClick={this.submitFun} class="primary-btn" name="save" value="Save" />
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