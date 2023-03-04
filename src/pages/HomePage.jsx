/* eslint-disable no-useless-escape */
/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
// styles
import styles from "../styles/Homapage.module.css";
//component
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";
import CardImageLeft from "../component/homepage_card/CardLeftImage";
import CardImageRight from "../component/homepage_card/CardRightImage";
import Loader from "../component/loader/Loader";
// assets
import backtowork from "../assets/homepage/img_service_backtowork.png";
import furniture from "../assets/homepage/img_service_furniture.png";
import furnitureoffice from "../assets/homepage/img_service_furniture_office.png";
import workspace from "../assets/homepage/img_service_workspace.png";
import profileActions from "../redux/actions/profile";

import axios from "axios";
// helper
import title from "../helper/title";
import { useDispatch } from "react-redux";
function HomePage() {
   title("RIMA FURNITURE");
   const [product, setProduct] = useState([]);
   const dispatch = useDispatch();
   useEffect(() => {
      window.scrollTo(0, 5);
      const urlProduct = `${process.env.REACT_APP_BACKEND_HOST}/product?limit=6&page=1&sortby=latest`;
      let userInfo = null;
      if (localStorage["userInfo"])
         userInfo = JSON.parse(localStorage["userInfo"]);

      // console.log(userInfo);
      if (userInfo) {
         const tokenData = JSON.parse(localStorage["userInfo"]);
         dispatch(profileActions.profileThunk(tokenData.token));
      }

      console.log(product);
      axios
         .get(urlProduct)
         .then((res) => {
            setProduct(res.data.data.data);
            console.log(res.data.data.data);
         })
         .catch((err) => console.log(err));
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <>
         <main className="container-fluid p-0">
            {/* content main */}
            <section className={styles.home__bar}>
               <Navbar />
               <section
                  className={` d-flex justify-content-center align-items-center p-0`}
               >
                  <article className={`${styles.content__home}`}>
                     <h1>Minimal Furniture Store</h1>
                     <p>
                        Donec nunc nunc, gravida vitae diam vel, varius interdum
                        erat. Quisque a nunc vel diam auctor commodo.
                        <br /> Curabitur blandit ultrices ex. Curabitur ut magna
                        dignissim, dignissim
                     </p>
                     <section className={`${styles.explore} text-center`}>
                        <p>Explore now</p>
                        <div
                           className={`${styles.arrow}`}
                           onClick={() => {
                              window.scroll(0, 900);
                           }}
                        >
                           <span className={styles.arrows}>
                              {" "}
                              <i
                                 className={
                                    "bi bi-arrow-down-short fs-1 fw-bolder"
                                 }
                              ></i>
                           </span>
                        </div>
                     </section>
                  </article>
               </section>
            </section>
            {/* content first */}
            <div id="#product"></div>
            {product.length > 0 ? (
               product.map((e, index) =>
                  index % 2 === 0 ? (
                     <CardImageLeft
                        images={e.image}
                        title={e.name}
                        desc={e.description}
                        key={e.id}
                        id={e.id}
                     />
                  ) : (
                     <CardImageRight
                        images={e.image}
                        title={e.name}
                        desc={e.description}
                        id={e.id}
                        key={e.id}
                     />
                  )
               )
            ) : (
               <div className="h-100 w-100">
                  <Loader />
               </div>
            )}

            {/* services */}
            <section
               className={`${styles.services__bar} text-center d-flex flex-column justify-content-around align-items-center`}
            >
               <div className="">
                  <h3 className={`${styles.services__bar__title}`}>
                     Gave 5 stars for excellent customer service. I had a couple
                     of questions which they replied quickly to answer. If I
                     could give multiple reasons for my rating it would also be
                     for the design quality and customization to go along with
                     the great service. The theme is excellent, keep up the
                     great work.
                  </h3>
                  <p className={`${styles.services__line} my-5 mx-auto`}></p>
                  <p className={`${styles.services__ceo}`}>
                     Trevor Rivera - CEO IKEA
                  </p>
               </div>
               <section className="d-flex flex-row justify-content-around flex-wrap w-100">
                  <img
                     width={150}
                     className="p-3"
                     src={backtowork}
                     alt="backtowork"
                  />
                  <img
                     width={150}
                     className="p-3"
                     src={furniture}
                     alt="furniture"
                  />
                  <img
                     width={150}
                     className="p-3"
                     src={furnitureoffice}
                     alt="furnitureoffice"
                  />
                  <img
                     width={150}
                     className="p-3"
                     src={workspace}
                     alt="workspace"
                  />
               </section>
            </section>
         </main>
         <Footer />
      </>
   );
}

export default HomePage;
