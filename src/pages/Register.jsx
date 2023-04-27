import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Register() {
  // const [inputs, setInputs] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  // });
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setError] = useState(null);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("./upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  // const handleChange = (e) => {
  //   setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const imageUrl = await upload();
    try {
      // await axios.post("/auth/register", inputs);
      await axios.post(`/auth/register`, {
        email,
        username,
        image: file ? imageUrl : "",
        password,
      });
      navigate("/login");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <label>Email: </label>
        <input
          required
          type="email"
          placeholder="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Username: </label>
        <input
          required
          type="text"
          placeholder="username"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password: </label>
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          style={{ display: "none" }}
          type="file"
          id="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label className="uploadImage" htmlFor="file">
          Upload Image
        </label>
        <h6>(**maximum size 100kb)</h6>
        {/* <label>Confirm Password: </label>
        <input required type="password" placeholder="Confirm password" /> */}
        <button onClick={handleSubmit}>Register</button>
        {err && <p>{err}</p>}
        <span>
          Do you have any account? <Link to="/login">Login</Link> Here!
        </span>
      </form>
    </div>
  );
}
