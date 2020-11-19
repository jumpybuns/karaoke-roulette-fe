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
            <div>
                Favorites!!
                <ul>
                    {
                        !!this.state.favorites.length && this.state.favorites.map(fave =>
                            <li>
                                <button className="trash" imagevalue={fave.id} onClick={() => this.handleDelete(fave.id)}> <img src={trash} alt="trash" width='15' /></button>
                                <div>{fave.videoId}</div>
                                <Link to={`/details/${fave.favorite}`}>
                                    <p>{fave.title}</p></Link>
                                <div>{fave.thumbnails}</div>
                                <div>{fave.userId}</div>
                            </li>
                        )
                    }
                </ul>
                {/* <button onClick={this.handleDelete}>Delete</button> */}
            </div>
        )
    }
}
