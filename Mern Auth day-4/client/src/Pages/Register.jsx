import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  // Initialize state with empty strings
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Event handler for form submission
  const registerUser = async (e) => {
    e.preventDefault();

    const { name, email, password } = data;

    try {
      // Send a POST request to the server to register the user
      const response = await axios.post("/register", {
        name,
        email,
        password,
      });

      // Check for errors in the response
      if (response.data.error) {
        toast.error(response.data.error.message);
      } else {
        // Clear the form on successful registration
        setData({
          name: "",
          email: "",
          password: "",
        });

        toast.success("Registration successful. Welcome!");
        navigate("/login");
      }
    } catch (error) {
      console.error("An error occurred during registration:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <form onSubmit={registerUser}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter name..."
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter email..."
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password..."
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
