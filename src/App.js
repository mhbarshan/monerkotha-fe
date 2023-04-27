import { RouterProvider, createBrowserRouter } from "react-router-dom";
//import Footer from "./components/Footer";
//import Navbar from "./components/Navbar";
import Layout from "./Layout";
import PrivateRoute from "./components/PrivateRoute";
import EmailVerification from "./pages/EmailVerification";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Single from "./pages/Single";
import Write from "./pages/Write";
import "./style.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: (
          <PrivateRoute>
            {" "}
            <Single />
          </PrivateRoute>
        ),
      },
      {
        path: "/write",
        element: (
          <PrivateRoute>
            {" "}
            <Write />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/verify",
        element: <EmailVerification />,
      },
    ],
  },
  // {
  //   path: "/register",
  //   element: <Register />,
  // },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
]);
function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
