import React, { Component } from 'react';
import axios from 'axios';
import Listpage from "./Listpage";
import './style.css';

const styles = theme => ({
    root: {
        width: "100%",
        minWidth: 1080
    },
    paper: {
        marginTop: 20,
        marginLeft: 18,
        marginRight: 18
    },
    progress: {
        margin: theme.spacing.unit * 2
    }
});

class ConditionList extends Component {
    constructor(props){
        super(props);
        this.state = {
            completed: 0,
            loading: false,
            conditions: [],
        }
        this.stateRefresh = this.stateRefresh.bind(this);
    }
    stateRefresh = () => {
        this.setState({
            conditions: [],
            completed: 0
        })
        this.loadPerson();
    }

    loadCondition = async () => {
        await axios.get('http://localhost:4000/condition_occurrence')
            .then(response => {
                this.setState({
                    loading: true,
                    conditions: response.data
                });
            })
            .catch(e => {
                console.error(e);
                this.setState({
                    loading: false
                });
            });
    };

    componentDidMount() {
        this.loadCondition();
    }

    render() {
        return (
            <>
                <div>
                    <Listpage Conditions={this.state.conditions} stateRefresh={this.stateRefresh} />
                </div>
            </>
        );
    }
}

export default (ConditionList)
