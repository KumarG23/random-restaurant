import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "./main";
import axios from "axios";


export const Cart = () => {
  const { cart, setCart, updatedCart, add } = useContext(CartContext); //cart state from cart context
  const [name, setName] = useState("");
  const [orders, setOrders] = useState([]);
  
//   useEffect(() => {
//     let storedData = localStorage.getItem('cart');
//   if (storedData) {
//     JSON.parse(storedData);
//   }
// }, [cart]);



  
  const totalPrice = cart.reduce(
    (total, item) => total + parseFloat(item.price),
    0 // to get total price, floating point rather than integer allows for broader range of numbers rather than just whole numbers. also converts from string to number.
  );
  console.log("Cart state: ", cart);

  const nameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const titles = cart.map(item => item.title)
    console.log(titles)
    console.log(totalPrice)

    const data = {
      customer: name,
      title: titles.toString(),
      price: totalPrice.toFixed(2),
    }; // what to send to backend

    localStorage.setItem('cart', JSON.stringify(data));

    try {
      const response = await axios.post("http://127.0.0.1:8000/overall/", data); // where to send and what to send
      console.log("Success:", response.data);
      // enter the response.data into local state for display
      // OR
      // if you've got an array you need to:
        // simple option - fetch the order list again
        // harder (but better) - update your local array of these to include the response.data new array
    } catch (error) {
      console.error("error;", error);
      console.log('request:', error.config);
      console.log('response;', error.response);
    }
  };

  useEffect(() => {
    const orderData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/overall/');
        setOrders(response.data)
      } catch (error) {
        console.error('error: ', error);
      }
    }
    orderData();
  } ,[]);
  

  return (
    <div className="mt-5">
      <h2>Cart</h2>
      <form>
        <label>
          Name on the order: <br></br>
          <input
            type="text"
            id="name"
            value={name}
            onChange={nameChange}
            required
          ></input>
        </label>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <span>{item.title} </span>
              <span>{item.price}</span>
            </li>
          ))}
          <span>Total Price: {totalPrice.toFixed(2)}</span>
        </ul>
        <button onClick={handleSubmit}>
          Place Order
        </button>
      </form>
      <h2>Orders Placed</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            <span>Customer: {order.customer} </span><br></br>
            <span>Item: {order.title} </span><br></br>
            <span>Price: {order.price} </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
