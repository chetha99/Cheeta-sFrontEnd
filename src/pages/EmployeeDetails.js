import React from "react";
import adminLayout from "../hoc/adminLayout"
import office from '../assets/images/office-building-icon.svg'
import { Divider,Input, Table } from 'antd';
import { Link } from "react-router-dom";

const { Search } = Input;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),

  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Project/Team',
    dataIndex: 'project',
    sorter: (a, b) => a.name.localeCompare(b.name),

  },
  {
    title: 'Designation',
    dataIndex: 'designation',
    sorter: (a, b) => a.name.localeCompare(b.name),

  },
  {
    title: 'Status',
    dataIndex: 'status',
    filters: [
      { text: 'Employed', value: 'employed' },
      { text: 'Not Employed', value: 'Not Employed' },
    ],
    onFilter: (value, record) => record.status.toLowerCase() === value,
    render: (status) => (
      <span style={{ 
        backgroundColor: status.toLowerCase() !== 'employed' ? 'rgba(255, 100, 100, 0.4)' : 'rgba(100, 255, 100, 0.4)' ,
        borderRadius: 4,
        padding: '4px 8px',
        display: 'inline-block',
        color: 'black',
        }}>
        {status}
      </span>
    ),
  },
  {
    title: 'Action',
    dataIndex: 'action',
    render: (text, record) => (
      <>
      <Link to="/appraisal">
        <a
          className="btn btn-xs btn-info"
          onClick={() => {
            localStorage.setItem("selectedEmployee", JSON.stringify(record.email));
          }}
        >
          View
        </a>
      </Link> &nbsp;
      <Link to="/appraisal">
      <a
        className="btn btn-xs btn-success"
        onClick={() => {
          // localStorage.setItem("selectedEmployee", JSON.stringify(record.email));
          fetch(`http://127.0.0.1:8000/employee_profiles/${record.email}`)
          .then(response => response.json())
          .then(data => {
              console.log(data)
              if(data?.detail === "Employee profile not found"){
                  alert("email not found")
              }else{

                  localStorage.setItem("EmplyeeInfo", JSON.stringify(data.profile));
                  window.location.assign("http://localhost:3000/interviewee-details-part-2");
              }
          })
          .catch(error => {
              console.log(error);
          });
        }}
      >
        AI Info
      </a>
    </Link>&nbsp;
    <Link to="/rate-interviewee">
        <a
          className="btn btn-xs btn-secondary"
          onClick={() => {
            localStorage.setItem("selectedEmployee", JSON.stringify(record.email));
          }}
        >
          Rate
        </a>
      </Link> 
      </>
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
