import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import logo from "../images/Asset 1.png";

export default function NavBar() {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="links">
          <Link to="/?cat=art" className="link">
            <h6>ART</h6>
          </Link>
          <Link to="/?cat=science" className="link">
            <h6>SCIENCE</h6>
          </Link>
          <Link to="/?cat=technology" className="link">
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link to="/?cat=movie" className="link">
            <h6>MOVIE</h6>
          </Link>
          <Link to="/?cat=lifestyle" className="link">
            <h6>LIFESTYLE</h6>
          </Link>
          <Link to="/?cat=food" className="link">
            <h6>FOOD</h6>
          </Link>
          <span className="write">
            <Link to="/write" className="link">
              Write
            </Link>
          </span>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <span>
              <Link className="link" to="/login">
                Login
              </Link>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
