import { useState, useEffect } from "react";
import axios from "axios";

const URL = `https://raw.githubusercontent.com/bootcamp-students/random-restaurant-json/main/foodList.json`;

const Menu = ({ renderMenuItems }) => {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
      axios.get(URL)
        .then(response => {
          const limitedItems = response.data.slice(0, 15);
          setMenuItems(limitedItems);
          renderMenuItems(limitedItems); // Pass the fetched items to the renderMenuItems function
        })
        .catch(error => {
          console.error('Fetch Error', error);
        });
    }, []);

    // You can optionally return JSX to render something while the data is being fetched
    return (
      <div></div>
    );
};

export default Menu;




