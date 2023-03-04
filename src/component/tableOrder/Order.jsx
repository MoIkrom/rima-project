import React from "react";
import styles from "../tableOrder/Order.module.css";

import check from "../../assets/sellerProduct/checklist.png";

function Order(props) {
  return (
    <div className="container d-flex mt-5">
      {/* <div className="d-flex justify-content-between"> */}

      <div className={` ${styles["price"]} d-flex align-items-center col-lg-4 justify-content-center `}>
        <img src={props.image} alt="/" />
        <p />
        {props.description}
      </div>
      <div className={` ${styles["price"]} d-flex align-items-center col-lg-2 justify-content-center `}>
        <p className=" " /> {props.price}
        {/* <p className=" " /> {props.price} */}
      </div>
      <div className={` ${styles["price"]} d-flex align-items-center col-lg-2 justify-content-center `}>
        <p className=" " /> {props.quantity}
        {/* <p className=" " /> {props.price} */}
      </div>
      <div className={` ${styles["price"]} d-flex align-items-center col-lg-2 justify-content-center `}>
        <img src={check} alt="/" />
        {props.status}
      </div>
      <div className={` ${styles["price"]} d-flex align-items-center col-lg-2 justify-content-center `}>
        <p className=" " /> {props.total}
        {/* <p className=" " /> {props.price} */}
      </div>
    </div>
  );
}

export default Order;
