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
        const userType = localStorage.getItem("userType")
        console.log(userType);
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
                            {/* <li class="menu-active"> */}
                            {userType === "Staff" && 
                                <>
                                
                                <li>
                                <Link to="/admin-overview" >
                                        <figure>
                                            <img src={overviewicon} class="img-fluid" alt="icon" />
                                        </figure>
                                        <span>Overview</span>
                                </Link>
                                
                                </li>
                                <li>
                                <Link to="/employee-details">
                                        <figure>
                                            <img src={employeeicon} class="img-fluid" alt="icon" />
                                        </figure>
                                        <span>Employee Details</span>
                                </Link>
                                
                                </li>
                                {/* <li>
                                <Link to="/interviewee-details" target="_blank">
                                        <figure>
                                            <img src={profileaddicon} class="img-fluid" alt="icon" />
                                        </figure>
                                        <span>AI Test</span>
                                </Link>
                                
                                </li> */}
                                {/* <li>
                                <Link to="/interviewee-details-2">
                                        <figure>
                                            <img src={profileaddicon} class="img-fluid" alt="icon" />
                                        </figure>
                                        <span>Add Employee Details</span>
                                </Link>
                                
                                </li> */}
                                <li>
                                <Link to="/company-details">
                                        <figure>
                                            <img src={companyicon} class="img-fluid" alt="icon" />
                                        </figure>
                                        <span>Company Details</span>
                                </Link>
                                
                                </li>
                                </>
                            }

                                {userType === "User" && 
                                <>
                                
                                {/* <li>
                                <Link to="/interviewee-details" target="_blank">
                                        <figure>
                                            <img src={profileaddicon} class="img-fluid" alt="icon" />
                                        </figure>
                                        <span>AI Test</span>
                                </Link>
                                
                                </li> */}
                                <li>
                                <Link to="/appraisalCopy">
                                        <figure>
                                            <img src={profileaddicon} class="img-fluid" alt="icon" />
                                        </figure>
                                        <span>Your Details</span>
                                </Link>
                                
                                </li>
                                </>
                            }
                            
                        </ul>
                        <Link to="/">
                            <button type="button" class="secondary-btn s-button">Sign Out</button>
                        </Link>
                    </div>
            </PerfectScrollbar>
           
        </div>
    }
}

export default Sidebar;