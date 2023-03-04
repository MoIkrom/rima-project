import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "../navbar/Navbar.module.css";
import { Link } from "react-router-dom";
import NavbarRegister from "./component/NavbarRegister";
import NavbarLogin from "./component/NavbarProfile";
// import { useState } from "react";

import wishlist from "../navbar/wishlist.png";
import search from "../navbar/search.png";
import cart from "../navbar/cart.png";

function BasicExample() {
  // const [navbar, setnavbar] = useState(NavbarLogin);
  // navType = () => {
  //   if (this.state.userInfo.token) {
  //     if (this.state.userInfo.role === "user") {
  //       return this.state.navLogin;
  //     } else {
  //       return this.state.navAdmin;
  //     }
  //   } else {
  //     return this.state.navnotLogin;
  //   }
  // };

  const isLogin = JSON.parse(localStorage["userInfo"] || "{}");

  return (
    <Navbar expand="lg ">
      <Container>
        <Navbar.Brand className={`${styles["company"]}`}>
          <Link to={"/"} className={` ${styles["rima"]} text-decoration-none `}>
            RIMA
          </Link>
          <div className="dropdown"></div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`mx-auto gap-5 ${styles["navbar"]}`}>
            <Nav.Link className={styles["title"]}>
              <Link className={`${styles["color-text"]} ${styles["no-underline"]}`} to={"/"}>
                HOME
              </Link>
            </Nav.Link>
            <div className={`${styles["pages-shop"]} d-flex justify-content-center align-items-center`}>
              <p className={`${styles["title"]} ${styles["cursor"]}`}>PAGES</p>
              <NavDropdown className={styles["title"]} id="basic-nav-dropdown">
                <Link className={styles["no-underline"]} to={"/about"}>
                  <NavDropdown.Item href="#action/3.1">About Us </NavDropdown.Item>
                </Link>

                <Link className={styles["no-underline"]} to={"/page/contact"}>
                  <NavDropdown.Item href="#action/3.2">Contact Us</NavDropdown.Item>
                </Link>
                <NavDropdown.Item href="#action/3.3">Coming Soon </NavDropdown.Item>
                <Link className={styles["no-underline"]} to={"/error"}>
                  <NavDropdown.Item href="#action/3.3">404 Page </NavDropdown.Item>
                </Link>
                <Link className={styles["no-underline"]} to={"/faq"}>
                  <NavDropdown.Item href="#action/3.1">FAQ Page</NavDropdown.Item>
                </Link>
              </NavDropdown>
            </div>
            <div className={`d-flex justify-content-center align-items-center ${styles["pages-shop"]}`}>
              <p className={`${styles["title"]} ${styles["cursor"]}`}>SHOP</p>
              <NavDropdown className={styles["title"]} id="basic-nav-dropdown">
                <Link className={styles["no-underline"]} to={"/product"}>
                  <NavDropdown.Item href="#action/3.1">Product </NavDropdown.Item>
                </Link>
                <Link className={styles["no-underline"]} to={"/cart"}>
                  <NavDropdown.Item href="#action/3.1">Shopping Cart </NavDropdown.Item>
                </Link>
                <Link className={styles["no-underline"]} to={"/cart/checkout"}>
                  <NavDropdown.Item href="#action/3.2">Check Out</NavDropdown.Item>
                </Link>
                <NavDropdown.Item href="#action/3.3">Coming Soon </NavDropdown.Item>
                <Link className={styles["no-underline"]} to={"/profile"}>
                  <NavDropdown.Item href="#action/3.3">My Account</NavDropdown.Item>
                </Link>
                <Link className={styles["no-underline"]} to={"/order/tracking"}>
                  <NavDropdown.Item href="#action/3.1">Order Tracking</NavDropdown.Item>
                </Link>
              </NavDropdown>
            </div>
            <Nav.Link className={styles["title"]}>
              <Link className={`${styles["color-text"]} ${styles["no-underline"]}`} to={"/blog"}>
                BLOG
              </Link>
            </Nav.Link>
          </Nav>
          <div className={` d-flex gap-5 ${styles["icon"]}`}>
            <img className={`  ${styles["icon-1"]} ${styles["cursor"]}`} src={search} alt="/" />
            <Link to={"/favorite"}>
              <img className={`   ${styles["cursor"]}`} src={wishlist} alt="/" />
            </Link>
            <Link to={"/cart"}>
              <img className={`${styles["cursor"]}`} src={cart} alt="/" />
            </Link>
            {isLogin.token ? <NavbarLogin /> : <NavbarRegister />}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
