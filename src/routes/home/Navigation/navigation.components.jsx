import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import "./navigation.styles.scss";
const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img
            style={{
              height: "190%",
              width: "120%",
              marginLeft: "20px",
              marginBottom: "20px",
            }}
            src="/images/three.png"
            alt="My png"
          ></img>
        </Link>
        <div className="nav-links-container"></div>
        <Link
          style={{
            textDecoration: "none",
            color: "black",
            marginTop: "30px",
            fontSize: "20px",
            borderBottom: "1.2px solid black",
            marginBottom: "18px",
          }}
          className="nav-link"
          to="/Shop"
        >
          SHOP
        </Link>
        <Link
          style={{
            textDecoration: "none",
            color: "black",
            marginTop: "30px",
            fontSize: "20px",
            borderBottom: "1.2px solid black",
            marginBottom: "18px",
          }}
          className="nav-link"
          to="/signIn"
        >
          SIGN IN
        </Link>
        <Link
          style={{
            textDecoration: "none",
            color: "black",
            marginTop: "30px",
            fontSize: "20px",
            borderBottom: "1.2px solid black",
            marginBottom: "18px",
          }}
          className="nav-link"
          to="/Shop"
        >
          CONTACT
        </Link>
        <Link
          style={{
            textDecoration: "none",
            color: "black",
            marginTop: "20px",
            fontSize: "18px",
          }}
          className="nav-link"
          to="/Shop"
        >
          <img
            style={{ height: "90%", width: "85%", marginBottom: "20px" }}
            src="./images/shopping-cart.png"
            alt="shopping cart"
          ></img>
        </Link>
      </div>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Navigation;
