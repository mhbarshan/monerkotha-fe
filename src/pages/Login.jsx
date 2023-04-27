//import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
export default function Login() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [err, setError] = useState(null);

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  //console.log(currentUser);
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <label>Username: </label>
        <input
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <label>Password: </label>
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>LogIn</button>
        {err && <p>{err}</p>}
        <span>
          Don't have any account? <Link to="/register">Register</Link> Here!
        </span>
      </form>
    </div>
  );
}
