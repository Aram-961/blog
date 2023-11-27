import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  // State for user input values
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    number: "",
    password: "",
  });

  // State for handling registration errors
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  // Async function to handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Sending a POST request to register the user
      await axios.post("http://localhost:8000/api/auth/register", inputs);

      navigate("/login");
    } catch (error) {
      // If an error occurs during registration, update the error state

      setError(error.response.data);
      console.log(error);
    }
  };

  // Log the current state of inputs (for debugging purposes)
  // console.log(inputs);

  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        {/* Input fields for username, email, number, and password */}
        {["username", "email", "number", "password"].map((fieldName) => (
          <input
            key={fieldName}
            required
            name={fieldName}
            type={
              fieldName === "email"
                ? "email"
                : fieldName === "password"
                ? "password"
                : "text"
            }
            placeholder={fieldName}
            onChange={handleInputChange}
          />
        ))}

        {/* Button to trigger the registration process */}
        <button onClick={handleFormSubmit}>Register</button>

        {/* Display error message if there is an error during registration */}
        {error && <p>{error}</p>}

        {/* Link to redirect to the login page if the user already has an account */}
        <span>
          Don't you have an account? <Link to='/login'>Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
