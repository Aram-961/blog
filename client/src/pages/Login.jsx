import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  // State for user input values
  const [inputs, setInputs] = useState({
    username: "",
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
      const response = await axios.post(
        "http://localhost:8000/api/auth/login",
        inputs
      );
      navigate("/");
    } catch (err) {
      // If an error occurs during registration, update the error state
      setError(err.response.data);
    }
  };

  // Log the current state of inputs (for debugging purposes)
  console.log(inputs);

  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        {/* Input fields for username, email, number, and password */}
        {["username", "password"].map((fieldName) => (
          <input
            key={fieldName}
            required
            name={fieldName}
            type={
              fieldName === "username"
                ? "username"
                : fieldName === "password"
                ? ""
                : ""
            }
            placeholder={fieldName}
            onChange={handleInputChange}
          />
        ))}

        {/* Button to trigger the registration process */}
        <button onClick={handleFormSubmit}>login</button>

        {/* Display error message if there is an error during registration */}
        {error && <p>{error}</p>}

        {/* Link to redirect to the login page if the user already has an account */}
        <span>
          Don't you have an account? <Link to='/register'>register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
