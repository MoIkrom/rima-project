import React from "react";
import styles from "../footer/Footer.module.css";

// Import Image
import fb from "./fb.png";
import twitter from "./twitter.png";
import youtube from "./youtube.png";
import basket from "./basket.png";
import email from "./email.png";
import phone from "./phone.png";
import time from "./time.png";

function Footer() {
  return (
    <div>
      <footer className=" text-center text-lg-start bg-light text-muted">
        {/* <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"></section> */}

        <section className="p-4 pb-4 bg-black">
          <div className="container text-center text-md-start mt-5">
            <div className="row justify-content-evenly mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 ms-0 mb-4">
                <h6 className={` text-uppercase fw-bold mb-4 ${styles["company"]}`}>RIMA</h6>
                <p>Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo.</p>
                <div className={`mt-3 ${styles["a"]}`}>
                  <a href=" " className="me-md-2 me-3 text-reset">
                    <img className={`${styles["icon"]}`} src={fb} alt="/" />
                  </a>
                  <a href=" " className="me-md-2 me-3 text-reset">
                    <img className={`${styles["icon"]}`} src={twitter} alt="/" />
                  </a>
                  <a href=" " className="me-md-2 me-3 text-reset">
                    <img className={`${styles["icon"]}`} src={youtube} alt="/" />
                  </a>
                  <a href=" " className="me-md-2 me-3 text-reset">
                    <img className={`${styles["icon"]}`} src={basket} alt="/" />
                  </a>
                </div>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-md-2 mx-auto mb-4">
                <h6 className={`text-uppercase fw-bold mb-4 ${styles["title-footer"]}`}>COMPANY</h6>
                <p className={`mb-md-2 mb-4`}>
                  <a href="#!" className={`text-reset text-decoration-none ${styles["li"]}`}>
                    ABOUT US
                  </a>
                </p>
                <p className={` mb-md-2 mb-4`}>
                  <a href="#!" className={`text-reset text-decoration-none ${styles["li"]}`}>
                    HELP CENTER
                  </a>
                </p>
                <p className={` mb-md-2 mb-4`}>
                  <a href="#!" className={`text-reset text-decoration-none ${styles["li"]}`}>
                    LICENSES
                  </a>
                </p>

                <p className={` mb-md-2 mb-4`}>
                  <a href="#!" className={`text-reset text-decoration-none ${styles["li"]}`}>
                    MARKET API
                  </a>
                </p>
                <p className={` mb-md-2 mb-4`}>
                  <a href="#!" className={`text-reset text-decoration-none ${styles["li"]}`}>
                    SITE MAP
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mt-md-1 mx-md-0 px-md-0 mx-auto mb-4">
                <h6 className={`text-uppercase fw-bold mb-4 ${styles["title-footer"]}`}>USERFUL</h6>
                <p className={`mb-4`}>
                  <a href="#!" className={`text-reset text-decoration-none ${styles["li"]}`}>
                    The Collections
                  </a>
                </p>
                <p className={`mb-4`}>
                  <a href="#!" className={`text-reset text-decoration-none ${styles["li"]}`}>
                    Size Guide
                  </a>
                </p>
                <p className={`mb-4`}>
                  <a href="#!" className={`text-reset text-decoration-none ${styles["li"]}`}>
                    Lookbook
                  </a>
                </p>
                <p className={`mb-4`}>
                  <a href="#!" className={`text-reset text-decoration-none ${styles["li"]}`}>
                    Instagram Shop
                  </a>
                </p>
              </div>

              <div className="  col-md-12 col-lg-3 col-xl-3 mx-lg-0 p-lg-0 mt-lg-0 ms-md-5 ps-md-4 mt-md-5 mx-auto mb-md-0 mb-4 ">
                <h6 className={`text-uppercase fw-bold mb-4 ${styles["title-footer"]}`}>Contact us</h6>
                <div className="d-flex  me-3 mb-3 gap-3 align-items-center">
                  <img className={`${styles["img-right"]}`} src={email} alt="/" />
                  <p className={`${styles["text-footer"]}`}>info@la-studioweb.com</p>
                </div>
                <div className="d-flex me-3 mb-3 gap-3 align-items-center">
                  <img className={`${styles["img-right"]}`} src={phone} alt="/" />
                  <p className={`${styles["text-footer"]}`}>+44.954.954.86</p>
                </div>
                <div className="d-flex me-3 mb-3 gap-3 align-items-center">
                  <img className={`${styles["img-right"]}`} src={time} alt="/" />
                  <p className={`${styles["text-footer"]}`}>9:00am - 19:00pm Monday - Sunday</p>
                </div>
              </div>
            </div>
          </div>
          <div className={`text-center pt-4 ${styles["text-copyright"]}`}>© 2022 RIMA STORE ALL RIGHT RESERVED</div>
        </section>
      </footer>
    </div>
  );
}

export default Footer;
