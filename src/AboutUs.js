import React, { Component } from 'react';
import Rhone from './rhoneimg.jpg';
import Sarah from './sarah.jpg';
import Ray from './ray.jpg';
import Ethan from './ethan.jpg';
import Linkedin from './linkedinlogo.png';
import Twitter from './twitterlogo.png';
import GitHub from './githubicon.png'




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
                    <p>Rhone is a software engineer, nature enthusiast, and mom of two living in Vancouver, WA. <br /> Their karaoke got-to song is Run D Mc.</p>
                    <span className='icons'>
                        <a href="https://www.linkedin.com/in/sarah-skillen-7339b61b8/">
                            <img className='linkedinlogo' alt="linkedinlogo" src={Linkedin} height="25px" width='25px' />
                        </a>
                        <a href="https://twitter.com/@SarahSkillen3">
                            <img className='twitterlogo' alt="twitterlogo" src={Twitter} height="25px" width="25px" />
                        </a>
                        <a href="https://github.com/sarah-svg">
                        <img className='githublogo' alt="githublogo" src={GitHub} height="27px" width='27px' />
                        </a>
                    </span>
                </div>


                <div className="bio">

                    <img className='profileimg' alt="Rhone" src={Rhone} height="150px" />
                    <h3 className='name'>Rhone Lachner</h3>
                    <p>Rhone is a software engineer, nature enthusiast, and muscian living in Portland Oregon. <br/> Their karaoke go-to song is Time after Time by Cyndi Lauper.</p>
                    <span className='icons'>
                        <a href="https://www.linkedin.com/in/rhonelachner/">
                            <img className='linkedinlogo' alt="linkedinlogo" src={Linkedin} height="25px" width='25px' />
                        </a>
                        <a href="https://twitter.com/rhone_zone/">
                            <img className='twitterlogo' alt="twitterlogo" src={Twitter} height="25px" width="25px" />
                        </a>
                        <a href="https://github.com/RhoneLachner">
                        <img className='githublogo' alt="githublogo" src={GitHub} height="27px" width='27px' />
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
                        <a href="https://github.com/RSakultarawattn">
                        <img className='githublogo' alt="githublogo" src={GitHub} height="27px" width='27px' />
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
                        <a href="https://twitter.com/EthanPierce82">
                            <img className='twitterlogo' alt="twitterlogo" src={Twitter} height="25px" width="25px" />
                        </a>
                        <a href="https://github.com/jumpybuns">
                        <img className='githublogo' alt="githublogo" src={GitHub} height="27px" width='27px' />
                        </a>
                    </span>
                </div>
                <div className='ethanaboutus'></div>

            </div>
        )
    }
}
