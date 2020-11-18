import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Rhone from './rhone.jpg';
import Sarah from './sarah.jpg';
import Ray from './ray.jpg';
import Ethan from './ethan.jpg';
import Linkedin from './linkedinlogo.png';



export default class AboutUs extends Component {
    render() {
        return (
                <div className='aboutus'>
                    <div>
                    <section className="about-title">
                        About the Creators
                    </section>
                    </div>


                    <div className="bio">
                  
                    <img className='sarahimg' alt="Sarah" src={Sarah}  height="150px"/>
                    <p>Sarah Skillen</p>
                    <p>This person is a person and whooo boy, what a person<br/>
                  
                    <a href="https://www.linkedin.com/in/sarah-skillen-7339b61b8/">
                            <img className='linkedinlogo' alt="linkedinlogo" src={Linkedin} height="55px"/> 
                            </a>
                            </p>
                                                   
                    </div>


                    <div className="bio">
                    
                        <img className='rhoneimg' alt="Rhone" src={Rhone} height="150px"/>
                        <p>Rhone Lachner</p>
                        <p>This person is a person and whooo boy, what a person <br/>
                        
                            <a href="https://www.linkedin.com/in/rhonelachner/">
                            <img className='linkedinlogo' alt="linkedinlogo" src={Linkedin} height="55px"/> 
                            </a>
                            </p>
                                               
                    </div> 


                    <div className="bio">
                    
                            <img className='rayimg' alt="Ray" src={Ray} height="150px"/>
                            <p>Ray Sakultarawattn</p>
                            <p>This person is a person and whooo boy, what a person<br/>
                            <a href="https://www.linkedin.com/in/raysakultarawattn/">
                            <img className='linkedinlogo' alt="linkedinlogo" src={Linkedin} height="55px"/> 
                            </a>                 
                            </p>    
                    </div>


                    <div className="bio">  
                    
                        <img className="ethanimg" alt="Ethan" src={Ethan} height="150px"/>
                        <p>Ethan Pierce</p>
                        <p>This person is a person and whooo boy, what a person <br/>
                        <a href="https://www.linkedin.com/in/ethanpiercepresents/">
                        <img className='linkedinlogo' alt="linkedinlogo" src={Linkedin} height="55px"/>                         
                        </a>          
                        </p>             
                    </div>
                    
                </div>    
                )
    }
}
