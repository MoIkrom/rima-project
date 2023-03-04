import React from "react";
import { Link } from "react-router-dom";
// components
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";
// styles
import styles from "../styles/Contact.module.css";
import img_map from "../assets/background/img_map_contact.png";
function Contact() {
   return (
      <>
         <Navbar />
         <main>
            {/* breadcrumb */}
            <section className={styles.breadcrumb__bar}>
               <nav className={`${styles.breadcrumb}`}>
                  <Link to={"#"}>Tracking</Link>
                  <i className="bi bi-chevron-right mx-3"></i>
                  <Link to={"#"}>Contact</Link>
               </nav>
               <div className="text-center">
                  <h1 className={`${styles.contact} py-3`}>Contact Us</h1>
               </div>
            </section>

            <section className="row">
               <section className="col-12 col-12 col-md-6">
                  <img className="w-100 h-100" src={img_map} alt="img_map" />
               </section>
               <section className="col-12 col-12 col-md-6 p-5 p-md-3 p-lg-5">
                  <form className="d-flex flex-column ">
                     <span className="py-3 my-3">
                        <input
                           type="text"
                           placeholder="Name *"
                           className={`${styles.input__} ${styles.inputs} w-100`}
                        />
                     </span>
                     <span className="py-3 my-3">
                        <input
                           type="text"
                           placeholder="Your Email *"
                           className={`${styles.input__} ${styles.inputs} w-100`}
                        />
                     </span>
                     <span className="py-3 my-3">
                        <input
                           type="text"
                           placeholder="You Website *"
                           className={`${styles.input__} ${styles.inputs} w-100`}
                        />
                     </span>
                     <span className="py-3 my-3">
                        <select
                           className={`${styles.input__} ${styles.inputs} w-100`}
                           name="plan"
                           id="plan"
                        >
                           <option value="business">Business Plan</option>
                           <option value="free">Free Plan</option>
                           <option value="Premium">Premium Plan</option>
                        </select>
                     </span>
                     <span>
                        <textarea
                           name="message"
                           id="message"
                           cols="30"
                           rows="5"
                           placeholder="Message"
                           className={`${styles.text_} w-100 py-3 my-3`}
                        ></textarea>
                     </span>
                     <button className={styles.send}>Send Message</button>
                  </form>
               </section>
            </section>
         </main>
         <Footer />
      </>
   );
}

export default Contact;
