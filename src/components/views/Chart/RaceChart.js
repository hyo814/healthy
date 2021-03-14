import React from "react";
import { VictoryPie } from "victory";
import styled from 'styled-components';


const data = [
    { race: "white", number: 845 },
    { race: "asian", number: 65 },
    { race: "black", number: 86 },
];

const RaceChart = () => {
    return (
        <Div>
            <h3> 2. 인종별 환자 수 Race Pie Chart </h3>
            <VictoryPie data={data} x="race" y="number"/>

        </Div>
    );
}

const Div = styled.div`
    width: 40%;
    margin: 5% auto;
    `;

export default RaceChart;