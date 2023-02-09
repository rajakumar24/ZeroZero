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
import { NavLink, useNavigate } from "react-router-dom";

const Product = (props) => {
  //const 

  return (
    <div className="product-page">
    {/* <div className="shop">
        <NavLink className="navlink"  to={window.location.pathname == '/home' ? "/product" : null}>
        <p className="text">SHOP</p>
        </NavLink>
        </div>
        <a href='/' className="navlist">back</a>
       <p>Product</p> */}
       <div className="product">
       <div className="product-nocontent"></div>
        <NavLink className="navlink"  to="/productdetails">
        <div className="product-container">
        
        <img
		                    src="./images/img4.png"
		                    className="product-img"
		                    alt=""
			            />
                        <p className="product-text">LOREM IPSUM DOLOR
SIT amet</p>
                        
                        </div></NavLink>
                        <NavLink className="navlink"  to="/productdetails">
                         <div className="product-container">
                        <img
		                    src="./images/img4.png"
		                    className="product-img"
		                    alt=""
			            />
                        <p className="product-text">LOREM IPSUM DOLOR
SIT amet</p>
                        </div></NavLink>
                        <NavLink className="navlink"  to="/productdetails">
                         <div className="product-container">
                        <img
		                    src="./images/img4.png"
		                    className="product-img"
		                    alt=""
			            />
                        <p className="product-text">LOREM IPSUM DOLOR
SIT amet</p>
                        </div></NavLink>
                         {/* <div className="product-container">
                         <img
		                    src="./images/img2.png"
		                    className="product-img"
		                    alt=""
			            />
                        <p className="text">LOREM IPSUM DOLOR
SIT amet</p>
                        </div> */}
        </div>
        <div className="product">
       <div className="product-nocontent"></div>
        <NavLink className="navlink"  to="/productdetails">
        <div className="product-container">
        
        <img
		                    src="./images/img4.png"
		                    className="product-img"
		                    alt=""
			            />
                        <p className="product-text">LOREM IPSUM DOLOR
SIT amet</p>
                        
                        </div></NavLink>
                        <NavLink className="navlink"  to="/productdetails">
                         <div className="product-container">
                        <img
		                    src="./images/img4.png"
		                    className="product-img"
		                    alt=""
			            />
                        <p className="product-text">LOREM IPSUM DOLOR
SIT amet</p>
                        </div></NavLink>
                        <NavLink className="navlink"  to="/productdetails">
                         <div className="product-container">
                        <img
		                    src="./images/img4.png"
		                    className="product-img"
		                    alt=""
			            />
                        <p className="product-text">LOREM IPSUM DOLOR
SIT amet</p>
                        </div></NavLink>
                         {/* <div className="product-container">
                         <img
		                    src="./images/img2.png"
		                    className="product-img"
		                    alt=""
			            />
                        <p className="text">LOREM IPSUM DOLOR
SIT amet</p>
                        </div> */}
        </div>
        <div className="product">
       <div className="product-nocontent"></div>
        <NavLink className="navlink"  to="/productdetails">
        <div className="product-container">
        
        <img
		                    src="./images/img4.png"
		                    className="product-img"
		                    alt=""
			            />
                        <p className="product-text">LOREM IPSUM DOLOR
SIT amet</p>
                        
                        </div></NavLink>
                        <NavLink className="navlink"  to="/productdetails">
                         <div className="product-container">
                        <img
		                    src="./images/img4.png"
		                    className="product-img"
		                    alt=""
			            />
                        <p className="product-text">LOREM IPSUM DOLOR
SIT amet</p>
                        </div></NavLink>
                        <NavLink className="navlink"  to="/productdetails">
                         <div className="product-container">
                        <img
		                    src="./images/img4.png"
		                    className="product-img"
		                    alt=""
			            />
                        <p className="product-text">LOREM IPSUM DOLOR
SIT amet</p>
                        </div></NavLink>
                         {/* <div className="product-container">
                         <img
		                    src="./images/img2.png"
		                    className="product-img"
		                    alt=""
			            />
                        <p className="text">LOREM IPSUM DOLOR
SIT amet</p>
                        </div> */}
        </div>
    </div>
  );
};

export default Product;
