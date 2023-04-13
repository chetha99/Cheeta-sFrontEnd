import React from "react";
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Link } from 'react-router-dom';
import overviewicon from "../assets/images/overview-icon.svg"
import employeeicon from "../assets/images/employee-icon.svg"
import profileaddicon from "../assets/images/profile-add-icon.svg"
import companyicon from "../assets/images/company-icon.svg"

class Sidebar extends React.Component {
    constructor(props){
        super(props)

        this.state = {}
    }

    render(){
        return <div className="border-end sidenav" id="sidebar-wrapper">
            <div className="sidebar-heading border-bottom ">
                <Link to="/" className="logo-back">
                    <center>
                    <img alt="Alt content" src={require('./../assets/images/logo-white.png')} />
                    </center>
                </Link>
            </div>
            <PerfectScrollbar className="sidebar-items">
            <div class="tab-block">
            <ul class="page-list">
                            <li class="menu-active">
                                <a href="admin-overview-html.html">
                                    <figure>
                                        <img src={overviewicon} class="img-fluid" alt="icon" />
                                    </figure>
                                    <span>Overview</span>
                                </a>
                            </li>
                            <li>
                                <a href="employee-details-html.html">
                                    <figure>
                                        <img src={employeeicon} class="img-fluid" alt="icon" />
                                    </figure>
                                    <span>Employee Details</span>
                                </a>
                            </li>
                            <li>
                                <a href="interviewee-details-html.html">
                                    <figure>
                                        <img src={profileaddicon} class="img-fluid" alt="icon" />
                                    </figure>
                                    <span>Interviewee Details</span>
                                </a>
                            </li>
                            <li>
                                <a href="company-details-html.html">
                                    <figure>
                                        <img src={companyicon} class="img-fluid" alt="icon" />
                                    </figure>
                                    <span>Company Details</span>
                                </a>
                            </li>
                        </ul>
                        <button type="button" class="secondary-btn s-button">Sign Out</button>
                    </div>
            </PerfectScrollbar>
           
        </div>
    }
}

export default Sidebar;