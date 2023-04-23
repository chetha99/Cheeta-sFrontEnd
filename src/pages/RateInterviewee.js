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

 
    render(){

       
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

                        <Link to="/employee-details" class="white-bg-btn">
                          Back
                        </Link>
                        </div>
                    </div>
                   <div className="row">
                    <div className="col-md-12">
                        <br/>
<h4>1. Appearance</h4>
                    </div>
                    <div className="col-md-12">
                        <br/>
                    <Radio.Group >
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
<h4>2. Technicak Skills</h4>
                    </div>
                    <div className="col-md-12">
                        <br/>
                    <Radio.Group >
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
<h4>3. Qulifications</h4>
                    </div>
                    <div className="col-md-12">
                        <br/>
                    <Radio.Group >
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
                    <Radio.Group >
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
<h4>5. Long Tearm Objective</h4>
                    </div>
                    <div className="col-md-12">
                        <br/>
                    <Radio.Group >
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
<h4>6. Overoll Rating</h4>
                    </div>
                    <div className="col-md-12">
                        <br/>
                    <Radio.Group >
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