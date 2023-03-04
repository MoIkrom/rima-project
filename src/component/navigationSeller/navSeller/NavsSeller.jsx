import React from "react";
import styles from "../../../styles/SellerProduct.module.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function NavsSeller() {
  return (
    <div>
      <div className={`container justify-content-evenly d-flex  my-5 ${styles["cont-nav"]} `}>
        <p className="nav-item">
          <Link className={` text-decoration-none ${styles["no-underline"]}`} to={"/profile"}>
            <p className={`nav-link ${styles["nav-text"]} ${styles["color-text"]}`}>Profile</p>
          </Link>
        </p>

        <div className={`d-flex gap-2 align-items-center ${styles["cursor"]} ${styles["color"]}`}>
          <Link className={` text-decoration-none ${styles["no-underline"]} `} to={"/admin/my-product"}>
            <p className={`${styles["cursor"]} ${styles["color-text"]}`}>My Product</p>
          </Link>
          <NavDropdown className={` ${styles["menu"]} ${styles["color-text"]}`} id="basic-nav-dropdown">
            <NavDropdown.Item>All</NavDropdown.Item>
            <NavDropdown.Item>Archive</NavDropdown.Item>
            <NavDropdown.Item>Sold Out</NavDropdown.Item>
          </NavDropdown>
        </div>
        <p className="nav-item">
          <Link className={` text-decoration-none ${styles["no-underline"]} `} to={"/admin/create-product"}>
            <p className={`nav-link ${styles["color-text"]}`}>Selling Product</p>
          </Link>
        </p>
        <div className={`d-flex gap-2 align-items-center ${styles["cursor"]} ${styles["color"]}`}>
          <Link to={"/admin/my-order"} className={` text-decoration-none ${styles["no-underline"]} `}>
            <p className={`${styles["cursor"]} ${styles["color-text"]}`}>My Order</p>
          </Link>
          <NavDropdown className={` ${styles["menu"]} ${styles["color-text"]}`} id="basic-nav-dropdown">
            <NavDropdown.Item>All</NavDropdown.Item>
            <NavDropdown.Item>Archive</NavDropdown.Item>
            <NavDropdown.Item>Sold Out</NavDropdown.Item>
          </NavDropdown>
        </div>
      </div>
    </div>
  );
}

export default NavsSeller;
