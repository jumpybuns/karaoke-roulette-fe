import React, { Component } from 'react';
import request from 'superagent';
import { getRandomVideo } from './utils';





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

        const response = await getRandomVideo(token)
         


        await this.setState({ videos: response.body, loading: false })

    }

    handleClick = async () => {
        await this.fetchVideos()
    }


    handleFavorite = async () => {
        const { thumbnails, title, videoId } = this.state.videos;
        const favorite = {
            videoId: videoId,
            title: title,
            thumbnails: thumbnails
        };
        console.log(this.props.token)
        await request
            .post(`${process.env.REACT_APP_BACK_END_URL}/api/favorites`)
            .set('Authorization', this.props.token)
            .send(favorite);

    }

    render() {


        // const randomIndex =  Math.floor(Math.random()*(this.state.videos.length-1))
        // console.log(this.state.videos);


        return (

            <>

                <div className="video-page">
                    <div>


                        <form>
                            <label>

                                <div>

                                    <iframe title="youTubeVideo" id="player" type="text/html" width="640" height="390"
                                        src={`http://www.youtube.com/embed/${this.state.videos.videoId}?enablejsapi=1&origin=http://example.com`}
                                        frameBorder="0"></iframe>
                                </div>


                            </label>



                            <div className='favoritevideobuttondiv'>
                                <button onClick={this.handleFavorite} className='favoritevideobutton'>
                                    Save video to favorites
                             </button>
                            </div>




                        </form>


                        <div className='reloadVideoButton'>
                            <button className='videobutton' onClick={this.handleClick}>
                                Select a new Randomized song!
                             </button>
                        </div>

                    </div>
                </div>
            </>


        )
    }
}
