import React, { useContext } from "react";
import Logo from "../images/1.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
// import { logout } from "../../../api/controller/auth";

const Navbar = () => {
  const { logout, currentUser } = useContext(AuthContext);
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
          {/* Show username who has logged in */}
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className='link' to='/login'>
              Login
            </Link>
          )}
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
