import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Meal from "../Meals/Meal";
import "./Product.css";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then((res) => res.json())
      .then((data) => setProducts(data.meals));
  }, []);

  const [cart, setCart] = useState([]);
  const HandleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    // console.log(newCart);
  };
  return (
    <div className="d-flex mt-5">
      <div className="col-md-9 meals-container ps-5">
        {products.map((product) => (
          <Meal key={product.idMeal} product={product} handleAddToCart={HandleAddToCart}></Meal>
        ))}
      </div>
      <div className="col-md-3 cart-container  border-start">
        <h4 className="text-center">Review your order Products</h4>
        {cart.map((name) => (
          <Cart name={name}></Cart>
        ))}
      </div>
    </div>
  );
};

export default Product;
// strMeal strInstructions strMealThumb
