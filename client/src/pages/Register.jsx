import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input required type='text' placeholder='username' />
        <input required type='email' placeholder='email' />
        <input require type="tel" placeholder="+961..."/>
        <input required type='text' placeholder='password' />
        <button>Register</button>
        <p>an error has occurred</p>
        <span>
          Don't you have an account ?<Link to='/login'> Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
