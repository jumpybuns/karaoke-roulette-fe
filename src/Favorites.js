import React, { Component } from 'react'
import request from 'superagent';



export default class Favorites extends Component {
    state = { 
        favorites : [],
        userId: this.state.owner_id
    }


    componentDidMount = async () => {
        const response = await request
            .get(`${process.env.REACT_APP_BACK_END_URL}/api/favorites`)
            .set('Authorization', this.props.token)

        this.setState({ favorites: response.body });

    }
    render() {

        return (
            <div>
                Favorites!!
                <ul>
                    { 
                        !!this.state.favorites.length && this.state.favorites.map(fave => 
                            <li>
                                <div>{fave.id}</div>
                                <div>{fave.videoId}</div>
                                <div>{fave.title}</div>
                                <div>{fave.thumbnails}</div>
                                <div>{fave.userId}</div>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}
