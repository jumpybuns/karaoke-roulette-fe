import React, { Component } from 'react'

export default class ErrorMessage extends Component {

    state = {
        email: '',
        password: '',
        loading: false,
        error: null
    }
    try {
    this.setState({ loading: true, error: null })
}
//to copy pasta to login and signup
catch (e) {
    this.setState({
        error: `${e.message} : invalid email or password`
    })

    render() {
        return (
            <div>
                {this.state.error && <div style={{ color: 'red' }}>{this.state.error}</div>}

            </div>
        )
    }
}




}

