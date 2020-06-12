// const url = process.env.REACT_APP_API_URL;
import Axios from 'axios';

const API_BASE_URL =
    process.env.REACT_APP_API_BASE_URL || 'http://ec2-63-35-195-229.eu-west-1.compute.amazonaws.com';
Axios.defaults.baseURL = `${API_BASE_URL}/api/v1`;

/**
 * Axios public instance
 */
const axios = Axios.create({
  headers: {
    Accept: 'application/json',
  },
});


// function that fetch human Resources from API

// const fetchHumanResources = params => {
//   return fetch(API_BASE_URL,{
//     params
//   } ).then(res => res.json())
//   .then(data => {
//     return data;
//   })
//   .catch(error => {
//     console.log(error);
//   });
// }
//
// export const appServices = ({
//   fetchHumanResources
// })




/**
 * Fetch all vendor categories from API
 *
 */
 const fetchHumanResources = () =>
    axios.get(`/human_resources`).then(response => response.data);

export const appServices = ({
  fetchHumanResources
})