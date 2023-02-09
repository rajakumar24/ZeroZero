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
  import './header.css';
  
  
  const Header = (props) => {
  
    return (
      <div className="headers">
      <div className={window.location.pathname == '/' ? "opening" : "other"}>
          {/* <div className="nav">
          <p>ZEROZERO</p> */}
          {/* <div className="nav-list">
          <a href='/product' className="nav-item">Product</a>
          <a href='/productdetails' className="nav-item">Contact</a>
          <a href='/' className="nav-item">Cart</a>
          </div> */}
          {/* </div> */}
          {/* <div className="bottom-border"></div> */}
          {/* <a href='/home' className="content"> */}
          <div className="content">
          <NavLink className="navlink"  to={window.location.pathname == '/' ? "/home" : null}>
          {/* <div className="nav-list"> */}
          <p className="text">ZERO ZERO</p>
          {/* <div className="nav-list">
          <p className="text">CART</p>
          <input
           className="input"
           name="name"
           placeholder="SEARCH"
          /> 
          </div> */}
          {/* </div> */}
          <p className="text">53 scott avenue brooklyn 11237</p>
          <p className="text">united states of america</p>
          <p className="text">established 2023</p>
          </NavLink>
          </div>
          { (window.location.pathname == '/' || window.location.pathname == '/home') ?
          <></> :
          <div className="cartSearch">
           <div className="nav-list">
          <p className="text">CART</p>
          <input
           className="input"
           name="name"
           placeholder="SEARCH"
           style={{marginTop:"-8px"}}
          /> 
          </div>
          </div> 
         }
         
      </div>
      { (window.location.pathname == '/' ) ?
          <></> :
        <div className="shop">
        <NavLink className="navlink"  to={window.location.pathname == '/home' ? "/product" : null}>
        <p className="text">SHOP</p>
        </NavLink>
        </div>
        }
      </div>
    );
  };
  
  export default Header;
  