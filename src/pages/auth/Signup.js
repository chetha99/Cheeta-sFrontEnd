import React from "react";
import "../../assets/css/login.css"
import { Link } from 'react-router-dom';
import authLayout from "../../hoc/authLayout";
import signupimage from "../../assets/images/signup-bg-img.png"
import logo from "../../assets/images/logo.png"

class ResetPassword extends React.Component {
    constructor(props){
        super(props);

        this.state = {};
    }

    render(){
        return <>
           <div>
           <h1 hidden>RecruIT | Sign Up</h1>

<main class="main-wrapper signup-wrapper" role="main">

    <section class="signup-section">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-lg-9 img-block">
                    <figure>
                        <img src={signupimage} class="img-fluid" alt="Image" />
                    </figure>
                </div>
                <div class="col-12 col-lg-3 form-block">
                    <figure>
                        <img src={logo} class="img-fluid" alt="Image" />
                    </figure>
                    <h4>Sign Up</h4>
                    <form>
                        <div class="form-group">
                            <input type="text" id="companycode" name="companycode" placeholder="Company Code" required />
                        </div>
                        <div class="form-group">
                            <input type="text" id="firstname" name="firstname" placeholder="First Name" required />
                        </div>
                        <div class="form-group">
                            <input type="text" id="lastname" name="lastname" placeholder="Last Name" required />
                        </div>
                        <div class="form-group">
                            <input type="email" id="email" name="email" placeholder="Email" required />
                        </div>
                        <div class="form-group">
                            <input type="password" id="password" name="password" placeholder="Password" required />
                        </div>
                        <div class="form-group">
                            <input type="password" id="confirmpassword" name="confirmpassword" placeholder="Confirm Password" required />
                        </div>
                        <div class="form-group">
                            <input type="submit" class="primary-btn" name="createaccount" value="Create Account" />
                        </div>
                    </form>
                    <p>Already a member? <Link to={'/'}> Login</Link></p>
                </div>
            </div>
        </div>
    </section>

</main>
           </div>
        </>
    }
}

export default authLayout(ResetPassword);