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
  import './footer.css';
  
  
  const Footer = (props) => {
  
    return (
      <div className="footer">
        <div className="footer-item">
          <p className="text">Stay in touch</p>
          <input
           className="input"
           name="name"
           placeholder="ENTER EMAIL"
          />
          <p className="text" style={{'padding-bottom':'10px'}}>Subscribe</p>
         
        
          <p className="text">© 2023 ZEROZERO</p>
          </div>
          {/* <div className="subscribe">
          <p className="text">ZERO ZERO</p>
          <p className="text">© 2023 ZEROZERO</p>
          </div> */}
      </div>
    );
  };
  
  export default Footer;
  