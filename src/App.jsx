import { useState, useEffect } from "react"; // Importing the useState hook from React
import Menu from "./api"; // Importing the Menu component from the API file
import { Item } from "./item"; // Importing the Item component
import { OrbitSpace } from 'orbit-space'; // Importing the OrbitSpace component
import star from './assets/star.png'; // Importing an image asset

function App() {
  // State to hold the menu items
  const [items, setItems] = useState([]);

  // Function to render menu items
  const renderMenuItems = (menuItems) => {
    // Sorting menu items by category
    const sortedItems = sortCategory(menuItems);
    // Updating state with sorted menu items
    setItems(sortedItems);
  };

  // Function to sort menu items by category
  const sortCategory = (menuItems) => {
    const sortedItems = {};
    // Iterating over menu items to categorize them
    menuItems.forEach(item => {
      const { category_name } = item;
      // if category doesn't already exist create new category array to store items for that category
      if (!sortedItems[category_name]) {
        sortedItems[category_name] = [];
      }
      // Adding item to its respective category
      sortedItems[category_name].push(item);
    });
    return sortedItems; // Returning sorted items
  };

  return (
    <div className="pt-5 pb-2" id="menuContainer">
      <OrbitSpace /> {/* OrbitSpace component */}
      {/* Navigation buttons */}
      
      {/* Heading */}
      <h1 id="menuTop" style={{color: "white"}}>Menu</h1>
      {/* Buttons by category */}
      <div id="btnsContainer" className="btn-group" role="group">
        <ul id="btns1" className="btn-group flex-wrap" role="group">
          {/* Creating buttons to go to category */}
          <li><a href="#Alien Appetizers" className="btn">Alien Appetizers</a></li>
          <li><a href="#Martian Cuisine" className="btn">Martian Cuisine</a></li>
          <li><a href="#Space Delicacies" className="btn">Space Delicacies</a></li>
          <li><a href="#Earthly Eatables" className="btn">Earthly Eatables</a></li>
          <li><a href="#Cosmic Concoctions" className="btn">Cosmic Concoctions</a></li>
        </ul>
      </div>
      {/* Image */}
      <div className="ship-container">
        <img src={star} className="ship" alt="Star" /> 
      </div>
      {/* Rendering the Menu component and passing the renderMenuItems function */}
      <Menu renderMenuItems={renderMenuItems} />
      {/* Rendering items by category using the Item component */}
      {Object.keys(items).map(category_name => (
        <div key={category_name}>
          {/* changed id so that buttons would go to rendered category */}
          <h2 id={category_name} className="pt-5 text-light" style={{textShadow: '0 0 10px white, 0 0 20px yellow, 0 0 30px white'}}>{category_name}</h2>
          {/* Rendering items */}
          {items[category_name].map(item => (
            <Item key={item.id} item={item} /> // Passing each item to the Item component
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
