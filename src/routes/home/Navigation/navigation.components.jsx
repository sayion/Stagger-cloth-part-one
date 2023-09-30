import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import "./navigation.styles.scss";
import { UserContext } from "../../../components/context/user.context";
import "./navi.css";
import { signOutUser } from "../../../utils/firebase/firebase.utils";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img
            style={{
              height: "220%",
              width: "110%",
              marginLeft: "20px",
              marginBottom: "50px",
            }}
            src="/images/nin.png"
            alt="My png"
          ></img>
        </Link>
        <div className="nav-links-container"></div>
        <Link
          style={{
            textDecoration: "none",
            color: "black",
            marginTop: "45px",
            fontSize: "20px",
            borderBottom: "1.2px solid black",
            marginBottom: "1px",
          }}
          className="nav-link"
          to="/Shop"
        >
          SHOP
        </Link>
        {currentUser ? (
          <span className="nav-link" onClick={signOutUser}>
            {" "}
            SIGN OUT{" "}
          </span>
        ) : (
          <Link
            style={{
              textDecoration: "none",
              color: "black",
              marginTop: "45px",
              fontSize: "20px",
              borderBottom: "1.2px solid black",
              marginBottom: "1px",
            }}
            className="nav-link"
            to="/signIn"
          >
            SIGN IN
          </Link>
        )}

        <Link
          style={{
            textDecoration: "none",
            color: "black",
            marginTop: "45px",
            fontSize: "20px",
            borderBottom: "1.2px solid black",
            marginBottom: "2px",
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
            marginTop: "25px",
            fontSize: "18px",
          }}
          className="nav-link"
          to="/Shop"
        >
          <img
            style={{
              height: "90%",
              width: "85%",
              marginBottom: "20px",
              marginRight: "3px",
            }}
            src="./images/shopping-cart.png"
            alt="shopping cart"
          ></img>
        </Link>
        <span> </span>
      </div>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Navigation;
