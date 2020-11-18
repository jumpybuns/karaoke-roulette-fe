import request from 'superagent';




const herokuBackend = 'https://rocky-dawn-10139.herokuapp.com/'
// const localBackend = 'http://localhost:4000/';


export async function fetchFavorites(someId) {
    try{
        const response = await request.get(`${herokuBackend}api/favorites/${someId}`);
        return response.body;
    } catch(e) {
        throw e;
    }
}

export async function deleteFavorites(someId) {
    try {
        await request.delete(`${herokuBackend}api/favorites/${someId}`);
        
        return;
    } catch(err) {
        throw err;
    }
}
export async function signUp(payload) {
    try {
  
        return await request.post(`${herokuBackend}auth/signup`)
        .send(payload);
    } catch(err) {
        throw err;
    }
}
export async function randomName(payload) {
    try {
        return await request
        .get(`${herokuBackend}api/random-name`)
        .set('Authorization', payload);
    } catch(err) {
        throw err;
    }
}



