import React, { useEffect } from 'react';
import axios from 'axios';

const URL = 'http://127.0.0.1:8000/';
const endpoints = [
  'category',
  'item',
  'customer',
  'order',
  'order-items'
];

const Menu = ({ renderMenuItems }) => {
  useEffect(() => {
    const getData = async () => {
      try {
        const responses = await Promise.all(endpoints.map(endpoint => axios.get(`${URL}${endpoint}/`)));
        const fetchedData = responses.reduce((acc, response, index) => {
          acc[endpoints[index]] = response.data;
          return acc;
        }, {});
        console.log('Fetched data: ', fetchedData);
        if (fetchedData.item && Array.isArray(fetchedData.item)) {
          renderMenuItems(fetchedData.item);  // Ensure 'item' is an array
        } else {
          console.error('Fetched item data is not an array:', fetchedData.item);
        }
      } catch (error) {
        console.error('Data error', error);
      }
    };
    getData();
  }, []);

  return <div></div>;
};

export default Menu;






