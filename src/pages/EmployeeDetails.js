import React from "react";
import adminLayout from "../hoc/adminLayout"
import office from '../assets/images/office-building-icon.svg'
import { Divider, Table } from 'antd';

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
        render: () => <a className="btn btn-xs btn-info">View</a>,
      },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      email: 'a@a.com',
      project: 'aa',
      designation: 'ss',
      status: 'active'
    },
    {
      key: '2',
      name: 'John Brown',
      email: 'a@a.com',
      project: 'aa',
      designation: 'ss',
      status: 'active'
    },
    {
      key: '3',
      name: 'John Brown',
      email: 'a@a.com',
      project: 'aa',
      designation: 'ss',
      status: 'active'
    },
    {
        key: '4',
        name: 'John Brown',
        email: 'a@a.com',
        project: 'aa',
        designation: 'ss',
        status: 'active'
      },
      {
        key: '5',
        name: 'John Brown',
        email: 'a@a.com',
        project: 'aa',
        designation: 'ss',
        status: 'active'
      },
      {
        key: '6',
        name: 'John Brown',
        email: 'a@a.com',
        project: 'aa',
        designation: 'ss',
        status: 'active'
      },
      {
        key: '7',
        name: 'John Brown',
        email: 'a@a.com',
        project: 'aa',
        designation: 'ss',
        status: 'active'
      },
      {
        key: '8',
        name: 'John Brown',
        email: 'a@a.com',
        project: 'aa',
        designation: 'ss',
        status: 'active'
      },
      {
        key: '9',
        name: 'John Brown',
        email: 'a@a.com',
        project: 'aa',
        designation: 'ss',
        status: 'active'
      },
  ];

class AdminBlankPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {}
    }

    render(){
        return <>
<div>
<h1 hidden>RecruIT | Company Details</h1>

<main class="main-wrapper" role="main">

    <section class="inner-full-section">
        <div class="container-fluid">
           
            <div class="row">
               
            <div class="col-12 col-lg-12 table-block">
                    <Table columns={columns} dataSource={data} size="small" />    
                    </div>
            </div>
        </div>
    </section>

</main>
</div>

        </>
    }
}

export default adminLayout(AdminBlankPage);