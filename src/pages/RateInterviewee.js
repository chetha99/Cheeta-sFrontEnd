import React from "react";
import adminLayout from "../hoc/adminLayout"
import office from '../assets/images/office-building-icon.svg'
import { Col, Divider, Row, Table } from 'antd';
import logo from "../assets/images/logo-white.png"
import interviewee from '../assets/images/interviewee-left-bg.png'
import './../assets/css/profile.css';
import initModel from "../env/initialModel";
import { Link } from "react-router-dom";
import { Radio } from 'antd';

class AdminBlankPage extends React.Component { 
    constructor(props){
        super(props);

        this.state = {}
    }
    componentDidMount() {
        const email = localStorage.getItem('selectedEmployee');
        const localStorageValue = email.replace(/"/g, '');

        this.setState({localStorageValue:localStorageValue})

        fetch(`http://127.0.0.1:8000/interview_rating/${localStorageValue}`)
            .then(response => response.json())
            .then(data => {
                if(data?.profile){

                    this.setState({data1:data?.profile?.appearance,data2:data?.profile?.technical_skills,data3:data?.profile?.qualifications,data4:data?.profile?.job_expectations,data5:data?.profile?.long_term_objective,data6:data?.profile?.overall_rating,status:true});
                }else{
                    this.setState({data1:null,data2:null,data3:null,data4:null,data5:null,data6:null,status:false});
                }
            })
            .catch(error => {
                console.log(error);
                this.setState({ loading: false });
            });
    }
    render(){
        const {data1,data2,data3,data4,data5,data6,localStorageValue,status} = this.state;
        return <>
<div>
<h1 hidden>RecruIT | Interviewee Details</h1>

<main class="main-wrapper no-sidebar" role="main">

<div class="col-12 col-lg-12 form-block">
                    <div class="row top-row">
                        <div class="col-12 col-lg-6 left px-0">
                            <figure>
                               
                            </figure>
                            <span>Rate Interviewee</span>
                        </div>
                        <div class="col-12 col-lg-6 right px-0 text-right">
                        {/* <Link to="/appraisal" class="white-bg-btn">
                            Appraisal
                        </Link> */}
 
                        {/* <Link to=""  onChange={this.onSubmit} class="white-bg-btn">
                          Back
                        </Link> */}

                        <input type="submit" hidden={status} onClick={()=>{
                            if(data1 === null){
                                alert('Please rate Appearance');
                                    return;
                            }
                            if(data2 === null){
                                alert('Please rate Technical Skills');
                                    return;
                            }
                            if(data3 === null){
                                alert('Please rate Qualifications');
                                    return;
                            }
                            if(data4 === null){
                                alert('Please rate Job Expectations');
                                    return;
                            }
                            if(data5 === null){
                                alert('Please rate Long Term Objective');
                                    return;
                            }
                            if(data6 === null){
                                alert('Please rate Overall Rating');
                                    return;
                            }
                            const url = 'http://127.0.0.1:8000/interview_rating';

                            const userData = {
                            email: localStorageValue,
                            appearance: data1,
                            technical_skills: data2,
                            qualifications:data3,
                            job_expectations: data4,
                            long_term_objective: data5,
                            overall_rating: data6,
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
                                    
                                    window.location.assign("http://localhost:3000/employee-details");
                                })
                                .catch(error => console.error(error));

                        }} class="btn btn-dark" name="save" value="Proceed" />

                        </div>
                    </div>
                   <div className="row">
                    <div className="col-md-12">
                        <br/>
<h4>1. Appearance</h4>
                    </div>
                    <div className="col-md-12">
                        <br/>
                    <Radio.Group value={data1} onChange={(e)=>{
                        this.setState({data1: e.target.value})
                    }}>
      <Radio value={1}>1</Radio>
      <Radio value={2}>2</Radio>
      <Radio value={3}>3</Radio>
      <Radio value={4}>4</Radio>
      <Radio value={5}>5</Radio>
    </Radio.Group>
                    </div>
                   </div>

                   <div className="row">
                    <div className="col-md-12">
                        <br/>
<h4>2. Technical Skills</h4>
                    </div>
                    <div className="col-md-12">
                        <br/>
                    <Radio.Group value={data2} onChange={(e)=>{
                        this.setState({data2: e.target.value})

                    }}>
      <Radio value={1}>1</Radio>
      <Radio value={2}>2</Radio>
      <Radio value={3}>3</Radio>
      <Radio value={4}>4</Radio>
      <Radio value={5}>5</Radio>
    </Radio.Group>
                    </div>
                   </div>

                   <div className="row">
                    <div className="col-md-12">
                        <br/>
<h4>3. Qualifications</h4>
                    </div>
                    <div className="col-md-12">
                        <br/>
                    <Radio.Group value={data3}  onChange={(e)=>{
                        this.setState({data3: e.target.value})
                    }}>
      <Radio value={1}>1</Radio>
      <Radio value={2}>2</Radio>
      <Radio value={3}>3</Radio>
      <Radio value={4}>4</Radio>
      <Radio value={5}>5</Radio>
    </Radio.Group>
                    </div>
                   </div>

                   <div className="row">
                    <div className="col-md-12">
                        <br/>
<h4>4. Job Expectations</h4>
                    </div>
                    <div className="col-md-12">
                        <br/>
                    <Radio.Group value={data4} onChange={(e)=>{
                        this.setState({data4: e.target.value})
                    }}>
      <Radio value={1}>1</Radio>
      <Radio value={2}>2</Radio>
      <Radio value={3}>3</Radio>
      <Radio value={4}>4</Radio>
      <Radio value={5}>5</Radio>
    </Radio.Group>
                    </div>
                   </div>

                   <div className="row">
                    <div className="col-md-12">
                        <br/>
<h4>5. Long Term Objective</h4>
                    </div>
                    <div className="col-md-12">
                        <br/>
                    <Radio.Group  value={data5} onChange={(e)=>{
                        this.setState({data5: e.target.value})
                    }}>
      <Radio value={1}>1</Radio>
      <Radio value={2}>2</Radio>
      <Radio value={3}>3</Radio>
      <Radio value={4}>4</Radio>
      <Radio value={5}>5</Radio>
    </Radio.Group>
                    </div>
                   </div>

                   <div className="row">
                    <div className="col-md-12">
                        <br/>
<h4>6. Overall Rating</h4>
                    </div>
                    <div className="col-md-12">
                        <br/>
                    <Radio.Group  value={data6} onChange={(e)=>{
                        this.setState({data6: e.target.value})
                    }}>
      <Radio value={1}>1</Radio>
      <Radio value={2}>2</Radio>
      <Radio value={3}>3</Radio>
      <Radio value={4}>4</Radio>
      <Radio value={5}>5</Radio>
    </Radio.Group>
                    </div>
                   </div>


                </div>

</main>
</div>
        </>
    }
}

export default adminLayout(AdminBlankPage);