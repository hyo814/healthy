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

class DeathList extends Component {
    constructor(props){
        super(props);
        this.state = {
            completed: 0,
            loading: false,
            deathes: [],
        }
        this.stateRefresh = this.stateRefresh.bind(this);
    }
    stateRefresh = () => {
        this.setState({
            deathes: [],
            completed: 0
        })
        this.loadDeath();
    }

    loadDeath = async () => {
        await axios.get('http://localhost:5000/death')
            .then(response => {
                this.setState({
                    loading: true,
                    deathes: response.data
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
        this.loadDeath();
    }

    render() {
        return (
            <>
                <div>
                    <Listpage Deathes={this.state.deathes} stateRefresh={this.stateRefresh} />
                </div>
            </>
        );
    }
}

export default (DeathList)
