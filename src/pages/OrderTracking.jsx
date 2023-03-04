import React from "react";
import { Link } from "react-router-dom";
// components
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";
// styles
import styles from "../styles/OrderTracking.module.css";
// assets
import maps from "../assets/background/img_maps.png";
function OrderTracking() {
   return (
      <>
         <Navbar />
         <main>
            {/* breadcrumb */}
            <section className={styles.breadcrumb__bar}>
               <nav className={`${styles.breadcrumb}`}>
                  <Link to={"#"}>Tracking</Link>
                  <i className="bi bi-chevron-right ms-3"></i>
               </nav>
               <div className="text-center">
                  <h1 className="py-3">Order Tracking</h1>
                  <p>Track where your order arrived</p>
               </div>
            </section>
            {/* content */}
            <section className="row d-flex flex-sm-column flex-md-row flex-lg-row">
               <section
                  className={`${styles.content_left} col-12 col-sm-12 col-md-6 col-lg-6 mb-5 mb-md-0 mb-lg-0 pe-0`}
               >
                  <img className="w-100" src={maps} alt="maps" />
               </section>
               <section
                  className={`${styles.content_right} col-12 col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center`}
               >
                  <div>
                     <p className="text-center pb-3 pb-sm-3 py-md-3 pt-lg-3 pb-lg-5">
                        To track your order please enter your Order ID in the
                        box below and press the "Track" button. This was given
                        to you on your receipt and in the confirmation email you
                        should have received.
                     </p>
                     <form>
                        <div className={`${styles.input__bar}`}>
                           <label htmlFor="order" className="fw-bold py-3">
                              Order ID
                           </label>
                           <br />
                           <input
                              type="text"
                              placeholder="Found in your order confirmation email."
                              required
                           />
                        </div>
                        <div className={`${styles.input__bar}`}>
                           <label htmlFor="order" className="fw-bold py-3">
                              <div>
                                 <label htmlFor="order">Billing Email</label>
                                 <br />
                              </div>
                           </label>
                           <br />
                           <input
                              type="email"
                              placeholder="Email you used during checkout"
                              required
                           />
                        </div>
                        <button
                           className={`${styles.btn_track} text-center my-4`}
                        >
                           Track Now
                        </button>
                     </form>
                  </div>
               </section>
            </section>
         </main>
         <Footer />
      </>
   );
}

export default OrderTracking;
