import axios from 'axios';

const requester = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export default requester;
