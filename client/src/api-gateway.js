const baseUrl = 'https://jsonplaceholder.typicode.com'
const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
}

const API_METHODS = {
    post: 'POST',
    get: 'GET',
    delete: 'DELETE',
    put: 'PUT',
}


const ApiAdapter = (endPoint, { method , body }) => {
    const url = `${baseUrl}${endPoint}?format=json`
    
    return fetch(url, {
        method: method,
        ...body && { body : JSON.stringify(body) },
        headers
    })
    .then(res => res.json())
    .catch(error=> error);
}

export const getUsers = async () => {

    try {
        const meta = {
            method: API_METHODS['get'],
        };
    
        const resp = await ApiAdapter('/users', meta)
        return resp;
        
    } catch (err) {
        console.error(err);
    }
};

export const getComments = async () => {

    try {
        const meta = {
            method: API_METHODS['get'],
        };
    
        const resp = await ApiAdapter('/posts/1/comments', meta)
        return resp;
        
    } catch (err) {
        console.error(err);
    }
};

export const getPosts = async () => {

    try {
        const meta = {
            method: API_METHODS['get'],
        };
    
        const resp = await ApiAdapter('/users/1/posts', meta)
        return resp;
        
    } catch (err) {
        console.error(err);
    }
};

