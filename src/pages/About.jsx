import React from "react";
import { Link } from "react-router-dom";
// styles
import styles from "../styles/About.module.css";
import title from "../helper/title";
// components
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";
//assets
import img_video from "../assets/About/img_video.png";
import putra from "../assets/About/putra.jpg";
import basri from "../assets/About/basri.jpg";
import ikrom from "../assets/About/ikrom2.jpg";
import review1 from "../assets/About/ikromOtot.jpg";
import review2 from "../assets/About/ikromBola.jpeg";
// import aksal from "../assets/About/aksal.jpg";
import aksal from "../assets/About/aksal2.jpg";

import img_user from "../assets/About/img_user.png";
import Slider from "react-slick";

function About() {
   title("About Us");

   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
   };
   return (
      <>
         <Navbar />
         <main>
            <section className={styles.breadcrumb__bar}>
               <nav className={`${styles.breadcrumb}`}>
                  <Link to={"#"}>About</Link>
                  <i className="bi bi-chevron-right ms-3"></i>
               </nav>
               <div className="text-center">
                  <h1 className="py-3">About Us</h1>
               </div>
            </section>
            <section className="row pt-5 container mx-auto d-flex flex-column-reverse flex-lg-row">
               <section
                  className={`${styles.content_left} col-12 col-sm-12 col-md-12 col-lg-7 d-flex flex-column align-content-center justify-content-between p-3 px-md-5 px-lg-5`}
               >
                  <h1>RAZ- Modern Furniture</h1>
                  <p>
                     Quisque at justo sagittis, semper lacus a, iaculis tellus.
                     Fusce tempor, leo vel iaculis aliquet, dui turpis maximus
                     tellus, commodo congue Nam fermentum, augue eget pulvinar
                     ullamcorper, dui purus ornare nibh, eu congue ligula felis
                     nec diam liquam mollis nibh eu
                  </p>
                  <div className="text-start">
                     <span className="d-flex justify-content-start align-items-center py-3">
                        <i className="bi bi-dot fs-1 pe-2"></i>
                        Fusce risus ligula, semper et ultricies vitae
                     </span>
                     <span className="d-flex justify-content-start align-items-center py-3">
                        <i className="bi bi-dot fs-1 pe-2"></i>
                        Vivamus eget ante id velit varius lacinia
                     </span>
                  </div>
                  <p>
                     Fusce risus ligula, semper et ultricies vitae, bibendum non
                     nisl. Nunc in libero quis felis congue molestie eu et
                     velit. Praesent gravida magna eget interdum iaculis.
                     Aliquam erat volutpat. Integer placerat ipsum quis
                     malesuada vehicula. Vestibulum
                  </p>
               </section>
               <section className="col-12 col-sm-12 col-md-12 col-lg-5">
                  <img className={styles.play} src={img_video} alt="about" />
               </section>
            </section>

            {/* Why Should Choose Us? */}
            <section className={`${styles.choose} text-center container`}>
               <h1 className="py-5">Why Should Choose Us?</h1>
               <section className="row">
                  <article className="col-12 col-sm-12 col-md-4 text-center pb-5">
                     <h4 className="py-3">Unique Design</h4>
                     <p className="py-3">
                        Fusce risus ligula, semper et ultricies vitae, bibendum
                        non nisl. Nunc in libero quis felis congue
                     </p>
                  </article>
                  <article className="col-12 col-sm-12 col-md-4 text-center pb-5">
                     <h4 className="py-3">Good Wararanty Policy</h4>
                     <p className="py-3">
                        Fusce risus ligula, semper et ultricies vitae, bibendum
                        non nisl. Nunc in libero quis felis congue
                     </p>
                  </article>
                  <article className="col-12 col-sm-12 col-md-4 text-center pb-5">
                     <h4 className="py-3">Handcrafted Quality</h4>
                     <p className="py-3">
                        Fusce risus ligula, semper et ultricies vitae, bibendum
                        non nisl. Nunc in libero quis felis congue
                     </p>
                  </article>
                  <article className="col-12 col-sm-12 col-md-4 text-center  pb-5">
                     <h4 className="py-3">Dedicated Support</h4>
                     <p className="py-3">
                        Fusce risus ligula, semper et ultricies vitae, bibendum
                        non nisl. Nunc in libero quis felis congue
                     </p>
                  </article>
                  <article className="col-12 col-sm-12 col-md-4 text-center pb-5">
                     <h4 className="py-3">Amazing Features</h4>
                     <p className="py-3">
                        Fusce risus ligula, semper et ultricies vitae, bibendum
                        non nisl. Nunc in libero quis felis congue
                     </p>
                  </article>
                  <article className="col-12 col-sm-12 col-md-4 text-center pb-5">
                     <h4 className="py-3">Easy Customized</h4>
                     <p className="py-3">
                        Fusce risus ligula, semper et ultricies vitae, bibendum
                        non nisl. Nunc in libero quis felis congue
                     </p>
                  </article>
               </section>
            </section>
            {/* Meet Our Team */}
            <section className="text-center pb-5 container">
               <h1 className="py-5">Meet Our Team</h1>
               <section className="row d-flex flex-wrap">
                  <section className="col-12 col-sm-12 col-md-6 col-lg-3 text-start mb-sm-3">
                     <img
                        src={putra}
                        alt="img_team"
                        className={`${styles.img_team}`}
                     />
                     <h5 className={styles.name}>Rizki Putra Pratama</h5>
                     <p className={`${styles.jobs}`}>Jr.Frontend Developer</p>
                  </section>
                  <section className="col-12 col-sm-12 col-md-6 col-lg-3 text-start mb-sm-3">
                     <img
                        src={ikrom}
                        alt="img_team"
                        className={`${styles.img_team}`}
                     />
                     <h5 className={styles.name}>Muhammad Ikram</h5>
                     <p className={`${styles.jobs}`}>Jr.Frontend Developer</p>
                  </section>
                  <section className="col-12 col-sm-12 col-md-6 col-lg-3 text-start mb-sm-3">
                     <img
                        src={basri}
                        alt="img_team"
                        className={`${styles.img_team}`}
                     />
                     <h5 className={styles.name}>Imam Basri</h5>
                     <p className={`${styles.jobs}`}>Jr.Frontend Developer</p>
                  </section>
                  <section className="col-12 col-sm-12 col-md-6 col-lg-3 text-start mb-sm-3">
                     <img
                        src={aksal}
                        alt="img_team"
                        className={`${styles.img_team}`}
                     />
                     <h5 className={styles.name}>Akshal Rizki Gandari</h5>
                     <p className={`${styles.jobs}`}>Sr.Fullstack Developer</p>
                  </section>
               </section>
            </section>
            {/* testimoni */}
            <div className={`${styles.testimoni__bar} pb-5 container-fluid`}>
               <Slider {...settings}>
                  <div className={`${styles.testimoni} col-12`}>
                     <p className="">
                        “Gave 5 stars for excellent customer service. I had a
                        couple of questions which they replied quickly to
                        answer. If I could give multiple reasons for my rating
                        it would also be for the design quality and
                        customization to go along with the great service. The
                        theme is excellent, keep up the great work."
                     </p>
                     <img
                        className={`${styles.img_user}`}
                        src={review2}
                        alt="img_user"
                     />
                     <p className={`${styles.name_testi}`}>
                        Gonzales - Singapore
                     </p>
                  </div>
                  {/* testi 2 */}
                  <div className={`${styles.testimoni} col-12`}>
                     <p className="">
                        “Gave 5 stars for excellent customer service. I had a
                        couple of questions which they replied quickly to
                        answer. If I could give multiple reasons for my rating
                        it would also be for the design quality and
                        customization to go along with the great service. The
                        theme is excellent, keep up the great work."
                     </p>
                     <img
                        className={`${styles.img_user}`}
                        src={review1}
                        alt="img_user"
                     />
                     <p className={`${styles.name_testi}`}>
                        Abang Otot - Indonesia
                     </p>
                  </div>
                  <div className={`${styles.testimoni} col-12`}>
                     <p className="">
                        “Gave 5 stars for excellent customer service. I had a
                        couple of questions which they replied quickly to
                        answer. If I could give multiple reasons for my rating
                        it would also be for the design quality and
                        customization to go along with the great service. The
                        theme is excellent, keep up the great work."
                     </p>
                     <img
                        className={`${styles.img_user}`}
                        src={img_user}
                        alt="img_user"
                     />
                     <p className={`${styles.name_testi}`}>
                        Trevor Rivera - Calinofrnia
                     </p>
                  </div>
               </Slider>
            </div>
         </main>
         <Footer />
      </>
   );
}

export default About;
