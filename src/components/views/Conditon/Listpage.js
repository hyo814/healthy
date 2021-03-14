import React, { Component } from "react";
import { Table } from "reactstrap";
import ConditionCard from "./ConditionCard";

const tablestyle = {
    width: "56%",
    margin: "2% auto"
}

class Listpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        const { Conditions } = this.props;
        return (
            <>
                <Table style={tablestyle} hover>
                    <thead>
                    <tr>
                        <th>환자</th>
                        <th>진단정보</th>

                    </tr>
                    </thead>
                    <tbody>
                    {Conditions &&
                    Conditions.map((condition) => {
                        return (
                            <ConditionCard
                                person_id={condition.person_id}
                                condition_concept_id={condition.condition_concept_id}
                                stateRefresh = {this.props.stateRefresh}
                            />
                        );
                    })}
                    </tbody>
                </Table>
            </>
        );
    }
}
export default Listpage;
