/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";
import axios from "axios";
import styles from "../styles/SellerProduct.module.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import Table from "../component/tableSelling/Table";

import Loader from "../component/loader/Loader";
import { Link } from "react-router-dom";
// import Dropdown from "react-bootstrap/Dropdown";
// import NavigationSeller from "../component/navigationSeller/NavigationSeller";

function SellerProduct() {
  const url = `${process.env.REACT_APP_BACKEND_HOST}/product/my-product`;

  const [stock, setStock] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [data, setData] = useState("");
  const [id, setId] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const url = `${process.env.REACT_APP_BACKEND_HOST}/product/my-product`;
    const userInfo = JSON.parse(localStorage["userInfo"] || "{}");
    const token = userInfo.token;
    axios
      .get(url, { headers: { "x-access-token": token } })
      .then((res) => {
        console.log(res);
        // setStock(res.data.data.data.stock);
        // setDesc(res.data.data.data.description);
        // setPrice(res.data.data.data.price);
        // setImage(res.data.data.data.image);
        // setId(res.data.data.data.id);
        setData(res.data.data);
        setIsLoading(false);
        console.log("data : ", res.data.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteProduct = (data) => {
    const userInfo = JSON.parse(localStorage["userInfo"] || "{}");
    const token = userInfo.token;
    const role = userInfo.role;
    // console.log(token);
    axios
      .delete(
        `${process.env.REACT_APP_BACKEND_HOST}/product/delete/${data}`,
        { headers: { "x-access-token": token } },
        role
      )
      .then((res) => {
        window.location.reload();
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const HandleProduct = () => {
    return axios
      .get(url)
      .then((res) => {
        setStock(res.data.data.data.stock);
        setDesc(res.data.data.data.description);
        setPrice(res.data.data.data.price);
        setImage(res.data.data.data.image);
        setData(res.data.data.data);
        // console.log("data : ", res.data.data.data);
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
      <Navbar />
      <div className={`container-fluid p-5 ${styles["cont-fluid"]}`}>
        <div className="container justify-content-center">
          <p className={`text-center  ${styles["profile"]}`}>My Product</p>
          <p className={`text-center fs-6 ${styles["text-profile"]}`}>
            See your notifications for the latest updates
          </p>
        </div>
      </div>
      <div className=" container justify-content-evenly d-flex  my-5">
        <p className="nav-item">
          <Link
            className={` text-decoration-none ${styles["no-underline"]}`}
            to={"/profile"}
          >
            <p className={`nav-link ${styles["color-text"]}`}>Profile</p>
          </Link>
        </p>

        <div
          className={`d-flex gap-2 align-items-center ${styles["cursor"]} ${styles["color"]}`}
        >
          <p
            className={`${styles["cursor"]} ${styles["color-text"]}`}
            onClick={HandleProduct}
          >
            My Product
          </p>
          <NavDropdown
            className={` ${styles["menu"]} ${styles["color-text"]}`}
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item onClick={HandleProduct}>All</NavDropdown.Item>
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
          <Link
            to={"/admin/my-order"}
            className={` text-decoration-none ${styles["no-underline"]} `}
          >
            <p className={`${styles["cursor"]} ${styles["color-text"]}`}>
              My Order
            </p>
          </Link>
          <NavDropdown
            className={` ${styles["menu"]} ${styles["color-text"]}`}
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item onClick={HandleProduct}>All</NavDropdown.Item>
            <NavDropdown.Item>Archive</NavDropdown.Item>
            <NavDropdown.Item>Sold Out</NavDropdown.Item>
          </NavDropdown>
        </div>
      </div>

      <hr className="container" />
      <section className="container d-flex px-5 justify-content-between ">
        <p
          className={`${styles["title"]} col-4 d-flex justify-content-start ms-4 `}
        >
          Product
        </p>
        <p
          className={`${styles["title"]} col-4 d-flex justify-content-start ms-4 `}
        >
          {" "}
          Stock Status
        </p>
        <p
          className={`${styles["title"]} col-4 d-flex justify-content-start ms-4 `}
        >
          Price
        </p>
      </section>
      <hr className="container" />
      {!setIsLoading && data.length === 0 && (
        <>
          <div className={`${styles["status-product"]} text-center`}>
            <h1 className="text-center">You Dont Have Any Product</h1>
          </div>
        </>
      )}
      <div className="container">
        {data.length > 0 ? (
          data.map((data, index) => {
            return (
              <Table
                key={index}
                title={data.name}
                stock={data.stock}
                description={data.desc}
                image={data.image}
                price={`${"IDR"} ${costing(data.price)}`}
                remove={deleteProduct}
                id={data.id}
              />
            );
          })
        ) : (
          <Loader />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default SellerProduct;
