import React from "react";
import "../../assets/css/login.css"
import { Link } from 'react-router-dom';
import authLayout from "../../hoc/authLayout";
import signupimage from "../../assets/images/signup-bg-img.png"
import logo from "../../assets/images/logo.png"
import AuthenticationAPI from "../../api/AuthenticationAPI";
const auth = new AuthenticationAPI();

class ResetPassword extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            confirmpassword: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    async handleSubmit(event) {
        event.preventDefault();
        const payload = {
            company_code: "C001",
            first_name: this.state.firstname,
            last_name: this.state.lastname,
            email: this.state.email,
            password: this.state.password,
        }
        if (this.state.confirmpassword === this.state.password) {
            const return_data = await auth.SignupAPI(payload);
            alert("User Created.. Please login with " + payload.email);
            this.setState({
                firstname: '',
                lastname: '',
                email: '',
                password: '',
                confirmpassword: ''
            });
        } else {
            alert("Password and Confirm password should match");
        }
    }

    render() {
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
                                    <form onSubmit={this.handleSubmit}>
                                        {/* <div class="form-group">
                                            <input type="text" id="companycode" name="companycode" value={this.state.companycode} placeholder="Company Code" required onChange={this.handleChange} />
                                        </div> */}
                                        <div class="form-group">
                                            <input type="text" id="firstname" name="firstname" value={this.state.firstname} placeholder="First Name" required onChange={this.handleChange} />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" id="lastname" name="lastname" value={this.state.lastname} placeholder="Last Name" required onChange={this.handleChange} />
                                        </div>
                                        <div class="form-group">
                                            <input type="email" id="email" name="email" value={this.state.email} placeholder="Email" required onChange={this.handleChange} />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" id="password" name="password" value={this.state.password} placeholder="Password" required onChange={this.handleChange} />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" id="confirmpassword" name="confirmpassword" value={this.state.confirmpassword} placeholder="Confirm Password" required onChange={this.handleChange} />
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