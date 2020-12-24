import React from "react";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import data from "../data";

export default function ProductScreen(props) {
  const product = data.products.find((x) => x._id === props.match.params.id);
  if (!product._id) {
    return <div> Product Not Found</div>;
  }
  return (
    <div>
      <Link to="/" className="link">Back to Main Screen</Link>
      <div className="row top">
        <div className="col-2">
          <img className="large" src={product.image} alt={product.name}></img>
        </div>
        <div className="col-1">
          <ul>
            <li>{product.name}</li>
            <li>
              <Rating>
                rating={product.rating}
                numReviews={product.numReviews}
              </Rating>
            </li>
            <li>Price:{product.price}</li>
            <li>
              Description:<p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
                <li>
                    <div className="row">
                        <div>Price :</div>
                        <div className="price"><i className="fas fa-rupee-sign">{product.price}</i></div>
                    </div>
                </li>
                <li>
                    <div className="row">
                        <div>Status</div>
                        <div>{product.stockCount > 0 ? <span className="success">In Stock</span> : <span className="error">Out of Stock</span>}</div>
                    </div>
                </li>
                <li>
                    <button className="primary block">Add to Cart</button>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
