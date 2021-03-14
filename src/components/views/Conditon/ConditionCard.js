import React from "react";

const tablestyle = {
    lineHeight: "20px"
}

class ConditionCard extends React.Component {
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
                    {this.props.condition_concept_id}
                </td>
            </tr>
        );
    }
}
export default ConditionCard;