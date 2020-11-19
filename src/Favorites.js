import React, { Component } from 'react'
// import request from 'superagent';
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
        // e.preventDefault();
        await deleteFavorites(someId, this.props.token );

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
                                <button value={fave.id} onClick = {() =>this.handleDelete(fave.id)}>delete favorite</button>
                                <div>{fave.videoId}</div>
                                <p>{fave.title}</p>
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
