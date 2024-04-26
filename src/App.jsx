import { useState } from "react"; // Importing the useState hook from React
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
      const { category } = item;
      // if category doesn't already exist create new category array to store items for that category
      if (!sortedItems[category]) {
        sortedItems[category] = [];
      }
      // Adding item to its respective category
      sortedItems[category].push(item);
    });
    return sortedItems; // Returning sorted items
  };

  return (
    <div className="pt-5" id="menuContainer">
      <OrbitSpace /> {/* OrbitSpace component */}
      {/* Navigation buttons */}
      
      {/* Heading */}
      <h1 id="menuTop" style={{color: "white"}}>Menu</h1>
      {/* Buttons by category */}
      <div id="btnsContainer" className="btn-group" role="group">
        <ul id="btns1" className="btn-group flex-wrap" role="group">
          {/* Creating buttons to go to category */}
          <li><a href="#Breakfast" className="btn">Breakfast</a></li>
          <li><a href="#Appetizer" className="btn">Appetizer</a></li>
          <li><a href="#Lunch" className="btn">Lunch</a></li>
          <li><a href="#Dinner" className="btn">Dinner</a></li>
          <li><a href="#Drink" className="btn">Drinks</a></li>
        </ul>
      </div>
      {/* Image */}
      <div className="ship-container">
        <img src={star} className="ship" alt="Star" /> 
      </div>
      {/* Rendering the Menu component and passing the renderMenuItems function */}
      <Menu renderMenuItems={renderMenuItems} />
      {/* Rendering items by category using the Item component */}
      {Object.keys(items).map(category => (
        <div key={category}>
          {/* changed id so that buttons would go to rendered category */}
          <h2 id={category} className="pt-5 text-light" style={{textShadow: '0 0 10px white, 0 0 20px yellow, 0 0 30px white'}}>{category}</h2>
          {/* Rendering items */}
          {items[category].map(item => (
            <Item key={item.id} item={item} /> // Passing each item to the Item component
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
