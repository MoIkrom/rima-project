/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
// components
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";
import CardCart from "../component/cart/CardCart";
// helpers
import title from "../helper/title";
// styles
import styles from "../styles/Cart.module.css";
import img_empty from "../assets/cart/img_empty.png";

function Cart() {
   title("Cart");
   const [cart, setCart] = useState([1, 2, 3, 4]);

   return (
      <>
         <Navbar />
         <main>
            {/* breadcrumb */}
            <section className={styles.breadcrumb__bar}>
               <nav className={`${styles.breadcrumb}`}>
                  <Link to={"#"}>Your Cart</Link>
                  <i className="bi bi-chevron-right mx-3"></i>
               </nav>
               <div className="text-center">
                  <span>
                     <h1 className="py-3">Your Cart</h1>
                     <p>Buy everything in your cart now!</p>
                  </span>
                  {/* kondisi jika ada checkout */}
               </div>
            </section>
            {/* cart */}
            <section className="row container py-5 mx-auto d-flex flex-lg-row justify-content-between flex-md-column">
               {cart.length > 0 ? (
                  <>
                     <section
                        className={`${styles.cart_product} col-12 col-sm-12 col-md-12 col-lg-8`}
                     >
                        <table
                           className={`${styles.tables_cart} table table-borderless w-100`}
                        >
                           <thead>
                              <tr className=" d-flex justify-content-between ">
                                 <th
                                    className={`${styles.title_table} w-50`}
                                    scope="col"
                                 >
                                    Products
                                 </th>
                                 <div className="d-flex justify-content-between w-50">
                                    <th
                                       className={`${styles.title_table} `}
                                       scope="col"
                                    >
                                       PRICE
                                    </th>
                                    <th
                                       className={`${styles.title_table} `}
                                       scope="col"
                                    >
                                       QUANTITY
                                    </th>
                                    <th
                                       className={`${styles.title_table} `}
                                       scope="col"
                                    >
                                       TOTAL
                                    </th>
                                 </div>
                              </tr>
                           </thead>
                           <tbody className={`${styles.product__bar}`}>
                              {/* addcart */}
                              {cart.map((e) => (
                                 <CardCart key={e} />
                              ))}
                           </tbody>
                           <section className={`${styles.coupon} row d-flex `}>
                              <section
                                 className={`${styles.input__bar} col-12 col-sm-12 col-md-7`}
                              >
                                 <span className={`${styles.input_code}`}>
                                    <input
                                       type="text"
                                       placeholder="Enter your coupon code"
                                    />
                                    <span className={styles.apply_coupon}>
                                       Apply Coupon
                                    </span>
                                 </span>
                              </section>
                              <section className="col-12 col-sm-12 col-md-5 d-flex justify-content-end">
                                 <span className={styles.btn_}>Clear Cart</span>
                                 <span
                                    className={`${styles.btn_} fw-bold text-black`}
                                 >
                                    Update Cart
                                 </span>
                              </section>
                           </section>
                        </table>
                     </section>
                     <section
                        className={`${styles.cart_total} col-12 col-sm-12 col-md-12 col-lg-4 `}
                     >
                        <div className={`${styles.total_bar}`}>
                           <p className={`${styles.title} pb-5`}>Cart Total</p>
                           <section className="d-flex justify-content-between align-items-center pb-5">
                              <p className={`${styles.title} `}>Subtotal</p>
                              <p className={`${styles.title}`}>$125</p>
                           </section>
                           <section
                              className={`${styles.shipping} d-flex justify-content-between align-content-start`}
                           >
                              <p className={`${styles.title}`}>Shipping</p>
                              <section>
                                 <section>
                                    <input
                                       type="radio"
                                       id="flat"
                                       name="shipping"
                                       className={`${styles.input_radio} me-3`}
                                    />
                                    <label htmlFor="flat">Flat rate: $10</label>
                                 </section>
                                 <section>
                                    <input
                                       type="radio"
                                       id="free"
                                       name="shipping"
                                       className={`${styles.input_radio} me-3`}
                                    />
                                    <label htmlFor="free">Free shipping</label>
                                 </section>
                                 <section>
                                    <input
                                       type="radio"
                                       id="pickup"
                                       name="shipping"
                                       className={`${styles.input_radio} me-3`}
                                    />
                                    <label htmlFor="pickup">Local pickup</label>
                                 </section>
                              </section>
                           </section>
                           <section className="d-flex justify-content-between align-content-center py-3">
                              <p className={`${styles.title}`}>Total Price</p>
                              <p className={`${styles.title}`}>$125</p>
                           </section>
                        </div>
                        <button className={`${styles.btn_process}`}>
                           Procced To Check Out
                        </button>
                     </section>
                  </>
               ) : (
                  <div className={`${styles.empty__bar} text-center`}>
                     <img src={img_empty} alt="img_empty" />
                     <h3 className={`${styles.empty_title}`}>
                        Your Cart is Empty
                     </h3>
                     <p className={styles.empty_text}>
                        Donec nunc nunc, gravida vitae diam vel, varius interdum
                        erat. Quisque a nunc vel <br /> diam auctor commodo.
                        urabitur blandit ultri
                     </p>
                  </div>
               )}

               {/* kondisi belom ada cart */}
            </section>
         </main>
         <Footer />
      </>
   );
}

export default Cart;
