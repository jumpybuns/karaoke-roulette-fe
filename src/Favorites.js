import React, { Component } from 'react'
import request from 'superagent';
import { fetchAllFavorites } from './utils';



export default class Favorites extends Component {
    state = {
        favorites: [],

    }


    componentDidMount = async () => {
        const response = await fetchAllFavorites(this.props.token)

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
