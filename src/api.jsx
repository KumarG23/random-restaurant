import { useEffect } from "react"; // Importing useEffect hook from React
import axios from "axios"; 

const URL = `https://raw.githubusercontent.com/bootcamp-students/random-restaurant-json/main/foodList.json`; // URL for fetching menu items

const Menu = ({ renderMenuItems }) => {
    useEffect(() => {
        axios.get(URL) // Making a get request to the specified URL
            .then(response => {
                // Limiting the number of fetched items to 15 and passing them directly to renderMenuItems
                renderMenuItems(response.data.slice(0, 15));
            })
            .catch(error => {
                console.error('Fetch Error', error); // Logging error if fetching fails
            });
    }, []); // Empty dependency array ensures the effect runs only once. preventing endless page rendering.

    // Menu component doesn't render anything directly, so returning an empty div
    return (
        <div></div>
    );
};

export default Menu;





