/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import styles from "../styles/CreateProduct.module.css";
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";
import NavDropdown from "react-bootstrap/NavDropdown";
import axios from "axios";
import Loader from "../component/loader/Loader";
// import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import Order from "../component/tableOrder/Order";

function MyOrder() {
  const url = `${process.env.REACT_APP_BACKEND_HOST}/transaction/history-seller`;

  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [status, setStatus] = useState("");
  const [total, setTotal] = useState("");
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const url = `${process.env.REACT_APP_BACKEND_HOST}/transaction/history-seller`;
    const userInfo = JSON.parse(localStorage["userInfo"] || "{}");

    axios
      .get(url, userInfo.token)
      .then((res) => {
        // setStock(res.data.data.data.stock);
        // setDesc(res.data.data.data.description);
        // setPrice(res.data.data.data.price);
        // setImage(res.data.data.data.image);
        // setData(res.data.data.data);
        setisLoading(false);
        console.log("data : ", res.data.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const HandleProduct = () => {
    return axios
      .get(url)
      .then((res) => {
        // setStock(res.data.data.data.stock);
        // setDesc(res.data.data.data.description);
        // setPrice(res.data.data.data.price);
        // setImage(res.data.data.data.image);
        // setData(res.data.data.data);
        console.log("data : ", res.data.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div>
        <Navbar />
        <div className={`container-fluid p-5 ${styles["cont-fluid"]}`}>
          <div className="container justify-content-center">
            <p className={`text-center  ${styles["profile"]}`}>My Order</p>
            <p className={`text-center fs-6 ${styles["text-profile"]}`}>
              See your notifications for the latest updates
            </p>
          </div>
        </div>
        <div className=" container justify-content-evenly d-flex  my-5">
          <p className="nav-item">
            <Link
              className={` text-decoration-none ${styles["no-underline"]}`}
              to={"/admin/profile"}
            >
              <p className={`nav-link ${styles["color-text"]}`}>Profile</p>
            </Link>
          </p>

          <div
            className={`d-flex gap-2 align-items-center ${styles["cursor"]} ${styles["color"]}`}
          >
            <Link
              className={` text-decoration-none ${styles["no-underline"]} `}
              to={"/admin/my-product"}
            >
              <p className={`${styles["cursor"]} ${styles["color-text"]}`}>
                {" "}
                My Product{" "}
              </p>
            </Link>
            <NavDropdown
              className={` ${styles["menu"]} ${styles["color-text"]}`}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item>All</NavDropdown.Item>
              <NavDropdown.Item>Archive</NavDropdown.Item>
              <NavDropdown.Item>Sold Out</NavDropdown.Item>
            </NavDropdown>
          </div>
          <p className="nav-item">
            <Link
              className={` text-decoration-none ${styles["no-underline"]} `}
              to={"/admin/create-product"}
            >
              <p className={`nav-link ${styles["color-text"]}`}>
                Selling Product
              </p>
            </Link>
          </p>
          <div
            className={`d-flex gap-2 align-items-center ${styles["cursor"]} ${styles["color"]}`}
          >
            <p className={`${styles["cursor"]} ${styles["color-text"]}`}>
              {" "}
              My Order{" "}
            </p>
            <NavDropdown
              className={` ${styles["menu"]} ${styles["color-text"]}`}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item>All</NavDropdown.Item>
              <NavDropdown.Item>Archive</NavDropdown.Item>
              <NavDropdown.Item>Sold Out</NavDropdown.Item>
            </NavDropdown>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className={`${styles["status-product"]} text-center`}>
          <h1 className="text-center">You Dont Have Any Transaction</h1>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {/* <div className="container d-flex justify-content-between ">
        <br />
          <p className="col-lg-4 d-flex justify-content-start">PRODUCTS</p>
          <p className="col-lg-2 d-flex justify-content-center">PRICE</p>
          <p className="col-lg-2 d-flex justify-content-center">QUANTITY</p>
          <p className="col-lg-2 d-flex justify-content-center">STATUS ORDER</p>
          <p className="col-lg-2 d-flex justify-content-center">TOTAL</p>
        </div>
        () */}
        {/* <Order /> */}
        <Footer />
      </div>
    </div>
  );
}

export default MyOrder;
