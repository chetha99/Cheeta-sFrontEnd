import React from "react";
import adminLayout from "../hoc/adminLayout"
import office from '../assets/images/office-building-icon.svg'
import { Divider, Table } from 'antd';
import { Link } from "react-router-dom";

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Project/Team',
    dataIndex: 'project',
  },
  {
    title: 'Designation',
    dataIndex: 'designation',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    render: (text, record) => (
      <Link to="/appraisal">
        <a
          className="btn btn-xs btn-info"
          onClick={() => {
            localStorage.setItem("selectedEmployee", JSON.stringify(record.email));
          }}
        >
          View
        </a>
      </Link>
    ),
  },
];

class AdminBlankPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [],
    };
  }

  componentDidMount() {
    // const url = 'http://127.0.0.1:8000/employee_profiles';


    fetch('http://127.0.0.1:8000/employee_profiles')
      .then(response => response.json())
      .then(data => {
        
        const modifiedData = data.map(item => {
          return {
            name:item.first_name + item.last_name,
            email:item.email,
            project:item.project_team,
            designation:item.designation,
            status:item.status,
          };
        });
        this.setState({ data: modifiedData, loading: false });
      })
      .catch(error => {
        console.log(error);
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <div>
        <h1 hidden>RecruIT | Company Details</h1>

        <main className="main-wrapper" role="main">
          <section className="inner-full-section">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 col-lg-12 table-block">
                  {this.state.loading ?
                    <p>Loading...</p> :
                    <Table columns={columns} dataSource={this.state.data} size="small" />
                  }
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default adminLayout(AdminBlankPage);
