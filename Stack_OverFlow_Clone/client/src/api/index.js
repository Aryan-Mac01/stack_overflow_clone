import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000'})

export const  LogIn = (authData) => API.post('/user/login', authData);
export const SignUp = (authData) => API.post('/user/signup', authData);