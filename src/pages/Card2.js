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
                   
                   <div className="row">
                   
                    <div className="col-md-4">
                    <div class="card">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
   
   <p>Name:</p>
   <p>Age:</p>
   <p>Address:</p>
   <p>Tel:</p>
   <p>Fax:</p>
   <p>Email:</p>
  </div>
</div>
                    </div>
                    <div className="col-md-4">
                    <div class="card">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
   
   <p>Name:</p>
   <p>Age:</p>
   <p>Address:</p>
   <p>Tel:</p>
   <p>Fax:</p>
   <p>Email:</p>
  </div>
</div>
                    </div>
                    <div className="col-md-4">
                    <div class="card">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
   
   <p>Name:</p>
   <p>Age:</p>
   <p>Address:</p>
   <p>Tel:</p>
   <p>Fax:</p>
   <p>Email:</p>
  </div>
</div>
                    </div>
                   </div>

                   <div className="row">
                   
                   <div className="col-md-4">
                   <div class="card">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
   
   <p>Name:</p>
   <p>Age:</p>
   <p>Address:</p>
   <p>Tel:</p>
   <p>Fax:</p>
   <p>Email:</p>
  </div>
</div>
                   </div>
                   <div className="col-md-4">
                   <div class="card">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
   
   <p>Name:</p>
   <p>Age:</p>
   <p>Address:</p>
   <p>Tel:</p>
   <p>Fax:</p>
   <p>Email:</p>
  </div>
</div>
                   </div>
                   <div className="col-md-4">
                   <div class="card">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
   
   <p>Name:</p>
   <p>Age:</p>
   <p>Address:</p>
   <p>Tel:</p>
   <p>Fax:</p>
   <p>Email:</p>
  </div>
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