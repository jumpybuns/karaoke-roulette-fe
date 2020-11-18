import request from 'superagent';


export async function fetchFavorites(someId) {
    try{
        const response = await request.get('https://rocky-dawn-10139.herokuapp.com/api/favorites/:id');
        return response.body;
    } catch(e) {
        throw e;
    }
}

export async function deleteFavorites(someId) {
    try {
        await request.delete('https://rocky-dawn-10139.herokuapp.com/api/favorites/:booger');
        
        return;
    } catch(err) {
        throw err;
    }
}