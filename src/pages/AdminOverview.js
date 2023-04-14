import React from "react";
import adminLayout from "../hoc/adminLayout"

class AdminBlankPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {}
    }
    componentDidMount() {
        // const url = 'http://127.0.0.1:8000/employee_profiles';
    
    
        fetch('http://127.0.0.1:8000/dashboard')
          .then(response => response.json())
          .then(data => {
                console.log(data)
            // const modifiedData = data.map(item => {
            //   return {
            //     name:item.first_name + item.last_name,
            //     email:item.email,
            //     project:item.project_team,
            //     designation:item.designation,
            //     status:item.status,
            //   };
            // });
            // this.setState({ data: modifiedData, loading: false });
          })
          .catch(error => {
            console.log(error);
            this.setState({ loading: false });
          });
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