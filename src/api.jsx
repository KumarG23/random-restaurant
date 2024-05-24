import React, { useEffect } from 'react';
import axios from 'axios';

const URL = 'http://127.0.0.1:8000/'; // base url
const endpoints = [
  'category',
  'item',
  'customer',
  'order',
  'order-items',
  'overall'
]; // endpoints on the backend

const Menu = ({ renderMenuItems }) => {
  useEffect(() => {
    const getData = async () => { // within use effect async function get data
      try {
        const responses = await Promise.all(endpoints.map (endpoint => axios.get(`${URL}${endpoint}/`)));// for each endpoint in the array axios sends a get request to the url by adding the endpoint to the base url. ex - http://127.0.0.1:8000/category/
        const fetchedData = responses.reduce((acc, response, index) => { // reduces response to single object
          acc[endpoints[index]] = response.data;
          return acc;// adds each response to the fetched data object using the endpoints as the key
        }, {});
        console.log('Fetched data: ', fetchedData);
        if (fetchedData.item && Array.isArray(fetchedData.item)) { // checks if the fetched data is there and its an array of objects
          renderMenuItems(fetchedData.item);  // if true render menu items
        } else {
          console.error('Fetched item data is not an array:', fetchedData.item);
        }
      } catch (error) {
        console.error('Data error', error);
      }
    };
    getData();
  }, []); // run only once

  return <div></div>;
};

export default Menu;






