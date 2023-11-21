import React from "react";
import Logo from "../images/1.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <img src={Logo} alt='logo.svg' />
        </div>
        <div className='links'>
          <Link className='link' to='/?cat=art'>
            <h6>ART</h6>
          </Link>
          <Link className='link' to='/?cat=news'>
            <h6>News</h6>
          </Link>
          <Link className='link' to='/?cat=politics'>
            <h6>Politics</h6>
          </Link>
          <Link className='link' to='/?cat=tech'>
            <h6>Tech</h6>
          </Link>
          <Link className='link' to='/?cat=science'>
            <h6>Science</h6>
          </Link>
          <span>Aram</span>
          <span>Logout</span>
          <span className='write'>
            <Link className='link' to='/write'>
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
