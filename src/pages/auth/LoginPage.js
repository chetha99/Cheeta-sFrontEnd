import React from "react";
import "../../assets/css/login.css"
import { Link } from 'react-router-dom';
import authLayout from "../../hoc/authLayout";
import loginimage from "../../assets/images/signup-bg-img.png"
import logo from "../../assets/images/logo.png"
import AuthenticationAPI from "../../api/AuthenticationAPI";
const auth = new AuthenticationAPI();
class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            useername: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(event.target.value);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const return_data = await auth.LoginAPI(this.state.useername);
        if (return_data.user.password === this.state.password) {
            localStorage.setItem('email', return_data.user.email);
            localStorage.setItem('first_name', return_data.user.first_name);
        } else {
            alert("Error username or password")
        }
    }

    render() {
        return <>
            <div>
                <h1 hidden>RecruIT | Login</h1>

                <main class="main-wrapper signup-wrapper" role="main">

                    <section class="signup-section">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-12 col-lg-9 img-block">
                                    <figure>
                                        <img src={loginimage} class="img-fluid" alt="Image" />
                                    </figure>
                                </div>
                                <div class="col-12 col-lg-3 form-block">
                                    <figure>
                                        <img src={logo} class="img-fluid" alt="Image" />
                                    </figure>
                                    <h4>Login</h4>
                                    <form onSubmit={this.handleSubmit}>
                                        <div class="form-group">
                                            <input type="text" id="useername" name="useername" value={this.state.useername} placeholder="User Name" required onChange={this.handleChange} />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" id="password" name="password" value={this.state.password} placeholder="Password" required onChange={this.handleChange} />
                                        </div>
                                        <div class="form-group">
                                            <input type="submit" class="primary-btn" name="submit" value="Submit" />
                                        </div>
                                    </form>
                                    <p>New to RecruIT? <Link to={'/signup'}> Sign up</Link></p>
                                </div>
                            </div>
                        </div>
                    </section>

                </main>
            </div>
        </>
    }
}

export default authLayout(LoginPage);