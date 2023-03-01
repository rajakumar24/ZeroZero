import React from "react";
import { NavLink } from "react-router-dom";
import ProductDetails from '../../ProductDetails';
import Footer from '../Footer/Footer';
import './header.css';

const Header = (props) => {
  
    return (
      <div className="headers">
      <div className={window.location.pathname === '/' ? "opening" : "other"}>
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
          <NavLink className="navlink"  to={window.location.pathname === '/' ? "/home" : null}>
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
          { (window.location.pathname === '/' || window.location.pathname === '/home') ?
          <></> :
          <div className="cartSearch">
           <div className="nav-list">
          <p className="text">CART</p>
          <input
           className="input search"
           name="name"
           placeholder="SEARCH"
           style={{marginTop:"-6px"}}
          /> 
          </div>
          </div> 
         }
         
      </div>
      { (window.location.pathname === '/' ) ?
          <></> :
        <div className="shop">
          <div className="shop-column">
        <NavLink className="navlink"  to={window.location.pathname === '/home' ? "/product" : null}>
        <p className="text">SHOP</p>
        </NavLink>
        <div className="footer header-footer-hide">
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
          </div>
          {/* <div className="subscribe">
          <p className="text">ZERO ZERO</p>
          <p className="text">© 2023 ZEROZERO</p>
          </div> */}
      </div>
      {/* products list */}
       {/* <div> */}
       { window.location.pathname === "/product" ?
        <div className="product-page">
    {/* <div className="shop">
        <NavLink className="navlink"  to={window.location.pathname == '/home' ? "/product" : null}>
        <p className="text">SHOP</p>
        </NavLink>
        </div>
        <a href='/' className="navlist">back</a>
       <p>Product</p> */}
       <div className="product first-row">
       {/* <div className="product-nocontent"></div> */}
        <NavLink className="product-navlink"  to="/productdetails">
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
      : window.location.pathname.includes('/productdetails') ? <ProductDetails/> 
      : <div className="empty"></div>
      }
      {/* <Footer /> */}
       {/* products list */}
      
      {/* mobile product start */}
      { window.location.pathname === "/product" ?
        <div className="mobile-product-page">
      <div className="mobile-product first-row">
        <NavLink className="product-navlink"  to="/productdetails">
        <div className="product-container">
            <img
		          src="./images/img4.png"
		          className="product-img"
		          alt=""
			      />
            <p className="product-text">LOREM IPSUM DOLOR SIT amet</p>
        </div>
        </NavLink>
        <NavLink className="product-navlink"  to="/productdetails">
        <div className="product-container">
            <img
		          src="./images/img4.png"
		          className="product-img"
		          alt=""
			      />
            <p className="product-text">LOREM IPSUM DOLOR SIT amet</p>
        </div>
        </NavLink>
      </div>

      <div className="mobile-product first-row">
        <NavLink className="product-navlink"  to="/productdetails">
        <div className="product-container">
            <img
		          src="./images/img4.png"
		          className="product-img"
		          alt=""
			      />
            <p className="product-text">LOREM IPSUM DOLOR SIT amet</p>
        </div>
        </NavLink>
        <NavLink className="product-navlink"  to="/productdetails">
        <div className="product-container">
            <img
		          src="./images/img4.png"
		          className="product-img"
		          alt=""
			      />
            <p className="product-text">LOREM IPSUM DOLOR SIT amet</p>
        </div>
        </NavLink>
      </div>

      <div className="mobile-product first-row">
        <NavLink className="product-navlink"  to="/productdetails">
        <div className="product-container">
            <img
		          src="./images/img4.png"
		          className="product-img"
		          alt=""
			      />
            <p className="product-text">LOREM IPSUM DOLOR SIT amet</p>
        </div>
        </NavLink>
        <NavLink className="product-navlink"  to="/productdetails">
        <div className="product-container">
            <img
		          src="./images/img4.png"
		          className="product-img"
		          alt=""
			      />
            <p className="product-text">LOREM IPSUM DOLOR SIT amet</p>
        </div>
        </NavLink>
      </div>
        </div>
      : <></>
      }
      <Footer />
       {/* products list */}
      {/* mobile product end */}
        </div>
        }
      </div>
    );
  };
  
  export default Header;
  