import React, { Component } from 'react';
import request from 'superagent';

export default class VideoPage extends Component {
    state = {
        videos: {},
        title: '',
        thumbnail: '',
        loading: false
    }

    componentDidMount = async () => {
        await this.fetchVideos()
    }


    fetchVideos = async () => {
        const { token } = this.props;

        await this.setState({ loading: true });
        const response = await request.get('https://rocky-dawn-10139.herokuapp.com/api/random-videos')
        .set('Authorization', token)

        await this.setState({ videos: response.body, loading: false })

    }


    render() {

        const randomIndex =  Math.floor(Math.random()*(this.state.videos.length-1))
        console.log(this.state.videos);


        return (
            <div>
                      
               
                <form >
                    <label>
                         
                        <div>
                            {/* <iframe title="youTubeVideo" id="player" type="text/html" width="640" height="390"

                                src={`https://www.youtube.com/watch?v=${this.state.videos.videoId}`} 
                                frameborder="0">

                            </iframe> */}
                            <iframe title="youTubeVideo" id="player" type="text/html" width="640" height="390"
  src={`http://www.youtube.com/embed/${this.state.videos.videoId}?enablejsapi=1&origin=http://example.com`}
  frameborder="0"></iframe>
                            </div>

                    

                        <button>
                            Select a new Randomized song!                             
                        </button>
                        </label>
                </form>


            </div>
        )
    }
}
