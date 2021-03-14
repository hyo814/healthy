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

class TotalList extends Component {
    constructor(props){
        super(props);
        this.state = {
            completed: 0,
            loading: false,
            totals: [],
        }
        this.stateRefresh = this.stateRefresh.bind(this);
    }
    stateRefresh = () => {
        this.setState({
            totals: [],
            completed: 0
        })
        this.loadTotal();
    }

    loadTotal = async () => {
        await axios.get('http://localhost:4000/visit_occurrence')
            .then(response => {
                this.setState({
                    loading: true,
                    totals: response.data
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
        this.loadTotal();
    }

    render() {
        return (
            <>
                <div>
                    <Listpage Totals={this.state.totals} stateRefresh={this.stateRefresh} />
                </div>
            </>
        );
    }
}

export default (TotalList)
