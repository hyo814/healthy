import React from "react";

const tablestyle = {
    lineHeight: "20px"
}

class DeathCard extends React.Component {
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
                    {this.props.death_date}
                </td>
            </tr>
        );
    }
}
export default DeathCard;