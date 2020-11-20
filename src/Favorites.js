import React, { Component } from 'react'
import { fetchAllFavorites, deleteFavorites } from './utils';

export default class Favorites extends Component {
    state = {
        favorites: [],
        favoriteId: 0,
    }

    componentDidMount = async () => {
        const response = await fetchAllFavorites(this.props.token)
        await this.setState({ favorites: response.body });
    }

    handleDelete = async (someId) => {
        await deleteFavorites(someId, this.props.token);
        const response = await fetchAllFavorites(this.props.token)
        await this.setState({ favorites: response.body });
    }

    render() {
        console.log(this.state.favoriteId,)
        return (
            <div className='favorites'>
                <div className='favoritesdiv'>
                    Favorite Song List
                </div>
                <ul>
                    {
                        !!this.state.favorites.length && this.state.favorites.map(fave =>
                            <li className='favoriteslist'>
                                    <img className='favoritesthumbnail' src={fave.thumbnails} alt={fave.title} />
                                <div>{fave.videoId}</div>
                                    <p>{fave.title}</p>
                                <div>{fave.userId}</div>
                                    <button className="trash" imagevalue={fave.id} onClick={() => this.handleDelete(fave.id)}>
                                         Delete this video from favorites list</button>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}
