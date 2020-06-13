// const url = process.env.REACT_APP_API_URL;
import Axios from 'axios';

const API_BASE_URL =
    process.env.REACT_APP_API_BASE_URL || 'http://127.0.0.1:8000';
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

 /**
  * get all items from API
  * */
 export const  getItems = () =>
     axios.get(`/items`).then(response => response.data);

 /**
  * get all agencies from API
  * */
 export const  getAgencies = () =>
     axios.get(`/agencies`).then(response => response.data);


 /**
  * get all locations from API
  * */
 export const  getLocations = () =>
     axios.get(`/locations`).then(response => response.data);


/**
 * create new human resource
 *
 * @function
 * @name createHumanResource
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export const createHumanResource = humanResource =>
    axios.post(`/human_resources`, humanResource).then(response => response.data);


 // TODO just export the API
export const appServices = ({
  fetchHumanResources
})
