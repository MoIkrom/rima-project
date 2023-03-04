import React from "react";
// import { useState } from "react";
import styles from "../tableSelling/Table.module.css";
// import axios from "axios";

// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import authActions from "../redux/actions/auths";

// Import Image
// import chair from "../../assets/sellerProduct/chair.png";
import check from "../../assets/sellerProduct/checklist.png";

function table(props) {
  return (
    <div className="d-flex px-0 justify-content-between">
      {/* <div className="d-flex justify-content-between"> */}
      <div className="d-flex align-items-center col-1 justify-content-between">
        <img
          className={`${styles["image-product"]}`}
          src={props.image}
          alt="/"
        />
      </div>
      <div
        className={`${styles["cont-product"]} d-flex align-items-center col-4 col-md-3`}
      >
        <p className={styles["Name"]}>{props.title}</p>
        <p className={`${styles["name-product"]}`} />
        {props.description}
      </div>

      <div
        className={` d-flex align-items-center col-2 justify-content-center gap-3 ${styles["text-stock"]}`}
      >
        {/* <div className={` ${styles["stock"]} col-4 justify-content-center `}> */}
        <img className={`${styles["check"]}`} src={check} alt="/" />
        {props.stock} Stock
      </div>

      <div
        className={` ${styles["price"]} d-flex align-items-center col-3 justify-content-center gap-5`}
      >
        <p className=" " /> {props.price}
      </div>
      <div
        className={` ${styles["price"]} d-flex align-items-center col-lg-1 justify-content-center gap-5`}
      >
        <button
          onClick={() => props.remove(props.id)}
          className={`btn btn-danger ${styles["delete"]} `}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default table;
