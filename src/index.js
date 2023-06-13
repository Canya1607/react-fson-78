import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

export const Product = (props) => {
  // console.log("imageUrl", imageUrl);
  // console.log("productPrice", props.productPrice);
  console.log("props", props);

  return (
    <div>
      <img src={props.imageUrl} alt="Tacos With Lime" width="640" />
      {props.showTitle ? <h2>Tacos With Lime</h2> : <h2>Hidden title</h2>}
      <p>Price: {props.productPrice > 0 ? props.productPrice : "No Price"}$</p>
      <button type="button">Add to cart</button>
      {props.children}
    </div>
  );
};

Product.propTypes = {
  showTitle: PropTypes.bool.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(product);
// root.render(<App />);

// React.createElement("div", {style: {backgroundColor: 'red'}}, null);
