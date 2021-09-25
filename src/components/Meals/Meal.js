import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Meal.css";

const Meal = (props) => {
  // console.log(props.product);
  const { strMeal, strInstructions, strMealThumb, strYoutube } = props.product;
  const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;
  return (
    <div className="card mb-5 border-0">
      <div className="row g-0 border-bottom">
        <div className="col-md-3">
          <img src={strMealThumb} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <h3 className="card-title">{strMeal}</h3>
            <p className="card-text text-justify">
              {strInstructions.slice(0, 400)}...{" "}
              <a className="text-decoration-none text-primary fs-5" href={strYoutube}>
                Learn more
              </a>
            </p>
            <button onClick={() => props.handleAddToCart(props.product)} className="btn btn-warning px-5 fs-5">
              {cartIcon} Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meal;
