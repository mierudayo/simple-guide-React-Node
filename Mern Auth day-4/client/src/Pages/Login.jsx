import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/login", {
        email: data.email,
        password: data.password,
      });

      // Handle the response from the server
      if (response.data.error) {
        // Display an error message
        console.error("Login failed:", response.data.error.message);
      } else {
        // Login successful, you might want to store user information in state or context
        console.log("Login successful");
        // Redirect or perform additional actions as needed
      }
    } catch (error) {
      // Handle network or other errors
      console.error("An error occurred during login:", error);
    }
  };

  return (
    <div>
      <form onSubmit={loginUser}>
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter email...."
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password...."
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
