import React from "react";
import adminLayout from "../hoc/adminLayout"

class AdminBlankPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {}
    }

    render(){
        return <>
<div>
<h1>RecruIT | Admin Overview</h1>
</div>

        </>
    }
}

export default adminLayout(AdminBlankPage);