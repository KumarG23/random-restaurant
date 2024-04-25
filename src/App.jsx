import { useState } from "react";
import Menu from "./api";
import { Item } from "./item";
import { OrbitSpace } from 'orbit-space';

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
      <h1 id="menuTop" style={{color: "white"}}>Menu</h1>
      {/* Render the Menu component and pass the renderMenuItems function */}
      <Menu renderMenuItems={renderMenuItems} />
      {/* Render the items using the Item component */}
      {Object.keys(items).map(category => (
        <div key={category}>
          <h2 id="category" className="pt-5 text-light">{category}</h2>
          {items[category].map(item => (
            <Item key={item.id} item={item} />
          ))}
          </div>
      ))}
    </div>
  );
}


export default App;
