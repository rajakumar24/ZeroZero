import React from "react";
import Header from './Common/Header/Header';
// import Footer from './Common/Footer/Footer';
// import HomePage from './HomePage';
// import Product from './Product';
// import ProductDetails from './ProductDetails';
  
  
  const GlobalPage = (props) => {
  
    return (
        <>
        <Header/>
        {
            window.location.pathname === '/' ? null :
            <>
            {/* {
                window.location.pathname === '/home' ? <HomePage/>
                : window.location.pathname === '/product' ? <Product/>
                : window.location.pathname.includes('/productdetails') ? <ProductDetails/> : <div></div>
            } */}
            
            {/* <Footer/> */}
            </>
        }
      </>
    );
  };
  
  export default GlobalPage;
  