import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><NavLink  to='/' >Home</NavLink> </li>
                    <li><NavLink to='/videos' >Karaoke Room</NavLink> </li>
                    <li><NavLink to='/favorites' >Favorites</NavLink> </li>
                    <li><NavLink to='/aboutus' >About Us</NavLink> </li>
                </ul>

                 
                    {/* <NavLink to='/' >Home</NavLink> 
                    <NavLink to='/videos' >Karaoke Room</NavLink> 
                    <NavLink to='.favorites' >Favorites</NavLink> 
                    <NavLink to='./aboutus' >About Us</NavLink>  */}
             
            </div>
        )
    }
}
