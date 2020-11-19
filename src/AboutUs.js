import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import Rhone from './rhoneimg.jpg';
import Sarah from './sarah.jpg';
import Ray from './ray.jpg';
import Ethan from './ethan.jpg';
import Linkedin from './linkedinlogo.png';
import Twitter from './twitterlogo.png';
// import Header from './Header.png'



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

                    <img className='profileimg' alt="Sarah" src={Sarah} height="150px" />
                    <h3 className='name'>Sarah Skillen</h3>
                    <p>Hey person is a person and whooo boy, what a person <br /> Hey person is a person and whooo boy, what a person </p>
                    <span className='icons'>
                        <a href="https://www.linkedin.com/in/sarah-skillen-7339b61b8/">
                            <img className='linkedinlogo' alt="linkedinlogo" src={Linkedin} height="25px" width='25px' />
                        </a>
                        <a href="https://twitter.com/">
                            <img className='twitterlogo' alt="twitterlogo" src={Twitter} height="25px" width="25px" />
                        </a>
                    </span>
                </div>


                <div className="bio">

                    <img className='profileimg' alt="Rhone" src={Rhone} height="150px" />
                    <h3 className='name'>Rhone Lachner</h3>
                    <p>Hey person is a person and whooo boy, what a person <br /> Hey person is a person and whooo boy, what a person </p>
                    <span className='icons'>
                        <a href="https://www.linkedin.com/in/rhonelachner/">
                            <img className='linkedinlogo' alt="linkedinlogo" src={Linkedin} height="25px" width='25px' />
                        </a>
                        <a href="https://twitter.com/rhone_zone/">
                            <img className='twitterlogo' alt="twitterlogo" src={Twitter} height="25px" width="25px" />
                        </a>
                    </span>
                </div>


                <div className="bio">

                    <img className='profileimg' alt="Ray" src={Ray} height="150px" />
                    <h3 className='name'>  Ray Sakultarawattn </h3>
                    <p>Ray is a full stack developer that has lived in Oregon all of his life.<br /> He currently lives with his wife and two boys in a suburb of Portland.</p>
                    <span className='icons'>
                        <a href="https://www.linkedin.com/in/raysakultarawattn/">
                            <img className='linkedinlogo' alt="linkedinlogo" src={Linkedin} height="25px" width='25px' />
                        </a>
                        <a href="https://twitter.com/RSakultarawattn/">
                            <img className='twitterlogo' alt="twitterlogo" src={Twitter} height="25px" width="25px" />
                        </a>
                    </span>

                </div>


                <div className="bio">

                    <img className="profileimg" alt="Ethan" src={Ethan} height="150px" />
                    <h3 className='name'>Ethan Pierce</h3>
                    <p>Full stack software engineer recently transitioned from full time audio engineer. An aura of audiophile but code is where the heart is.</p>
                    <span className='icons'>
                        <a href="https://www.linkedin.com/in/ethanpiercepresents/">
                            <img className='linkedinlogo' alt="linkedinlogo" src={Linkedin} height="25px" width='25px' />
                        </a>
                        <a href="https://twitter.com/">
                            <img className='twitterlogo' alt="twitterlogo" src={Twitter} height="25px" width="25px" />
                        </a>
                    </span>
                </div>



            </div>
        )
    }
}
