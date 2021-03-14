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

class PersonList extends Component {
    constructor(props){
        super(props);
        this.state = {
            completed: 0,
            loading: false,
            persons: [],
        }
        this.stateRefresh = this.stateRefresh.bind(this);
    }
    stateRefresh = () => {
        this.setState({
            persons: [],
            completed: 0
        })
        this.loadPerson();
    }

    loadPerson = async () => {
        await axios.get('http://localhost:4000/person')
            .then(response => {
                this.setState({
                    loading: true,
                    persons: response.data
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
        this.loadPerson();
    }

    render() {
        return (
            <>
                <div>
                    <Listpage Persons={this.state.persons} stateRefresh={this.stateRefresh} />
                </div>
            </>
        );
    }
}

export default (PersonList)
