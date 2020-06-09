// const url = process.env.REACT_APP_API_URL;
const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || 'https://reqres.in/api/unknown';


// function that fetch human Resources from API

const fetchHumanResources = params => {
  return fetch(API_BASE_URL,{
    params
  } ).then(res => res.json())
  .then(data => {
    return data;
  })
  .catch(error => {
    console.log(error);
  });
}

export const appServices = ({
  fetchHumanResources
})