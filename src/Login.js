import React, { Component } from 'react'
import request from 'superagent';

export default class Login extends Component {

    state = {
        email: '',
        password: '',
        loading: false,
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        this.setState({ loading: true })
        const user = await request
            .post('')
            .send(this.state);

        this.setState({ loading: false })

        this.props.changeTokenAndUsername(user.body.email, user.body.token);

        this.props.history.push('/home');
    }



    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Login</h2>
                    <label>
                        Email:
                        <input
                            onChange={(e) => this.setState({ password: e.target.value })}
                            value={this.state.password} type="password" />
                    </label>
                    {
                        this.state.loading
                            ? 'loading...'
                            : <button>
                                Login!
                        </button>
                    }
                </form>


            </div>
        )
    }
}
