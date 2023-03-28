import React from "react";

const ProductDetails = ({count, handleDecrease, handleIncrese, handleCart}) => {

  return (
    <div className="productdetails">
        <img
		                    src="./images/img4.png"
		                    className="productdetails-img"
		                    alt=""
			            />
                  <div className="productdetails-text">
                 <p className="productdet-text lg">LOREM IPSUM</p>
      <p className="productdet-text sm">LOREM IPSUM DOLOR SIT AMET</p>
      <p className="productdet-text sm">Etiam posuere quam ac quam. Maecenas aliquet accumsan leo. Nullam dapibus fermentum ipsum. Etiam quis quam. Integer lacinia. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Integer vulputate sem a nibh rutrum consequat. Maecenas lorem. Pellentesque pretium lectus id turpis. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Fusce wisi. Phasellus faucibus molestie nisl. Fusce eget urna. Curabitur vitae diam non enim </p>
      <div className="row">
      <div className="bag-count">
        <p style={{marginTop: "1px", fontSize: "25px", cursor: "pointer"}} onClick={() => handleDecrease()}>-</p><p style={{marginTop: "1px", fontSize: "14px"}}>{count}</p><p style={{marginTop: "1px", fontSize: "16px", cursor: "pointer"}} onClick={() => handleIncrese()}>+</p>
      </div>
      <button type="button" className="bag-button" style={{cursor: "pointer"}} onClick={() => handleCart()}>ADD TO CART</button >
      </div>
      </div>
    </div>
  );
};

export default ProductDetails;
