import React from "react";
import "../../assets/css/login.css"
import { Link } from 'react-router-dom';
import authLayout from "../../hoc/authLayout";
import loginimage from "../../assets/images/signup-bg-img.png"
import logo from "../../assets/images/logo.png"

class LoginPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {};
    }

    render(){
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
                        <img src={logo}class="img-fluid" alt="Image" />
                    </figure>
                    <h4>Login</h4>
                    <form>
                        <div class="form-group">
                            <input type="text" id="useername" name="useername" placeholder="User Name" required />
                        </div>
                        <div class="form-group">
                            <input type="password" id="password" name="password" placeholder="Password" required />
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