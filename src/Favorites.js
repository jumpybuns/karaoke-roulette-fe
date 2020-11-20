import React, { Component } from 'react'
// import request from 'superagent';
import { fetchAllFavorites, deleteFavorites } from './utils';
import trash from './delete.png';
import { Link } from 'react-router-dom';



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
        // e.preventDefault();
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
                                <Link
                                    className='favoriteslinkitem' to={`/details/${fave.favorite}`}>
                                    <img src={fave.thumbnails} alt={fave.title} />
                                </Link>
                                <div>{fave.videoId}</div>
                                <p>{fave.title}</p>
                                <div>{fave.userId}</div>
                                <button className="trash" imagevalue={fave.id} onClick={() => this.handleDelete(fave.id)}> <img className='trashicon' src={trash} alt="trash" width='15' /> Delete this video from favorites list.</button>

                            </li>
                        )
                    }
                </ul>
                {/* <button onClick={this.handleDelete}>Delete</button> */}
            </div>
        )
    }
}
