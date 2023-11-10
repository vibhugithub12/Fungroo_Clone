import React, { useState } from 'react';
import './Navbarr.css';

function Nav() {
  const [isMobile, setIsMobile] = useState(false);
  const [sign,setSign ] = useState("signup");
  const [arrow,setArrow ] = useState("👇");

  const toggleMobileNav = () => {
    setIsMobile(!isMobile);
    if(sign=="signup"){
    setSign("sign");
    }else{
      setSign("signup");
    }
    if(arrow=="👇"){
      setArrow("👆");
    }else{
      setArrow("👇")
    }
  };

  return (
    <nav className={`navbar ${isMobile ? 'mobile' : ''}`}>
      <div className="left-nav">
        <img src='https://uploads-ssl.webflow.com/638b48215fd2fd34538fa6bc/638c80735fd2fd0810a24fba_funngro-logo.svg'></img>
      </div>
      <div className="right-nav">
        <button className="mobile-menu-button" onClick={toggleMobileNav}>
          <h2>{arrow}</h2>
        </button>
        <div className={`menu ${isMobile ? 'open' : 'close'}`}>
          <a className="names" href="#"><h3>Teen</h3></a>
          <a className="names" href="#"><h3>Company</h3></a>
          <a className="names" href="#"><h3>Parent</h3></a>
          <button className="btnComp"><h3>Company Login</h3></button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
