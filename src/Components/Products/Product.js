import React from "react";
import "./ProductComp.css";
import phone from "../../Assests/Rectangle2.png";
import star from "../../Assests/Star1.png";
function Product() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch(
      "https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
    )
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <div className="products-comp">
      <h3>Products</h3>
      {data && (
        <div className="product-card" key={id}>
          <img src={productImage} alt="phone" className="product-image" />
          <p className="product-name">{productname}</p>
          <div className="stars-prices">
            <div className="star-comp">
              <img src={star} alt="" className="star" />
              <img src={star} alt="" className="star" />
              <img src={star} alt="" className="star" />
              <img src={star} alt="" className="star" />
              <img src={star} alt="" className="star" />
            </div>
            <div>
              <span className="actual-price">
                <strike>{oldPrice}</strike>
              </span>
              <span className="discount-price">{newPrice}/-</span>
            </div>
          </div>
          <button type="button" className="add-button">
            ADD TO CART
          </button>
        </div>
      )}
    </div>
  );
}

export default Product;
