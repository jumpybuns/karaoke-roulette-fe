import React, { Component } from 'react'
import request from 'superagent';
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
                <h2>Sign Up</h2>
                <form onSubmit={this.handleSubmit}>
                    <label className="email">
                        Email:
                        <input
                            onChange={(e) => this.setState({ email: e.target.value })}
                            value={this.state.email} />
                    </label>
                    <label className="pass">
                        Password:
                        <input
                            onChange={(e) => this.setState({ password: e.target.value })}
                            value={this.state.password} type="password" />
                    </label>
                    {
                        this.state.loading
                            ? 'loading...'
                            : <button>
                                Sign Up!
                        </button>

                    }

                </form>
            </div>
        )
    }
}
