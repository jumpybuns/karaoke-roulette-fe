import React, { Component } from 'react'
// import request from 'superagent';
import { signUp } from './utils';
import { Link } from 'react-router-dom';
import karaokeicon from './newkaraokeicon.png'


export default class SignUp extends Component {

    state = {
        email: '',
        password: '',
        loading: false,
        error: null
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {

            this.setState({ loading: true, error: null })
            const user = await signUp(this.state)


            this.setState({ loading: false })

            this.props.changeTokenAndUsername(user.body.email, user.body.token);

            this.props.history.push('/home');
        } catch (e) {
            this.setState({
                error: `invalid email or password`
            })
        }
    }



    render() {
        return (
            <div className='signup'>
                <h2>Please sign up below</h2>
                <form className='submitform' onSubmit={this.handleSubmit}>
                    <label className="email">
                        {this.state.error && <div style={{ color: 'red' }}>{this.state.error}</div>}
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
                    <div className='linkdiv'>
                        <Link className='loginlink' to='login'>Click here to navigate to Login Page</Link>
                    </div>
                    <div className='karaokeicondiv'>
                        <img className='karaokeicon' alt="karaokeicon" src={karaokeicon} height="300px"></img>
                    </div>
                </form>
            </div>
        )
    }
}
