import React from "react";
import styles from "../styles/FAQ.module.css";

//component
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";

// Image
import coupon from "../assets/FAQ/coupon.png";

const FAQ = () => {
   return (
      <div>
         <Navbar />
         <div className={`container-fluid p-5 ${styles["cont-fluid"]}`}>
            <div className="container justify-content-center">
               <p>
                  FAQ <i className="bi bi-chevron-right"></i>
               </p>
               <p className={`text-center  ${styles["faq"]}`}>FAQ</p>
               <p className={`text-center fs-6 ${styles["text-faq"]}`}>
                  Frequently Asked Questions
               </p>
            </div>
         </div>
         <div className={`container my-5 ${styles["cont-icon"]}`}>
            <svg
               className={`rounded mx-auto d-block ${styles["svg"]}`}
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 576 512"
            >
               <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
            </svg>
            <div className="container d-flex justify-content-center">
               <div className={`${styles.line} mx-5`}></div>
               <p className={`text-center mt-3 ${styles["font"]}`}>
                  Shopping Questions
               </p>
               <div className={`${styles.line} mx-5`}></div>
            </div>
            <div className="row justify-content-evenly">
               <div className="col-12 col-sm-12 col-md-5 col-lg-5 mt-5">
                  <p className="fs-4 ">Do you ship worldwide?</p>
                  <p className={`fs-6 `}>
                     This is the third article of a three-part series. I’m
                     illustrating the marketing challenges of
                     PrescottWeddings.com, a small business. If you don’t
                     remember anything else about marketing, remember this:
                     Frequency is king.
                  </p>
               </div>
               <div className="col-12 col-sm-12 col-md-5 col-lg-5 mt-5  ">
                  <p className="fs-4">How can I use a coupon code?</p>
                  <p className="fs-6">
                     This is the third article of a three-part series. I’m
                     illustrating the marketing challenges of
                     PrescottWeddings.com, a small business. If you don’t
                     remember anything else about marketing, remember this:
                     Frequency is king.
                  </p>
               </div>
               <div className="col-12 col-sm-12 col-md-5 col-lg-5 mt-5">
                  <p className="fs-4">Do you offer gift-vouchers?</p>
                  <p className="fs-6">
                     This is the third article of a three-part series. I’m
                     illustrating the marketing challenges of
                     PrescottWeddings.com, a small business. If you don’t
                     remember anything else about marketing, remember this:
                     Frequency is king.
                  </p>
               </div>
               <div className="col-12 col-sm-12 col-md-5 col-lg-5 mt-5">
                  <p className="fs-4">How can I request a refund?</p>
                  <p className="fs-6">
                     This is the third article of a three-part series. I’m
                     illustrating the marketing challenges of
                     PrescottWeddings.com, a small business. If you don’t
                     remember anything else about marketing, remember this:
                     Frequency is king.
                  </p>
               </div>
            </div>
         </div>
         <div className={`container my-5 ${styles["cont-icon"]}`}>
            <svg
               className={`rounded mx-auto d-block ${styles["svg"]}`}
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 512 512"
            >
               <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 336c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z" />
            </svg>
            <div className={`container d-flex justify-content-center`}>
               <div className={`${styles.line} mx-5`}></div>
               <p className={`text-center mt-3 ${styles["font"]}`}>
                  Payment Questions
               </p>
               <div className={`${styles.line} mx-5`}></div>
            </div>
            <div className="row justify-content-evenly">
               <div className="col-12 col-sm-12 col-md-5 col-lg-5 mt-5">
                  <p className={`fs-4 `}>Do you ship worldwide?</p>
                  <p className="fs-6">
                     This is the third article of a three-part series. I’m
                     illustrating the marketing challenges of
                     PrescottWeddings.com, a small business. If you don’t
                     remember anything else about marketing, remember this:
                     Frequency is king.
                  </p>
               </div>
               <div className="col-12 col-sm-12 col-md-5 col-lg-5 mt-5  ">
                  <p className="fs-4">How can I use a coupon code?</p>
                  <p className="fs-6">
                     This is the third article of a three-part series. I’m
                     illustrating the marketing challenges of
                     PrescottWeddings.com, a small business. If you don’t
                     remember anything else about marketing, remember this:
                     Frequency is king.
                  </p>
               </div>
               <div className="col-12 col-sm-12 col-md-5 col-lg-5 mt-5">
                  <p className="fs-4">Do you offer gift-vouchers?</p>
                  <p className="fs-6">
                     This is the third article of a three-part series. I’m
                     illustrating the marketing challenges of
                     PrescottWeddings.com, a small business. If you don’t
                     remember anything else about marketing, remember this:
                     Frequency is king.
                  </p>
               </div>
               <div className="col-12 col-sm-12 col-md-5 col-lg-5 mt-5">
                  <p className="fs-4">How can I request a refund?</p>
                  <p className="fs-6">
                     This is the third article of a three-part series. I’m
                     illustrating the marketing challenges of
                     PrescottWeddings.com, a small business. If you don’t
                     remember anything else about marketing, remember this:
                     Frequency is king.
                  </p>
               </div>
            </div>
         </div>
         <div className={`container my-5 ${styles["cont-icon"]}`}>
            <img className={`rounded mx-auto d-block`} src={coupon} alt="/" />
            <div className="container d-flex justify-content-center">
               <div className={`${styles.line} mx-5`}></div>
               <p className={`text-center mt-3 ${styles["font"]}`}>
                  Miscellaneous Questions
               </p>
               <div className={`${styles.line} mx-5`}></div>
            </div>
            <div className="row justify-content-evenly">
               <div className="col-12 col-sm-12 col-md-5 col-lg-5 mt-5">
                  <p className="fs-4 ">Do you ship worldwide?</p>
                  <p className="fs-6">
                     This is the third article of a three-part series. I’m
                     illustrating the marketing challenges of
                     PrescottWeddings.com, a small business. If you don’t
                     remember anything else about marketing, remember this:
                     Frequency is king.
                  </p>
               </div>
               <div className="col-12 col-sm-12 col-md-5 col-lg-5 mt-5  ">
                  <p className="fs-4">How can I use a coupon code?</p>
                  <p className="fs-6">
                     This is the third article of a three-part series. I’m
                     illustrating the marketing challenges of
                     PrescottWeddings.com, a small business. If you don’t
                     remember anything else about marketing, remember this:
                     Frequency is king.
                  </p>
               </div>
               <div className="col-12 col-sm-12 col-md-5 col-lg-5 mt-5">
                  <p className="fs-4">Do you offer gift-vouchers?</p>
                  <p className="fs-6">
                     This is the third article of a three-part series. I’m
                     illustrating the marketing challenges of
                     PrescottWeddings.com, a small business. If you don’t
                     remember anything else about marketing, remember this:
                     Frequency is king.
                  </p>
               </div>
               <div className="col-12 col-sm-12 col-md-5 col-lg-5 mt-5">
                  <p className="fs-4">How can I request a refund?</p>
                  <p className="fs-6">
                     This is the third article of a three-part series. I’m
                     illustrating the marketing challenges of
                     PrescottWeddings.com, a small business. If you don’t
                     remember anything else about marketing, remember this:
                     Frequency is king.
                  </p>
               </div>
            </div>
         </div>
         <div
            className={`container justify-content-center mt-5 ${styles["cont-contact-us"]}`}
         >
            <h1 className={`text-center my-3 `}>You Still Need Help?</h1>
            <button
               className={`btn btn-dark rounded mx-auto d-block my-5 ${styles["btn-text"]}`}
            >
               {" "}
               Contact Us
            </button>
         </div>

         <Footer />
      </div>
   );
};

export default FAQ;
