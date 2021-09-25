import React from "react";
import "./Cart.css";

const Cart = (props) => {
  return (
    <div className="ms-2">
      <ul>
        <li className="fs-4">{props.name.strMeal}</li>
      </ul>
    </div>
  );
};

export default Cart;
