import React from "react";

const tablestyle = {
    lineHeight: "20px"
}

class TotalCard extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {
        return (
            <tr>
                <td style={tablestyle}>
                    {this.props.visit_occurrence_id}
                </td>
                <td style={tablestyle}>
                    {this.props.person_id}
                </td>
                <td style={tablestyle}>
                    {this.props.visit_concept_id}
                </td>
                <td style={tablestyle}>
                    {this.props.visit_start_datetime.substring(12,19)}
                </td>
                <td style={tablestyle}>
                    {this.props.visit_end_datetime.substring(12,19)}
                </td>
            </tr>
        );
    }
}
export default TotalCard;