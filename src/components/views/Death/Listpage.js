import React, { Component } from "react";
import { Table } from "reactstrap";
import DeathCard from "./DeathCard";
import PersonCard from "../Person/PersonCard";

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
        const { Deathes } = this.props;
        return (
            <>
                <Table style={tablestyle} hover>
                    <thead>
                    <tr>
                        <th>환자</th>
                        <th>사망여부</th>

                    </tr>
                    </thead>
                    <tbody>
                    {Deathes &&
                    Deathes.map((death) => {
                        return (
                            <DeathCard
                                person_id={death.person_id}
                                death_date={death.death_date}
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
