import React, { Component } from 'react';
import config from '../../configs/config';

class requestHelper extends Component {
    async POST(URL, PAYLOAD) {
        try {
            const response = await fetch(config.API_URL + URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(PAYLOAD)
            });
            const responsedata = await response.json();
            return responsedata;
        } catch (error) {
            console.error(error);
        }
    }

    async GET(URL, PARAM) {
        try {
            const response = await fetch(config.API_URL + URL + PARAM, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const jsonData = await response.json();
            return jsonData;
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        return null;
    }
}

export default requestHelper;
