import React, { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/authContext.jsx";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Getting current user
  const { login } = useContext(AuthContext);

  console.log(login);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      setError(err.response.data);
      console.log(err);
    }
  };

  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input
          required
          type='text'
          placeholder='username'
          name='username'
          onChange={handleChange}
        />
        <input
          required
          type='password'
          placeholder='password'
          name='password'
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>
          Don't you have an account? <Link to='/register'>Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
