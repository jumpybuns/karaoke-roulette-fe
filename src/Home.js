import React, { Component } from 'react'
import { randomName } from './utils';


export default class Home extends Component {
    state = {
        name: '',
        lastName: '',
    }
   
    fetchName = async () => {
        const response = await randomName(this.props.token)

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
    {
        return (
            <div className="home">
                <div className='topofhome'>
                    <h1>Welcome to Karaoke Roulette! <br /> Your stage name is...</h1>
                </div>
                    <h1 className='stagename'> {this.state.name}  {this.state.lastName}!</h1>
                <button className='namebutton' onClick={this.buttonClick}>
                    click here to select a different randomized name if you dare to mess with destiny 
                </button>              
            </div>
        )
    }
}
