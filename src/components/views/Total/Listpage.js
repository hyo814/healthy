import React, { Component } from "react";
import { Table } from "reactstrap";
import TotalCard from "./TotalCard";

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
        const { Persons } = this.props;
        return (
            <>
                <Table style={tablestyle} hover>
                    <thead>
                    <tr>
                        <th>환자</th>
                        <th>성별</th>
                        <th>생년월일</th>
                        <th>인종</th>
                        <th>민족</th>
                        <th>나이</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Persons &&
                    Persons.map((person) => {
                        return (
                            <TotalCard
                                person_id={person.person_id}
                                gender_source_value={person.gender_source_value}
                                birth_datetime={person.birth_datetime}
                                race_source_value={person.race_source_value}
                                ethnicity_source_value={person.ethnicity_source_value}
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
