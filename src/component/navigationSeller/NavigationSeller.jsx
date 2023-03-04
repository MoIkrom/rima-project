/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import NavDropdown from "react-bootstrap/NavDropdown";
import axios from "axios";

import styles from "../navigationSeller/NavigationSeller.module.css";

function NavigationSeller() {
  const url = `${process.env.REACT_APP_BACKEND_HOST}/product`;

  const [stock, setStock] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [data, setData] = useState("");

  const HandleProduct = () => {
    return axios
      .get(url)
      .then((res) => {
        setStock(res.data.data.data.stock);
        setDesc(res.data.data.data.description);
        setPrice(res.data.data.data.price);
        setImage(res.data.data.data.image);
        setData(res.data.data.data);
        console.log("data : ", res.data.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const costing = (price) => {
    return parseFloat(price)
      .toFixed()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  };
  return (
    <div>
      <div className=" container justify-content-evenly d-flex  my-5">
        <p className="nav-item">
          <Link className={` text-decoration-none ${styles["no-underline"]}`} to={"/profile"}>
            <p className={`nav-link ${styles["color-text"]}`}>Profile</p>
          </Link>
        </p>

        <div className={`d-flex gap-2 align-items-center ${styles["cursor"]} ${styles["color"]}`}>
          <p className={`${styles["cursor"]} ${styles["color-text"]}`}> My Product </p>
          <NavDropdown className={` ${styles["menu"]} ${styles["color-text"]}`} id="basic-nav-dropdown">
            <NavDropdown.Item onClick={HandleProduct}>All</NavDropdown.Item>
            <NavDropdown.Item>Archive</NavDropdown.Item>
            <NavDropdown.Item>Sold Out</NavDropdown.Item>
          </NavDropdown>
        </div>
        <p className="nav-item">
          <Link className={` text-decoration-none ${styles["no-underline"]} `} to={"/profile/admin/create-product"}>
            <p className={`nav-link ${styles["color-text"]}`}>Selling Product</p>
          </Link>
        </p>
        <div className={`d-flex gap-2 align-items-center ${styles["cursor"]} ${styles["color"]}`}>
          <p className={`${styles["cursor"]} ${styles["color-text"]}`}> My Order </p>
          <NavDropdown className={` ${styles["menu"]} ${styles["color-text"]}`} id="basic-nav-dropdown">
            <NavDropdown.Item onClick={HandleProduct}>All</NavDropdown.Item>
            <NavDropdown.Item>Archive</NavDropdown.Item>
            <NavDropdown.Item>Sold Out</NavDropdown.Item>
          </NavDropdown>
        </div>
      </div>
    </div>
  );
}

export default NavigationSeller;
