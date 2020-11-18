import React, { Component } from 'react'
import request from 'superagent';


export default class Home extends Component {
    state = {
        name: '',
        lastName: '',
    }
    // fetchName = async () => {
    //     const response = await request
    //     .get('https://rocky-dawn-10139.herokuapp.com/random-name');
    //     await this.setState({toDoList: response.body});

    // }
    fetchName = async () => {
        const response = await request
            .get('https://rocky-dawn-10139.herokuapp.com/api/random-name')
            .set('Authorization', this.props.token)
        await this.setState({ name: response.body.name, lastName: response.body.last_name });
        console.log(response.body)
    }

    componentDidMount = async () => {
        this.fetchName();
    }
    buttonClick = async (e) => {
        e.preventDefault();

        await this.fetchName();
    }

    render() 
        // console.log(this.props.token);
    {
        return (
            <div className="home">
                <button onClick={this.buttonClick}>button</button>

                <h1> {this.state.name} {this.state.lastName}</h1>




            </div>
        )
    }
}
