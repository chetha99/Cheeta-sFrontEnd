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
                   
<div class="jumbotron">
  <h1 class="display-4">Thank You!</h1>
  <br/>
 
  <hr class="my-4" />
  <p class="lead">Please wait for the confirmation</p>
</div>

                </div>

</main>
</div>
        </>
    }
}

export default adminLayout(AdminBlankPage);