// First we need to import axios.js
import axios from "axios";
// Next we make an 'instance' of it
const instance = axios.create({
  // .. where we make our configurations
  baseURL: "http://localhost:8888",
  withCredentials: true,
});

// Where you would set stuff like your 'Authorization' header, etc ...
// instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance;

// const instance = axios.create({
//   baseURL: 'https://api.example.com'
// });

// // Alter defaults after instance has been created
// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
