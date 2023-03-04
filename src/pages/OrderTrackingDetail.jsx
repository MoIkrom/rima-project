import React from "react";
import { Link } from "react-router-dom";
// components
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";
// styles
import styles from "../styles/OrderTrackingDetail.module.css";
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
                  <Link to={"/order/tracking"}>Tracking</Link>
                  <i className="bi bi-chevron-right mx-3"></i>
                  <Link to={"#"}>Tracking Detail</Link>
               </nav>
               <div className="text-center">
                  <h1 className="py-3">Tracking Detail</h1>
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
                  className={`${styles.content_right} col-12 col-sm-12 col-md-6 col-lg-6  d-flex justify-content-center align-items-center`}
               >
                  <div>
                     <section
                        className={`${styles.data_order} d-flex justify-content-center align-items-center py-5`}
                     >
                        <section className="pe-5">
                           <p>Order ID</p>
                           <p className="fw-bold fs-5">ABCD-EFGH-W123</p>
                        </section>
                        <section>
                           <p>Order Item</p>
                           <p className="fw-bold fs-5">
                              Fabric Mid Century Chair
                           </p>
                        </section>
                     </section>
                     <div className="d-flex flex-column justify-content-start align-items-start">
                        <section className="d-flex justify-content-start align-items-center">
                           <span
                              className={`${styles.icon__delivery} rounded-circle`}
                           >
                              <i className="bi bi-truck fs-4"></i>
                           </span>
                           <div className="ps-3">
                              <p className="fs-6">On Delivery</p>
                              <p className="fs-5 fw-bold">
                                 Kebun Jeruk, Jakarta Barat
                              </p>
                           </div>
                        </section>
                        <section
                           className={`${styles.linedashed} ms-4`}
                        ></section>
                        <section className="d-flex justify-content-start align-items-center text-muted">
                           <span
                              className={`${styles.icon__delivery} rounded-circle`}
                           >
                              <i className="bi bi-truck fs-4"></i>
                           </span>
                           <div className="ps-3">
                              <p className="fs-6">Destination</p>
                              <p className="fs-5 fw-bold">
                                 Kebun Mangga, Jakarta Selatan
                              </p>
                           </div>
                        </section>
                        <button
                           className={`${styles.btn_track} mb-3 mb-sm-3 mb-md-3`}
                        >
                           Check on Map
                        </button>
                     </div>
                  </div>
               </section>
            </section>
         </main>
         <Footer />
      </>
   );
}

export default OrderTracking;
