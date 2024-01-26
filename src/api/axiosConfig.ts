import axios from 'axios';

export default axios.create({
  // baseURL: 'http://172.20.10.4:8080',
  baseURL: 'https://bab5-156-17-147-35.ngrok-free.app',
  headers: {
    'Content-type': 'application/json',
    'ngrok-skip-browser-warning': 'true',
  },
});