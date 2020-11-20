import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './App.css';

export default class Header extends Component {
    render() {
        return (
            <>
            <div className='headerdiv'>
                <ul className='headerul'>

                    <li><NavLink to='/home' activeStyle={{ display: 'none' }}>Home</NavLink> </li>

                    <li><NavLink to='/videos' activeStyle={{ display: 'none' }}>☆Enter the Karaoke Room!☆</NavLink> </li>

                    <li><NavLink to='/favorites' activeStyle={{ display: 'none' }}>Favorite Songs</NavLink> </li>

                    <li><NavLink to='/aboutus' activeStyle={{ display: 'none' }}> About Us </NavLink> </li>

                    <li><NavLink to='/login' onClick={this.props.logout}>Log Out </NavLink> </li>

                </ul>
            </div>
            </>
        )
    }
}
