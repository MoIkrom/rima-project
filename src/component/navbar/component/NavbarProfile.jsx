import React from "react";
import styles from "../../navbar/Navbar.module.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import authActions from "../../../redux/actions/auths";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

// IMport Image
import hamburger from "../../navbar/menu.png";

function NavbarProvile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const userInfo = JSON.parse(localStorage["userInfo"] || "{}");

  const toLogout = () => navigate("/login");
  const logoutHandler = () => {
    dispatch(authActions.logoutThunk(userInfo.token, toLogout));
    localStorage.removeItem("userInfo");
  };

  return (
    <div>
      <NavDropdown className={styles["menu"]} title={<img className={styles["icon-menu"]} src={hamburger} alt="/"></img>} id="basic-nav-dropdown">
        <Link className={styles["no-underline"]} to={"/profile"}>
          <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
        </Link>
        <Link className={styles["no-underline"]} to={"/chat"}>
          <NavDropdown.Item href="#action/3.1">Chat</NavDropdown.Item>
        </Link>
        <Link className={styles["no-underline"]} to={"/notification"}>
          <NavDropdown.Item href="#action/3.1">Notification</NavDropdown.Item>
        </Link>
        <Link className={styles["no-underline"]} to={"/"}>
          <NavDropdown.Item onClick={handleShow}>Logout</NavDropdown.Item>
        </Link>
      </NavDropdown>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton><Modal.Title>Rima Furniture</Modal.Title></Modal.Header>
        <Modal.Body>Are you sure to logout?</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={logoutHandler}>
            Yes
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default NavbarProvile;
