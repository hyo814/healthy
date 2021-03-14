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
        const { Totals } = this.props;
        return (
            <>
                <Table style={tablestyle} hover>
                    <thead>
                    <tr>
                        <th>방문허용ID</th>
                        <th>환자</th>
                        <th>방문자</th>
                        <th>시작 시간</th>
                        <th>끝 시간</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Totals &&
                    Totals.map((total) => {
                        return (
                            <TotalCard
                                visit_occurrence_id={total.visit_occurrence_id}
                                person_id={total.person_id}
                                visit_concept_id={total.visit_concept_id}
                                visit_start_datetime={total.visit_start_datetime}
                                visit_end_datetime={total.visit_end_datetime}
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
