/* eslint-disable no-unused-vars */
import React from "react";
// import content_first from "../../assets/homepage/img_content_first.png";
import styles from "./CardRightImage.module.css";
import { Link } from "react-router-dom";
function CardRightImage(props) {
   return (
      <>
         <section className="row d-flex flex-lg-row flex-md-row flex-sm-column-reverse flex-column-reverse align-content-center my-5 mx-auto">
            <section className="col-12 col-sm-12 col-md-6 col-lg-7 d-flex justify-content-center align-items-center px-0 px-sm-0">
               <article
                  className={`${styles.content_article_left} d-flex justify-content-center align-items-center p-4`}
               >
                  <div>
                     <h1>{props.title}</h1>
                     <p>{props.desc}</p>
                     <Link
                        to={`/product/detail/${props.id}`}
                        className={styles.links}
                     >
                        <div className="d-flex justify-content-start align-items-center ">
                           <div className={`${styles.line} me-4`}></div>
                           <span className="fw-bold">SHOP NOW</span>
                        </div>
                     </Link>
                  </div>
               </article>
            </section>
            <section className="col-12 col-sm-12 col-md-6 col-lg-5 px-0 ">
               <img
                  className={`${styles.images} px-0`}
                  src={props.images}
                  alt="content_first"
               />
            </section>
         </section>
      </>
   );
}

export default CardRightImage;
