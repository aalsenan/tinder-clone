import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://kareem-tinder-backend.herokuapp.com',
})

export default instance;