import React, { useEffect, useState } from "react";
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";
import styles from "../styles/ProductDetail.module.css";
// import Slider from "react-slick";
import title from "../helper/title";
import Loader from "../component/loader/Loader";

// Import Image
// import sofa1 from "../assets/productDetail/Sofa1.png";
// import sofa2 from "../assets/productDetail/Sofa2.png";
// import sofa3 from "../assets/productDetail/Sofa3.png";
// import sofa4 from "../assets/productDetail/Sofa4.png";
// import sofa5 from "../assets/productDetail/Sofa5.png";
import star from "../assets/productDetail/star.png";
import delivery from "../assets/productDetail/delivery-fast.png";
import size from "../assets/productDetail/measurement.png";
import location from "../assets/productDetail/pin-check.png";
import fb from "../assets/productDetail/fb.png";
import twitter from "../assets/productDetail/twitter.png";
import youtube from "../assets/productDetail/youtube.png";
// import related from "../assets/productDetail/related.png";
import checklist from "../assets/productDetail/checklist.png";
import { useParams, Link } from "react-router-dom";
import Slider from "react-slick";
import axios from "axios";

// import hot from "../assets/productDetail/hot.png";

function ProductDetail() {
   var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 3,
               infinite: true,
               dots: true,
            },
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               initialSlide: 2,
            },
         },
         {
            breakpoint: 576,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
      ],
   };
   const params = useParams();
   //  console.log(params.id);
   title("Product");
   // const settings = {
   //   dots: true,
   //   infinite: true,
   //   speed: 500,
   //   slidesToShow: 1,
   //   slidesToScroll: 1,
   // };
   const costing = (price) => {
      return parseFloat(price)
         .toFixed()
         .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
   };
   const [image, setImage] = useState([]);
   const [product, setProduct] = useState([]);
   const [relaited, setRelaited] = useState([]);
   const [load, setLoad] = useState("load");

   let [result, setResult] = useState(1);

   const counterUp = () => {
      setResult(result + 1);
   };
   const counterDown = () => {
      setResult(result <= 1 ? (result = 1) : result - 1);
   };
   //  console.log(image);
   //  console.log(product);
   const urlProductId = `${process.env.REACT_APP_BACKEND_HOST}/product/${params.id}`;
   useEffect(() => {
      window.scrollTo(0, 1);
      axios
         .get(urlProductId)
         .then((res) => {
            // console.log(res.data.data.relaited);
            setImage(res.data.data.image);
            setLoad(res.data.data.image[0].image);
            setRelaited(res.data.data.relaited);
            setProduct(res.data.data.product[0]);
         })
         .catch((err) => {
            console.log(err);
         });
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const handlerClickId = () => {
      window.scrollTo(0, 10);
      axios
         .get(urlProductId)
         .then((res) => {
            // console.log(res.data.data.relaited);
            setImage(res.data.data.image);
            setLoad(res.data.data.image[0].image);
            setRelaited(res.data.data.relaited);
            setProduct(res.data.data.product[0]);
         })
         .catch((err) => {
            console.log(err);
         });
   };
   const handClickImg = (data) => {
      setLoad(data.image);
   };
   return (
      <div>
         <Navbar />
         <div className="container">
            <div className={`${styles["cont-faq"]}`}>
               <p className={` d-flex  ${styles["title-faq"]} mt-4`}>
                  <Link to={"/faq"}>
                     FAQ <i className="bi bi-chevron-right mx-3" />
                  </Link>
                  <p className={`d-flex ${styles["title-faq"]} `}>
                     Shop Right Sidebar
                     <i className="bi bi-chevron-right mx-3" />
                  </p>
                  <p className="d-flex ">{product.name}</p>
               </p>
            </div>

            <div className="container mx-auto justify-content-between">
               <section className={`${styles["cont-1"]} py-5`}>
                  <div className="row d-flex justify-content-between flex-column-reverse flex-sm-column-reverse flex-md-column-reverse flex-lg-row ">
                     <div className=" col-12 col-md-12 col-lg-3 ps-lg-0 col-sm-12 d-flex flex-md-row flex-wrap flex-lg-column align-items-center pt-5">
                        {load === "load" ? (
                           <Loader />
                        ) : (
                           image.map((data) => (
                              <img
                                 className={`border-bottom ${styles["img-left"]}`}
                                 src={data.image}
                                 key={data.id}
                                 alt="/"
                                 onClick={() => {
                                    handClickImg(data);
                                 }}
                              />
                           ))
                        )}
                     </div>
                     <div className=" col-12 col-md-12 col-sm-12 col-lg-8">
                        {load === "load" ? (
                           <Loader />
                        ) : (
                           <img
                              className={` w-100  ${styles["img-right"]}`}
                              src={load}
                              alt="/"
                           />
                        )}
                     
                     </div>
                  </div>
               </section>
               <section className={`container  ${styles["cont-2"]}`}>
                  <h1 className={`${styles["title-coast"]}`}>{product.name}</h1>
                  <div className={`${styles["cont-star"]}`}>
                     <img className={`${styles["star"]}`} src={star} alt="/" />{" "}
                     <span>2 (reviews)</span>
                  </div>
                  <div
                     className={`d-flex col-12 col-lg-12 col-md-12  align-items-center ${styles["cont-price"]}`}
                  >
                     <p className={` ${styles["price"]}`}>
                        IDR.{costing(product.price)}
                     </p>
                     <img
                        className={` ${styles["sold-out"]}`}
                        src={checklist}
                        alt="/"
                     ></img>
                     <p className={` ${styles["stock"]}`}>
                        {product.sold} Sold / {product.stock} In Stock
                     </p>
                  </div>
                  <p className={`mt-5 ${styles["donec"]}`}>
                     {product.description}
                  </p>
                  <div className="mt-5">
                     <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic outlined example"
                     >
                        <button
                           type="button"
                           className={`btn btn-outline-dark ${styles["height-btn"]}`}
                           onClick={counterDown}
                        >
                           -
                        </button>
                        <button type="button" className="btn btn-outline-dark">
                           {result}
                        </button>
                        <button
                           type="button"
                           className="btn btn-outline-dark"
                           onClick={counterUp}
                        >
                           +
                        </button>
                     </div>
                     <button
                        type="button"
                        className={`btn btn-dark rounded-0 mx-2 ${styles["cart-btn"]} ${styles["height-btn"]}`}
                     >
                        Add to cart
                     </button>
                     <button
                        type="button"
                        className={`btn btn-dark rounded-0 ${styles["love"]} ${styles["height-btn"]} ${styles["heart-btn"]}`}
                     >
                        <i className="bi bi-heart"></i>
                     </button>
                  </div>
                  <div className={`mt-0 mt-md-5 mt-lg-5 ${styles["Sku"]} `}>
                     <p className={`${styles["SKU"]}`}> SKU: N/A </p>
                     <p className={`${styles["SKU"]}`}>
                        {" "}
                        Categories: {product.category}
                     </p>
                     <p className={`${styles["SKU"]}`}>
                        {" "}
                        Tag: {product.category}
                     </p>
                     <p className={`${styles["SKU"]}`}>
                        {" "}
                        Modern Product ID: {product.id}
                     </p>
                  </div>
                  <div className="mt-5 d-flex gap-5">
                     <div className="d-flex gap-2 align-items-center">
                        <img src={delivery} alt="/" />{" "}
                        <p className={`${styles["spantext"]}`}>
                           Delivery and return
                        </p>
                     </div>
                     <div className="d-flex gap-2 align-items-center">
                        <img src={size} alt="/" />{" "}
                        <p className={`${styles["spantext"]}`}>Size Guide</p>
                     </div>
                     <div className="d-flex gap-2 align-items-center">
                        <img src={location} alt="/" />{" "}
                        <p className={`${styles["spantext"]}`}>
                           Store availability
                        </p>
                     </div>
                  </div>
                  <div className="d-flex gap-3 mt-5 ">
                     <img src={fb} alt="/" />

                     <img src={twitter} alt="/" />

                     <img src={youtube} alt="/" />
                  </div>
                  <ul className="nav mt-5 mb-md-5d-flex justify-content-between">
                     <li className="nav-item col-lg-2 col-md-1  text-align-cente r mb-3 me-3">
                        <a
                           className={`nav-link active ${styles["title-desc"]}`}
                           href=" "
                        >
                           Description
                        </a>
                     </li>
                     <li className="nav-item col-lg-2 col-md-1  text-align-cente r mb-3 me-3">
                        <a
                           className={`nav-link active ${styles["title-desc"]}`}
                           href=" "
                        >
                           Review
                        </a>
                     </li>
                     <li className="nav-item col-lg-2 col-md-1 text-align-center  mb-3 me-3">
                        <a
                           className={`nav-link active ${styles["title-desc"]}`}
                           href=" "
                        >
                           Additional Information
                        </a>
                     </li>
                     <li className="nav-item col-lg-2 col-md-1 text-align-center  mb-3 me-3">
                        <a
                           className={`nav-link active ${styles["title-desc"]}`}
                           href=" "
                        >
                           About Brand
                        </a>
                     </li>
                     <li className="nav-item col-lg-2 col-md-1 text-align-center pb-3 mb-3 me-3">
                        <a
                           className={`nav-link active ${styles["title-desc"]} ${styles["shipping"]}`}
                           href=" "
                        >
                           Shipping & Delivery
                        </a>
                     </li>
                  </ul>
                  <div className="row d-flex flex-sm-column mb-md-5 flex-md-row flex-lg-row">
                     <section
                        className={`${styles.content_left} d-flex align-items-center col-12 col-sm-12 col-md-6 col-lg-6 mb-5 mb-md-0 mb-lg-0 pe-0`}
                     >
                        <img className="w-100" src={load} alt="sofa" />
                     </section>
                     <div
                        className={`${styles.content_right} col-12 col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center`}
                     >
                        <div>{product.description}</div>
                     </div>
                  </div>
                  <div
                     className={`${styles["cont-card-down"]} container mb-5 mt-5`}
                  >
                     <div className="">
                        <h1 className="text-center">Related Products</h1>
                        <Slider {...settings}>
                           {relaited.map((related) => (
                              <div key={relaited.id} onClick={handlerClickId}>
                                 <Link
                                    to={`/product/detail/${related.id}`}
                                    className="text-decoration-none"
                                 >
                                    <div>
                                       <img
                                          className={` ${styles["image"]}`}
                                          src={related.image}
                                          alt="Card"
                                       />
                                       <p className="px-3 text-black text-decoration-none">
                                          {related.name}
                                       </p>
                                       <p className="px-3 text-black text-decoration-none">
                                          IDR.{costing(related.price)}
                                       </p>
                                    </div>
                                 </Link>
                              </div>
                           ))}
                        </Slider>
                     </div>
                  </div>
               </section>
            </div>
         </div>

         <Footer />
      </div>
   );
}

export default ProductDetail;
