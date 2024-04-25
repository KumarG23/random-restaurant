import { useState } from "react";
import Menu from "./api";
import { Item } from "./item";
import { OrbitSpace } from 'orbit-space';
import star from './assets/star.png';

function App() {
  const [items, setItems] = useState([]);

  // Function to render menu items
  const renderMenuItems = (menuItems) => {
    const sortedItems = sortCategory(menuItems);
    setItems(sortedItems);
  };

  const sortCategory = (menuItems) => {
    const sortedItems = {};
    menuItems.forEach(item => {
      const { category } = item;
      if (!sortedItems[category]) {
        sortedItems[category] = [];
      }
      sortedItems[category].push(item);
    });
    return sortedItems;
  };

  return (
    <div className="pt-5" id="menuContainer" style={{ }}>
      <OrbitSpace />
      <div id="btns" className="d-flex col-sm-6">
        <ul id="btns" className="d-flex col-sm-12 col-lg-4 mx-auto ">
          <li><a href="#Breakfast"></a></li>
          <li><a href="#Appetizer"></a></li>
          <li><a href="#Lunch"></a></li>
          <li><a href="#Dinner"></a></li>
          <li><a href="#Drink"></a></li>
        </ul>
      </div>
      <h1 id="menuTop" style={{color: "white"}}>Menu</h1>
      {/* Render the Menu component and pass the renderMenuItems function */}
      <div id="btnsContainer" className="btn-group" role="group">
        <ul id="btns1" className="btn-group flex-wrap" role="group">
          <li><a href="#Breakfast" className="btn">Breakfast</a></li>
          <li><a href="#Appetizer" className="btn">Appetizer</a></li>
          <li><a href="#Lunch" className="btn">Lunch</a></li>
          <li><a href="#Dinner" className="btn">Dinner</a></li>
          <li><a href="#Drink" className="btn">Drinks</a></li>
        </ul>
      </div>
      <div className="ship-container">
        <img src={star} className="ship"></img>
      </div>
      <Menu renderMenuItems={renderMenuItems} />
      {/* Render the items using the Item component */}
      {Object.keys(items).map(category => (
        <div key={category}>
          <h2 id={category} className="pt-5 text-light" style={{textShadow: '0 0 10px white, 0 0 20px yellow, 0 0 30px white'}}>{category}</h2>
          {items[category].map(item => (
            <Item key={item.id} item={item} />
          ))}
          </div>
      ))}
    </div>
  );
}


export default App;

