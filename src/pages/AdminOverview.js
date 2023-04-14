import React from "react";
import adminLayout from "../hoc/adminLayout"
import { PieChart } from 'react-minimal-pie-chart';
import CardMain from "./card";

class AdminBlankPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }
  componentDidMount() {
    // const url = 'http://127.0.0.1:8000/employee_profiles';


    fetch('http://127.0.0.1:8000/dashboard')
      .then(response => response.json())
      .then(data => {
        this.setState({ data });
      })
      .catch(error => {
        console.log(error);
        this.setState({ loading: false });
      });
  }
  render() {
    const {data} = this.state;
    return <>
      <div>
        <h1>RecruIT | Admin Overview</h1>
        <br/>
        <br/>

        {data?.length === undefined ? "no data" :
        (
          <>
            {data.map(x=>{

              return (
                <>
                <CardMain
                  name= {x.name}
                  email={x.email}
                  designation={x.designation}
                  Team_capability_score={x.Team_capability_score}
                  personality_type={x.personality_type}
                  modal_accuracy={x.model_percentage}
                />
                <br/>
                <br/>
                <br/>
                </>
                
              )
            })}
          </>
        )}
      </div>
    </>
  }
}

export default adminLayout(AdminBlankPage);