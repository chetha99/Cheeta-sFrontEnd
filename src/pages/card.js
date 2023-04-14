import { Card, Col, Row } from 'antd';
import React from "react";
import Chart from "react-apexcharts";

const options = {
  chart: {
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: "50%",
      },
      dataLabels: {
        name: {
          show: false,
        },
        value: {
          offsetY: 0,
          fontSize: "22px",
        },
      },
    },
  },
  fill: {
    type: "gradient",
    gradient: {
        shade: "dark",
        type: "vertical",
        shadeIntensity: 0.35,
        gradientToColors: ['#ABE5A1', '#95C2E7', '#FFB347'],
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 100]
      },
  },
  stroke: {
    dashArray: 5,
  },
  labels: ["Model Accuracy"],
};


const CardMain = (props) => {
    
const series = [props.modal_accuracy];
return(
  <Row gutter={16}>
    <Col span={4}>

    </Col>
    <Col span={10}>
      <Card title={props.name} bordered={false}>
            <b> Email: </b> {props.email} <br/>
            <b> Designation: </b> {props.designation} <br/>
            <b> Team Capability Score: </b> {props.Team_capability_score} <br/>
            <b> Personality Type: </b> {props.personality_type} <br/>
      </Card>
    </Col>
    <Col span={6}>
        <Chart options={options} series={series} type="radialBar" height={250} />
        <center><b>Model Accuracy</b></center>

    </Col>
    <Col span={4}>
        
    </Col>
  </Row>
)};
export default CardMain;