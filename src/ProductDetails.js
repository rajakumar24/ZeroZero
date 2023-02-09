
import {
  Box,
  Select,
  FormControl,
  MenuItem,
  AppBar,
  Toolbar,
  Container,
} from "@mui/material";

import React, { useContext,useEffect } from "react";

const ProductDetails = (props) => {

  return (
    <div className="productdetails">
       {/* <a href='/product' className="navlist">back</a> */}
        <img
		                    src="./images/img4.png"
		                    className="productdetails-img"
		                    alt=""
			            />
                  <div className="productdetails-text">
                 <p className="product-text lg">LOREM IPSUM</p>
      <p className="product-text sm">LOREM IPSUM DOLOR SIT AMET</p>
      <p className="product-text sm">Etiam posuere quam ac quam. Maecenas aliquet accumsan leo. Nullam dapibus fermentum ipsum. Etiam quis quam. Integer lacinia. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Integer vulputate sem a nibh rutrum consequat. Maecenas lorem. Pellentesque pretium lectus id turpis. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Fusce wisi. Phasellus faucibus molestie nisl. Fusce eget urna. Curabitur vitae diam non enim </p>
      <div className="row">
      <div className="bag-count">
        <p style={{marginTop: "1px"}}>-</p><p style={{marginTop: "1px"}}>1</p><p style={{marginTop: "1px"}}>+</p>
      </div>
      <button className="bag-button">ADD TO BAG</button >
      </div>
      </div>
    </div>
  );
};

export default ProductDetails;
