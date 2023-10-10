import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000'})

export const  LogIn = (authData) => API.post('/user/login', authData);
export const SignUp = (authData) => API.post('/user/signup', authData);
export const postQuestion = (questionData) => API.post('/questions/ASK', questionData)
export const getAllQuestions  = () => API.get('/questions/get');