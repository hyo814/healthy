import React from "react";
import { VictoryPie } from "victory";
import styled from 'styled-components';


const data = [
    { ethnicity: "hispanic", number: 120 },
    { ethnicity: "nonhispanic", number: 880 },
];

const EthnicityChart = () => {
    return (
        <Div>
            <h3> 3. 민족별 환자 수 Ethnicity Pie Chart </h3>
            <VictoryPie data={data} x="ethnicity" y="number"/>

        </Div>
    );
}

const Div = styled.div`
  width: 40%;
  margin:5% auto;
`;

export default EthnicityChart;