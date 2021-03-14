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
                    {this.props.person_id}
                </td>
                <td style={tablestyle}>
                    {this.props.gender_source_value}
                </td >
                <td style={tablestyle}>
                    {this.props.birth_datetime}
                </td>
                <td style={tablestyle}>
                    {this.props.race_source_value}
                </td>
                <td style={tablestyle}>
                    {this.props.ethnicity_source_value}
                </td>
                <td style={tablestyle}>
                    2021 - {this.props.birth_datetime.substring(0,4)}
                </td>
            </tr>
        );
    }
}
export default TotalCard;