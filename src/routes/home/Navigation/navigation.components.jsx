import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import "./navigation.styles.scss";
import { UserContext } from "../../../components/context/user.context";
import "./navi.css";
import { signOutUser } from "../../../utils/firebase/firebase.utils";
import { CartContext } from "../../../components/context/cart.context";
import CartIcon from "../../../components/cart-icon/cart-icon.components";
import CartDown from "../../../components/cart-dropdown/cart-dropdown.components";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div style={{ marginBottom: "25px" }} className="navigation">
        <Link className="logo-container" to="/">
          <img
            style={{
              height: "220%",
              width: "120%",
              marginLeft: "20px",
              marginBottom: "70px",
            }}
            src="/images/Black.png"
            alt="My png"
          ></img>
        </Link>
        <div className="nav-links-container"></div>
        <Link
          style={{
            textDecoration: "none",
            color: "black",
            marginTop: "35px",
            marginLeft: "5px",
            paddingLeft: "31px",
            fontSize: "26px",
            width: "7%",
            alignItems: "center",

            marginBottom: "0px",
          }}
          className="nav-link focus-in-expand"
          to="/Shop"
        >
          SHOP
        </Link>
        {currentUser ? (
          <h5
            style={{
              textDecoration: "none",

              color: "red",
              marginTop: "35px",
              paddingLeft: "30px",
              fontSize: "27px",
              width: "7%",

              marginBottom: "0px",
              cursor: "pointer",
            }}
            className="nav-link focus-in-expand"
            onClick={signOutUser}
          >
            {" "}
            SIGN OUT{" "}
          </h5>
        ) : (
          <Link
            style={{
              textDecoration: "none",
              color: "black",
              marginTop: "35px",
              paddingLeft: "10px",
              fontSize: "28px",
              width: "7%",

              marginBottom: "1px",
            }}
            className="nav-link focus-in-expand"
            to="/signIn"
          >
            SIGN IN
          </Link>
        )}

        <Link
          style={{
            textDecoration: "none",
            color: "black",
            marginTop: "35px",
            marginLeft: "1px",
            paddingLeft: "20px",
            fontSize: "27px",
            width: "8%",
            position: "center",

            marginBottom: "0px",
          }}
          className="nav-link focus-in-expand"
          to="/Shop"
        >
          CONTACT
        </Link>
        {/* <Link
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
        </Link> */}
        <CartIcon></CartIcon>
      </div>
      {isCartOpen && <CartDown></CartDown>}
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Navigation;
