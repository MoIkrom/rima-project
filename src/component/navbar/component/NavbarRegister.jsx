import React from "react";
import styles from "../Navbar.module.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

// IMport Image
import hamburger from "../menu.png";

function NavbarRegister() {
  return (
    <div>
      <NavDropdown className={styles["menu"]} title={<img className={styles["icon-menu"]} src={hamburger} alt="/"></img>} id="basic-nav-dropdown">
        <Link className={styles["no-underline"]} to={"/login"}>
          <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
        </Link>
        <Link className={styles["no-underline"]} to={"/register"}>
          <NavDropdown.Item href="#action/3.1">Register</NavDropdown.Item>
        </Link>
        <Link className={styles["no-underline"]} to={"/chat"}>
          <NavDropdown.Item href="#action/3.1">Chat</NavDropdown.Item>
        </Link>
        <Link className={styles["no-underline"]} to={"/notification"}>
          <NavDropdown.Item href="#action/3.1">Notification</NavDropdown.Item>
        </Link>
      </NavDropdown>
    </div>
  );
}

export default NavbarRegister;
