import React from "react";
import { VictoryPie } from "victory";
import styled from 'styled-components';


const data = [
    { gender: "F", number: 452 },
    { gender: "M", number: 548 },
];

const GenderChart = () => {
    return (
        <Div>
            <h3> 1. 성별 환자 수 Gender Pie Chart</h3>
            <VictoryPie data={data} x="gender" y="number"/>
        </Div>
    );
}

const Div = styled.div`
    width: 40%;
    margin:5% auto;
    `;

export default GenderChart;