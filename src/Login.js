import React, { Component } from 'react'
// import request from 'superagent';
import { login } from './utils';
import { Link } from 'react-router-dom';

export default class Login extends Component {

    state = {
        email: '',
        password: '',
        loading: false,
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        this.setState({ loading: true })
        const user = await login(this.state)

        this.setState({ loading: false })

        this.props.changeTokenAndUsername(user.body.email, user.body.token);

        this.props.history.push('/home');
    }



    render() {
        return (
            <div className='login'>
                <form className='loginform' onSubmit={this.handleSubmit}>
                    <h2>Please Log in Below.</h2>
                    <label className='loginemail'>                        
                        <input placeholder='Enter email Here'
                            onChange={(e) => this.setState({ email: e.target.value })}
                            value={this.state.email} />
                    </label>
                    <label className='loginpass'>                      
                        <input placeholder='Enter Password Here'
                            onChange={(e) => this.setState({ password: e.target.value })}
                            value={this.state.password} type="password" />
                    </label>
                    {
                        this.state.loading
                            ? 'loading...'
                            : <button className='loginbutton'>
                                Submit
                        </button>
                    }
                    <div className='linkdiv'>
                    <Link to='login'>Click here to navigate to Login Page</Link>
                    </div>
                </form>
            </div>
        )
    }
}
