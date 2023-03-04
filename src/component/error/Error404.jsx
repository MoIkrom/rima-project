import React from "react";
import Navbar from "../navbar/Navbar";
import title from "../../helper/title";
import styles from "./Error404.module.css";
import { useNavigate } from "react-router-dom";
// assets
import error_404 from "../../assets/background/error404.jpg";
function Error404() {
   const navigate = useNavigate();
   title("Error 404");
   return (
      <>
         <Navbar />
         <main className={`${styles.error_bar} container`}>
            <section
               className={` row d-flex flex-column-reverse justify-content-center align-items-center flex-md-row flex-lg-row`}
            >
               <section className="col-12 col-sm-12 col-md-6 col-lg-8">
                  <h1 className={styles.titles}>404</h1>
                  <h2 className={styles.title_bar}>Page cannot be found!</h2>
                  <p className={styles.desc}>
                     Donec nunc nunc, gravida vitae diam vel, varius interdum
                     erat. Quisque a nunc vel diam auctor commodo. Curabitur
                     blandit ultrices exurabitur ut magna dignissim, dignissi
                  </p>
                  <div
                     className={`${styles.line_bar} d-flex justify-content-start align-items-center`}
                  >
                     <div className={styles.line}></div>
                     <span
                        className={`${styles.homepage} ms-3 fw-bold`}
                        onClick={() => {
                           navigate("/");
                        }}
                     >
                        BACK TO HOMEPAGE
                     </span>
                  </div>
               </section>
               <section className="col-12 col-sm-12 col-md-6 col-lg-4">
                  <img
                     className={`${styles.error} w-100 h-100 rounded-circle`}
                     src={error_404}
                     alt="error_404"
                  />
               </section>
            </section>
         </main>
      </>
   );
}

export default Error404;
