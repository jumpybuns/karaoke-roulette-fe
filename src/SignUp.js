import React, { Component } from 'react'
// import request from 'superagent';
import { signUp } from './utils';


export default class SignUp extends Component {

    state = {
        email: '',
        password: '',
        loading: false,
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        this.setState({ loading: true })
        const user = await signUp(this.state)


        this.setState({ loading: false })

        this.props.changeTokenAndUsername(user.body.email, user.body.token);

        this.props.history.push('/home');
    }




    render() {
        return (
            <div className='signup'>
                <h2>Please sign up below.</h2>
                <form className='submitform' onSubmit={this.handleSubmit}>
                    <label className="email">
                       
                        <input placeholder='Enter email Here'
                            onChange={(e) => this.setState({ email: e.target.value })}
                            value={this.state.email} />
                    </label>
                    <label className="pass">
                       
                        <input placeholder='Enter Password Here'
                            onChange={(e) => this.setState({ password: e.target.value })}
                            value={this.state.password} type="password" />
                    </label>
                    {
                        this.state.loading
                            ? 'loading...'
                            : <button className='signupbutton'> Submit</button>

                    }

                </form>
            </div>
        )
    }
}
