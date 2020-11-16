import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import './App.css';
import Login from './Login.js'
import SignUp from './SignUp.js'
import Home from './Home.js'
import PrivateRoute from './PrivateRoute.js'

// import Favorites from './Favorites'

export default class App extends Component {
  state = {
    username: localStorage.getItem('USERNAME') || '',
    token: localStorage.getItem('TOKEN') || '',

  }

  changeTokenAndUsername = (userName, token) => {
    localStorage.setItem('TOKEN', token);
    localStorage.setItem('USERNAME', userName);

    this.setState({
      username: userName,
      token: token
    })
  }

  logOut = () => {
    localStorage.setItem('TOKEN', '');
    localStorage.setItem('USERNAME', '');

    this.setState({
      username: '',
      token: ''
    })
  }

  render() {
    return (
      <div>
        <Router>
          <ul>
            {
              this.state.token
                ? <div>
                  {this.state.username}
                  <button onClick={this.logOut}>Log Out</button>
                </div>
                : <>
                  <Link to="/login"><div className="log">Log in</div></Link>
                  <Link to="/signup"><div className="sign">Sign up</div></Link>
                </>}
          </ul>
          <Switch>

            <Route exact path='/login' render={(routerProps) =>
              <Login
                {...routerProps}
                changeTokenAndUsername={this.changeTokenAndUsername}
              />
            }
            />


            <Route
              exact
              path='/signup'
              render={(routerProps) =>
                <SignUp
                  {...routerProps}
                  changeTokenAndUsername={this.changeTokenAndUsername}
                />
              }
            />
            <PrivateRoute
              token={this.state.token}
              exact
              path='/home'
              render={(routerProps) => <Home {...routerProps} token={this.state.token} />} />
          </Switch>

        </Router>
      </div>
    )
  }
}

