import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><NavLink  to='/home'  activeStyle={{display: 'none'}}>Home</NavLink> </li>
                    
                    <li><NavLink to='/videos'  activeStyle={{display: 'none'}}>Karaoke Room</NavLink> </li>

                    <li><NavLink  to='/favorites'  activeStyle={{display: 'none'}}>Favorites</NavLink> </li>

                    <li><NavLink  to='/aboutus'  activeStyle={{display: 'none'}}> About Us </NavLink> </li>
                </ul>

                 
                    {/* <NavLink to='/' >Home</NavLink> 
                    <NavLink to='/videos' >Karaoke Room</NavLink> 
                    <NavLink to='.favorites' >Favorites</NavLink> 
                    <NavLink to='./aboutus' >About Us</NavLink>  */}
             
            </div>
        )
    }
}
