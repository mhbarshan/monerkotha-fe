import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import logo from "../images/Asset 1.png";

export default function NavigationBar() {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <>
      <Navbar
        collapseOnSelect
        className="myBG"
        bg="myBG"
        variant="dark"
        sticky="top"
        expand="lg"
      >
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="right-aligned">
          <Nav class="navbar-nav">
            <Nav.Link>
              <Link to="/?cat=art" className="link">
                <h6>ART</h6>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/?cat=science" className="link">
                <h6>SCIENCE</h6>
              </Link>{" "}
            </Nav.Link>
            <Nav.Link>
              <Link to="/?cat=technology" className="link">
                <h6>TECHNOLOGY</h6>
              </Link>{" "}
            </Nav.Link>
            <Nav.Link>
              <Link to="/?cat=movie" className="link">
                <h6>MOVIE</h6>
              </Link>{" "}
            </Nav.Link>
            <Nav.Link>
              <Link to="/?cat=lifestyle" className="link">
                <h6>LIFESTYLE</h6>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/?cat=food" className="link">
                <h6>FOOD</h6>
              </Link>{" "}
            </Nav.Link>
            <Nav.Link>
              <span className="write">
                <Link to="/write" className="link">
                  <h6>WRITE</h6>
                </Link>
              </span>
            </Nav.Link>

            <Nav.Link>
              <span>
                <h6>{currentUser?.username.toUpperCase()}</h6>
              </span>{" "}
            </Nav.Link>
            <Nav.Link>
              {currentUser ? (
                <span onClick={logout}>
                  <h6>LOGOUT</h6>
                </span>
              ) : (
                <span>
                  <Link className="link" to="/login">
                    <h6>LOGIN</h6>
                  </Link>
                </span>
              )}{" "}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
