import React from "react";
import { useState, useEffect } from "react";
import styles from "../styles/Product.module.css";
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";
import leftproduct from "../assets/product/left-product.png";
// import mainproduct from '../assets/product/main-product.png'
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Card from "../component/productcard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import productActions from "../redux/actions/product";
// import categoriesActions from "../redux/action/categories";
import { createSearchParams, useSearchParams } from "react-router-dom";

// const useQuery = () => {
//   const { search } = useLocation();
//   return useMemo(() => new URLSearchParams(search), [search]);
// };

function Product() {
  const [linkActive, setLinkActive] = useState("one");
  const [linkPage, setPageActive] = useState("one");
  const dispacth = useDispatch();
  const product = useSelector((state) => state.products.products);
  // const totalData = useSelector((state) => state.products.meta.totalData);
  // const isLoading = useSelector((state) => state.products.isLoading);
  // const isRejected = useSelector((state) => state.products.isError);
  // const categories = useSelector((state) => state.categories.categories);

  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  // const getQuery = useQuery();

  // console.log(product);

  useEffect(() => {
    const urlSearchParams = createSearchParams({ ...query });
    setSearchParams(urlSearchParams);
    dispacth(productActions.getProductThunk(query));
  }, [dispacth, query, searchParams , setSearchParams]);

  return (
    <>
      <Navbar />
      <main className="container-fluid p-0">
        <div className={styles["title-container"]}>
          <div className={styles.title}>
            <h1>Let's Shopping</h1>
            <p>Find and buy the one you like</p>
          </div>
        </div>

        <section className={styles["main-product"]}>
          <div className={styles["box-product"]}>
            <div className={styles["detail-left"]}>
              <div className={styles["category-list"]}>
                <div className={styles.category}>
                  <h3>Categories</h3>
                  <ul>
                    <li>Accessories</li>
                    <li>Brands</li>
                    <li>Clothing</li>
                    <li>Fashion</li>
                    <li>Furniture</li>
                    <li>Men</li>
                    <li>Woman</li>
                    <li>Shoes</li>
                    <li>Wallets</li>
                  </ul>
                </div>

                <div className={styles["category-number"]}>
                  <h3 className={styles.stock}>&nbsp;</h3>
                  <ul>
                    <li>5</li>
                    <li>15</li>
                    <li>3</li>
                    <li>8</li>
                    <li>9</li>
                    <li>6</li>
                    <li>8</li>
                    <li>10</li>
                    <li>11</li>
                  </ul>
                </div>
              </div>

              <div className={styles["price-slider"]}>
                <h3>Price</h3>
                <div className={styles["slider-box"]}>
                  <label for="customRange1" class="form-label">
                    Price $39 - $159
                  </label>
                  <input type="range" class="form-range" id="customRange1" />
                </div>
                <div className={styles["filter-btn"]}>
                  <button>FILTER</button>
                </div>
              </div>

              <div className={styles["brand-list"]}>
                <div className={styles["brand-box"]}>
                  <h3>Brands</h3>
                  <div className={styles["brand-checkbox"]}>
                    <div className={styles["label-brands"]}>
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        onClick={() => {
                          setQuery({
                            ...query,
                            brand: "IKEA",
                          });
                        }}
                      />
                      <label htmlFor="">IKEA</label>
                    </div>
                    <div className={styles["label-brands"]}>
                      <input type="checkbox" name="" id="" />
                      <label htmlFor="">Mr Royal</label>
                    </div>
                    <div className={styles["label-brands"]}>
                      <input type="checkbox" name="" id="" />
                      <label htmlFor="">Sweet House</label>
                    </div>
                    <div className={styles["label-brands"]}>
                      <input type="checkbox" name="" id="" />
                      <label htmlFor="">North Oxford</label>
                    </div>
                    <div className={styles["label-brands"]}>
                      <input type="checkbox" name="" id="" />
                      <label htmlFor="">Mr Poppins</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.color}>
                <div className={styles["color-box"]}>
                  <h3>Colors</h3>
                  <div className={styles["color-option"]}>
                    <input
                      onClick={() => {
                        setQuery({
                          ...query,
                          color: "#A17F25",
                        });
                      }}
                      className={styles.one}
                      type="radio"
                      name="color"
                    />
                    <input
                      onClick={() => {
                        setQuery({
                          ...query,
                          color: "#6B8FBE",
                        });
                      }}
                      className={styles.two}
                      type="radio"
                      name="color"
                    />
                    <input
                      onClick={() => {
                        setQuery({
                          ...query,
                          color: "#49453D",
                        });
                      }}
                      className={styles.three}
                      type="radio"
                      name="color"
                    />
                    <input
                      onClick={() => {
                        setQuery({
                          ...query,
                          color: "#504E86",
                        });
                      }}
                      className={styles.four}
                      type="radio"
                      name="color"
                    />
                    <input
                      onClick={() => {
                        setQuery({
                          ...query,
                          color: "#4E8651",
                        });
                      }}
                      className={styles.five}
                      type="radio"
                      name="color"
                    />
                    <input
                      onClick={() => {
                        setQuery({
                          ...query,
                          color: "#EEA437",
                        });
                      }}
                      className={styles.six}
                      type="radio"
                      name="color"
                    />
                  </div>
                </div>
              </div>

              <div className={styles["size-picker"]}>
                <div className={styles["size-box"]}>
                  <h3>Sizes</h3>
                  <div className={styles["size-btn"]}>
                    <div className={styles["size-pagination"]}>
                      <div
                        onClick={() => {
                          setQuery({
                            ...query,
                            size: "S",
                          });
                          setLinkActive("one");
                        }}
                        style={{ "background-color": linkActive === "one" ? "#000000" : "" }}
                        className={styles["size-box"]}
                      >
                        <h4>S</h4>
                      </div>
                      <div
                        onClick={() => {
                          setQuery({
                            ...query,
                            size: "M",
                          });
                          setLinkActive("two");
                        }}
                        style={{ "background-color": linkActive === "two" ? "#000000" : "" }}
                        className={styles["size-box"]}
                      >
                        <h4>M</h4>
                      </div>
                      <div
                        onClick={() => {
                          setQuery({
                            ...query,
                            size: "L",
                          });
                          setLinkActive("three");
                        }}
                        style={{ "background-color": linkActive === "three" ? "#000000" : "" }}
                        className={styles["size-box"]}
                      >
                        <h4>L</h4>
                      </div>
                      <div
                        onClick={() => {
                          setQuery({
                            ...query,
                            size: "XL",
                          });
                          setLinkActive("four");
                        }}
                        style={{ "background-color": linkActive === "four" ? "#000000" : "" }}
                        className={styles["size-box"]}
                      >
                        <h4>XL</h4>
                      </div>
                      <div
                        onClick={() => {
                          setQuery({
                            ...query,
                            size: "XXL",
                          });
                          setLinkActive("five");
                        }}
                        style={{ "background-color": linkActive === "five" ? "#000000" : "" }}
                        className={styles["size-box-xxl"]}
                      >
                        <h4>XXL</h4>
                      </div>
                    </div>
                    <div className={styles["box-pull"]}>
                      <div
                        onClick={() => {
                          setQuery({
                            query,
                            size: "Pull Size",
                          });
                          setLinkActive("six");
                        }}
                        style={{ "background-color": linkActive === "six" ? "#000000" : "" }}
                        className={styles["size-box-pull"]}
                      >
                        <h4>Pull Size</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["end-left"]}>
                <img src={leftproduct} alt="" />
                <div className={styles["shop-btn"]}>
                  <button>SHOP NOW</button>
                </div>
              </div>
            </div>

            <div className={styles["detail-right"]}>
              <div className="sort-page">
                <DropdownButton id="dropdown-basic-button" title="Sort by" className={styles.dropdown}>
                  <Dropdown.Item
                    onClick={() => {
                      setQuery({
                        ...query,
                        price: "cheap",
                      });
                    }}
                  >
                    Cheapest
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      setQuery({
                        ...query,
                        price: "expensive",
                      });
                    }}
                  >
                    Expensive
                  </Dropdown.Item>
                </DropdownButton>
              </div>
              <div className={styles["product-box-main"]}>
                <div className={styles["product-item"]}>
                  {product?.map((e) => (
                    <Card productTitle={e.name} price={e.price} image={e.image} key={e.id} id={e.id} />
                  ))}
                </div>
              </div>

              <section>
                <div className={styles.pagination}>
                  <div
                    onClick={() => {
                      setPageActive("one");
                    }}
                    style={{ "background-color": linkPage === "one" ? "#000000" : "" }}
                    className={styles["page-box"]}
                  >
                    <h4>01</h4>
                  </div>
                  <div
                    onClick={() => {
                      setPageActive("two");
                    }}
                    style={{ "background-color": linkPage === "two" ? "#000000" : "" }}
                    className={styles["page-box"]}
                  >
                    <h4>02</h4>
                  </div>
                  <div
                    onClick={() => {
                      setPageActive("three");
                    }}
                    style={{ "background-color": linkPage === "three" ? "#000000" : "" }}
                    className={styles["page-box"]}
                  >
                    <h4>03</h4>
                  </div>
                  <div
                    onClick={() => {
                      setPageActive("four");
                    }}
                    style={{ "background-color": linkPage === "four" ? "#000000" : "" }}
                    className={styles["page-box"]}
                  >
                    <h4>04</h4>
                  </div>
                  <div
                    onClick={() => {
                      setPageActive("five");
                    }}
                    style={{ "background-color": linkPage === "five" ? "#000000" : "" }}
                    className={styles["page-box"]}
                  >
                    <h4>05</h4>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Product;
