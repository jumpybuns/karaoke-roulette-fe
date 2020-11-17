import React, { Component } from 'react';
import request from 'superagent';

export default class VideoPage extends Component {
    state = {
        videos: [],
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
        const response = await request.get('https://rocky-dawn-10139.herokuapp.com/api/videos')
        .set('Authorization', token)

        await this.setState({ videos: response.body, loading: false })
        
    }


    render() {

        const randomIndex =  Math.floor(Math.random()*(this.state.videos.length-1))
        console.log(this.state.videos);


        return (
            <div>
                


            </div>
        )
    }
}
