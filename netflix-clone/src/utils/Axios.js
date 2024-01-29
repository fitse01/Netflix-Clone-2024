import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;



// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YmM4MzRlZjY0ZjU2YmE1NWQ4ZGYzMDFlN2UwOTY3MiIsInN1YiI6IjY1YjEwZDdiYmU2ZDg4MDE5MjQzZWRlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BKyIKPc-DtcfnC5OwYMWpoQN6B9rGHBPeHFa_cY3rQk'
//   }
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });