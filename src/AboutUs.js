import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Rhone from './rhone.jpg';
import Sarah from './sarah.jpg';
import Ray from './ray.jpg';
import Ethan from './ethan.jpg';



export default class AboutUs extends Component {
    render() {
        return (
                <div>
                    <div>
                    <section className="about-title">
                        About the Creators
                    </section>
                    </div>
                    <div className="bio">
                            <Link to="https://www.linkedin.com/in/rhonelachner/">
                            <img alt="Rhone" src={Rhone} height="150px"/>  
                            </Link>
                        <p>Rhone Lachner<br></br>
                        This person is a person and whooo boy, what a person</p>
                    </div>
                    <div className="bio">
                            <Link to="https://www.linkedin.com/in/sarah-skillen-7339b61b8/">
                            <img alt="Sarah" src={Sarah}  height="150px"/>
                            </Link>
                        <p>Sarah Skillen<br></br>This person is a person and whooo boy, what a person</p>
                    </div>
                    <div className="bio">
                            <Link to="https://www.linkedin.com/in/raysakultarawattn/">
                            <img alt="Ray" src={Ray} height="150px"/></Link>
                        <p>Ray Sakultarawattn<br></br>This person is a person and whooo boy, what a person</p>
                    </div>
                    <div className="bio">
                        
                        <Link to="https://www.linkedin.com/in/ethanpiercepresents/">
                        <img alt="Ethan" src={Ethan} height="150px"/></Link>
                        <p>Ethan Pierce<br></br> This person is a person and whooo boy, what a person </p>
                    </div>
                    
                </div>    
                )
    }
}
