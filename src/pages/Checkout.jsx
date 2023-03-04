/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
// components
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";

import visa from "../assets/cart/img_bank_visa.png";
// styles
import styles from "../styles/Checkout.module.css";
function CardCheckout() {
  return (
    <>
      <Navbar />
      <main>
        <section className={styles.breadcrumb__bar}>
          <nav className={`${styles.breadcrumb}`}>
            <Link to={"#"}>Your Cart</Link>
            <i className="bi bi-chevron-right mx-3"></i>
            <Link to={"#"}>Checkout</Link>
          </nav>
          <div className="text-center">
            <span>
              <h1 className="py-3">Checkout</h1>
              <p>Pay and get your ordered items</p>
            </span>
          </div>
        </section>
        {/* Self Information */}
        <section className={`${styles.self__bar}`}>
          <div className="">
            <h1 className="py-5">Self Information</h1>
            <form className="pb-5">
              <input className={`${styles.input_} mb-3`} type="text" placeholder="Your Name *" />
              <br />
              <input className={`${styles.input_} mb-3`} type="email" placeholder="Address *" />
              <div className={`${styles["input_group"]} input-group mb-5`}>
                <select className={`${styles.select_phone} form-select`}>
                  <option selected>Open this select menu</option>
                  <option value="+62">+62</option>
                  <option value="+63">+63</option>
                  <option value="+64">+64</option>
                </select>
                <input className={`${styles.input_phone} w-75 form-control`} type="tel" />
              </div>
              <select className={`${styles.select_bank} form-select mb-5`}>
                <option selected>Menu</option>
                <option value="1">Visa</option>
                <option value="2">Mandiri</option>
                <option value="3">BCA</option>
              </select>
              <button className={`${styles.btn_checkout}`}>Check Out</button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default CardCheckout;
