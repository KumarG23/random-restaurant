import React, { useContext, useState } from "react";
import { CartContext } from "./main";
import axios from "axios";
// import { resolveConfig } from 'vite';

export const Cart = () => {
  const { cart } = useContext(CartContext); //cart state from cart context
  const [name, setName] = useState("");
  const totalPrice = cart.reduce(
    (total, item) => total + parseFloat(item.price),
    0
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
    };


    try {
      const response = await axios.post("http://127.0.0.1:8000/overall/", data);
      console.log("Success:", response.data);
    } catch (error) {
      console.error("error;", error);
      console.log('request:', error.config);
      console.log('response;', error.response);
    }
  };
  

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
              <span>{item.title}</span>
              <span>{item.price}</span>
            </li>
          ))}
          <span>Total Price: {totalPrice.toFixed(2)}</span>
        </ul>
        <button onClick={handleSubmit}>
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Cart;
