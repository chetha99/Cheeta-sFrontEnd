import React, { Component } from 'react';
import config from '../configs/config';
import requestHelper from './helpers/requestHelper';
const helper = new requestHelper();
class AuthenticationAPI extends Component {
    async SignupAPI(data) {
        const payload = {
            company_code: data.company_code,
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            password: data.password,
        }
        const returndata = await helper.POST('user/', payload);
        return returndata;
    }

    async LoginAPI(email) {

        const returndata = await helper.GET('user/', email)
        return returndata;
    }

    render() {
        return null;
    }
}

export default AuthenticationAPI;
