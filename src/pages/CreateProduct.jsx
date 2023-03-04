/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styles from "../styles/CreateProduct.module.css";
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";
import NavDropdown from "react-bootstrap/NavDropdown";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import addPromo from "../assets/sellerProduct/add_image.png";
import sofa1 from "../assets/productDetail/Sofa2.png";
import NavsSeller from "../component/navigationSeller/navSeller/NavsSeller";
// import { useNavigate } from "react-router-dom";

function CreateProduct() {
  const navigate = useNavigate();
  const [shwCtg, setshwCtg] = useState(false);
  const [shwBrand, setshwBrand] = useState(false);
  const [shwSize, setshwSize] = useState(false);
  const [errMsg, seterrMsg] = useState();
  const [displayCtg, setdisplayCtg] = useState("Choose Category");
  const [displayBrand, setdisplayBrand] = useState("Choose Brand");
  const [displaySize, setdisplaySize] = useState("Choose Size");
  const [isLoading, setLoading] = useState(false);
  // LIST DATA BUAT DI SEND ///
  const [name, setName] = useState();
  const [desc, setdesc] = useState();
  const [price, setprice] = useState();
  const [stock, setstock] = useState();
  const [color, setColor] = useState();
  const [ctgSelect, setctgSelect] = useState();
  const [brandSelect, setbrandSelect] = useState();
  const [sizeSelect, setsizeSelect] = useState();
  const [images, setImages] = useState([]);
  // END//

  const sendHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    seterrMsg();
    if (
      !name ||
      !desc ||
      !price ||
      !stock ||
      !color ||
      !ctgSelect ||
      !brandSelect ||
      !sizeSelect ||
      images.length === 0
    )
      return seterrMsg("* All data must be filled");
    let formData = new FormData();
    images.forEach((file) => {
      formData.append("image", file);
    });
    formData.append("name", name);
    formData.append("price", price);
    formData.append("category_id", ctgSelect);
    formData.append("brand_id", brandSelect);
    formData.append("stock", stock);
    formData.append("size_id", sizeSelect);
    formData.append("color_id", color);
    formData.append("desc", desc);
    let link = `${process.env.REACT_APP_BACKEND_HOST}/product/create`;
    const userInfo = JSON.parse(localStorage["userInfo"] || "{}");
    axios
      .post(link, formData, {
        headers: {
          "x-access-token": userInfo.token,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((result) => {
        setLoading(false);
        toast.success(`Congratss!! Product Success to Selling`, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate(`/product/detail/${result.data.data.id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const image = [];
  const imageHandler = (e) => {
    if (e.target.files && e.target.files[0]) {
      const addImage = images.concat(e.target.files[0]);
      setImages(addImage);
    }
  };
  const cancelHandler = (target) => {
    const newImage = images.filter((data) => {
      return data !== target;
    });
    setImages(newImage);
  };
  return (
    <div>
      <Navbar />
      <div className={`container-fluid p-5 ${styles["cont-fluid"]}`}>
        <div className="container justify-content-center">
          <p className={`text-center  ${styles["profile"]}`}>Selling Product</p>
          <p className={`text-center fs-6 ${styles["text-profile"]}`}>
            See your notifications for the latest updates
          </p>
        </div>
      </div>
      <div className=" container justify-content-evenly d-flex  my-5">
        <p className="nav-item">
          <Link
            className={` text-decoration-none ${styles["no-underline"]}`}
            to={"/profile"}
          >
            <p className={`nav-link ${styles["color-text"]}`}>Profile</p>
          </Link>
        </p>

        <div
          className={`d-flex gap-2 align-items-center ${styles["cursor"]} ${styles["color"]}`}
        >
          <Link
            className={` text-decoration-none ${styles["no-underline"]} `}
            to={"/admin/my-product"}
          >
            <p className={`${styles["cursor"]} ${styles["color-text"]}`}>
              {" "}
              My Product{" "}
            </p>
          </Link>
          <NavDropdown
            className={` ${styles["menu"]} ${styles["color-text"]}`}
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item>All</NavDropdown.Item>
            <NavDropdown.Item>Archive</NavDropdown.Item>
            <NavDropdown.Item>Sold Out</NavDropdown.Item>
          </NavDropdown>
        </div>
        <p className="nav-item">
          <Link
            className={` text-decoration-none ${styles["no-underline"]} `}
            to={"/admin/create-product"}
          >
            <p className={`nav-link ${styles["color-text"]}`}>
              Selling Product
            </p>
          </Link>
        </p>
        <div
          className={`d-flex gap-2 align-items-center ${styles["cursor"]} ${styles["color"]}`}
        >
          <Link
            className={` text-decoration-none ${styles["no-underline"]} `}
            to={"/admin/my-order"}
          >
            <p className={`${styles["cursor"]} ${styles["color-text"]}`}>
              {" "}
              My Order{" "}
            </p>
          </Link>
          <NavDropdown
            className={` ${styles["menu"]} ${styles["color-text"]}`}
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item>All</NavDropdown.Item>
            <NavDropdown.Item>Archive</NavDropdown.Item>
            <NavDropdown.Item>Sold Out</NavDropdown.Item>
          </NavDropdown>
        </div>
      </div>
      {isLoading && (
        <div className={styles["loader-container"]}>
          <div className={styles.spinner}></div>
        </div>
      )}
      <form className={`container ${styles["cont-form"]} `}>
        <div className="form-group">
          <p className={`${styles["inventory"]}`}>Inventory</p>
          <input
            type="text"
            className="form-control mb-5"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Name of goods *"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Description Product *"
            rows="3"
            onChange={(e) => {
              setdesc(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="form-group mt-5">
          <p className={`${styles["inventory"]} ${styles["item-detail"]}`}>
            Item Details
          </p>
          <input
            type="text"
            className="form-control mb-5"
            aria-describedby="emailHelp"
            placeholder="Unit price *"
            onChange={(e) => {
              setprice(e.target.value);
            }}
          />
          <div className="position-relative">
            <input
              type="text"
              className="form-control mb-5"
              aria-describedby="emailHelp"
              placeholder="Unit Stock *"
              onChange={(e) => {
                setstock(e.target.value);
              }}
            />
            <p className={`position-absolute ${styles["pcs"]}`}>/pcs</p>
          </div>
          <div>
            <p className={`${styles["inventory"]} ${styles["item-detail"]}`}>
              Select Category
            </p>
            <div
              className={styles["arrow"]}
              onClick={() => {
                setshwCtg(!shwCtg);
              }}
            >
              <div
                className={`${styles["forDwn"]} ${
                  displayCtg === "Choose Category"
                    ? styles["selected"]
                    : undefined
                }`}
              >
                <p>{displayCtg}</p>
                <div className="d-flex">
                  <p>&#9586;</p>
                  <p>&#9585;</p>
                </div>
              </div>
            </div>
          </div>
          {shwCtg && (
            <div className={styles["drop-down"]}>
              <p
                onClick={() => {
                  setctgSelect("1");
                  setdisplayCtg("Accesories");
                  setshwCtg(!shwCtg);
                }}
              >
                1. Accessories
              </p>
              <p
                onClick={() => {
                  setctgSelect("2");
                  setdisplayCtg("Brands");
                  setshwCtg(!shwCtg);
                }}
              >
                2. Brands
              </p>
              <p
                onClick={() => {
                  setctgSelect("3");
                  setdisplayCtg("Clothing");
                  setshwCtg(!shwCtg);
                }}
              >
                3. Clothing
              </p>
              <p
                onClick={() => {
                  setctgSelect("4");
                  setdisplayCtg("Fashion");
                  setshwCtg(!shwCtg);
                }}
              >
                4. Fashion
              </p>
              <p
                onClick={() => {
                  setctgSelect("5");
                  setdisplayCtg("Furniture");
                  setshwCtg(!shwCtg);
                }}
              >
                5. Furniture
              </p>
              <p
                onClick={() => {
                  setctgSelect("6");
                  setdisplayCtg("Men");
                  setshwCtg(!shwCtg);
                }}
              >
                6. Men
              </p>
              <p
                onClick={() => {
                  setctgSelect("7");
                  setdisplayCtg("Women");
                  setshwCtg(!shwCtg);
                }}
              >
                7. Women
              </p>
              <p
                onClick={() => {
                  setctgSelect("8");
                  setdisplayCtg("Shoes");
                  setshwCtg(!shwCtg);
                }}
              >
                8. Shoes
              </p>
              <p
                onClick={() => {
                  setctgSelect("9");
                  setdisplayCtg("Wallets");
                  setshwCtg(!shwCtg);
                }}
              >
                9. Wallets
              </p>
            </div>
          )}
          <div>
            <p className={`${styles["inventory"]} ${styles["item-detail"]}`}>
              Select Brand
            </p>
            <div
              className={styles["arrow"]}
              onClick={() => {
                setshwBrand(!shwBrand);
              }}
            >
              <div
                className={`${styles["forDwn"]} ${
                  displayBrand === "Choose Brand"
                    ? styles["selected"]
                    : undefined
                }`}
              >
                <p>{displayBrand}</p>
                <div className="d-flex">
                  <p>&#9586;</p>
                  <p>&#9585;</p>
                </div>
              </div>
            </div>
          </div>
          {shwBrand && (
            <div className={styles["drop-down"]}>
              <p
                onClick={() => {
                  setbrandSelect("1");
                  setdisplayBrand("IKEA");
                  setshwBrand(!shwBrand);
                }}
              >
                1. IKEA
              </p>
              <p
                onClick={() => {
                  setbrandSelect("2");
                  setdisplayBrand("Mr Royal");
                  setshwBrand(!shwBrand);
                }}
              >
                2. Mr Royal
              </p>
              <p
                onClick={() => {
                  setbrandSelect("3");
                  setdisplayBrand("Sweet House");
                  setshwBrand(!shwBrand);
                }}
              >
                3. Sweet House
              </p>
              <p
                onClick={() => {
                  setbrandSelect("4");
                  setdisplayBrand("North Oxford");
                  setshwBrand(!shwBrand);
                }}
              >
                4. North Oxford
              </p>
              <p
                onClick={() => {
                  setbrandSelect("5");
                  setdisplayBrand("Mr.Poppin 1929");
                  setshwBrand(!shwBrand);
                }}
              >
                5. Mr.Poppin 1929
              </p>
            </div>
          )}
          <div>
            <p className={`${styles["inventory"]} ${styles["item-detail"]}`}>
              Select Size
            </p>
            <div
              className={styles["arrow"]}
              onClick={() => {
                setshwSize(!shwSize);
              }}
            >
              <div
                className={`${styles["forDwn"]} ${
                  displaySize === "Choose Size" ? styles["selected"] : undefined
                }`}
              >
                <p>{displaySize}</p>
                <div className="d-flex">
                  <p>&#9586;</p>
                  <p>&#9585;</p>
                </div>
              </div>
            </div>
          </div>
          {shwSize && (
            <div className={styles["drop-down"]}>
              <p
                onClick={() => {
                  setsizeSelect("1");
                  setdisplaySize("S");
                  setshwSize(!shwSize);
                }}
              >
                1. S
              </p>
              <p
                onClick={() => {
                  setsizeSelect("2");
                  setdisplaySize("M");
                  setshwSize(!shwSize);
                }}
              >
                2. M
              </p>
              <p
                onClick={() => {
                  setsizeSelect("3");
                  setdisplaySize("L");
                  setshwSize(!shwSize);
                }}
              >
                3. L
              </p>
              <p
                onClick={() => {
                  setsizeSelect("4");
                  setdisplaySize("XL");
                  setshwSize(!shwSize);
                }}
              >
                4. XL
              </p>
              <p
                onClick={() => {
                  setsizeSelect("5");
                  setdisplaySize("XXL");
                  setshwSize(!shwSize);
                }}
              >
                5. XXL
              </p>
              <p
                onClick={() => {
                  setsizeSelect("6");
                  setdisplaySize("Pull Size");
                  setshwSize(!shwSize);
                }}
              >
                6. Pull Size
              </p>
            </div>
          )}
          <div className={styles.color}>
            <div className={styles["color-box"]}>
              <p className={`${styles["inventory"]} ${styles["item-detail"]}`}>
                Select Color
              </p>
              <div className={styles["color-option"]}>
                <input
                  className={styles.one}
                  type="radio"
                  name="color"
                  onChange={(e) => {
                    setColor("1");
                  }}
                />
                <input
                  className={styles.two}
                  type="radio"
                  name="color"
                  onChange={(e) => {
                    setColor("2");
                  }}
                />
                <input
                  className={styles.three}
                  type="radio"
                  name="color"
                  onChange={(e) => {
                    setColor("3");
                  }}
                />
                <input
                  className={styles.four}
                  type="radio"
                  name="color"
                  onChange={(e) => {
                    setColor("4");
                  }}
                />
                <input
                  className={styles.five}
                  type="radio"
                  name="color"
                  onChange={(e) => {
                    setColor("5");
                  }}
                />
                <input
                  className={styles.six}
                  type="radio"
                  name="color"
                  onChange={(e) => {
                    setColor("6");
                  }}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="d-flex row">
              <p className={`${styles["inventory"]} ${styles["item-detail"]}`}>
                {" "}
                Photo of Goods
              </p>
              <label className={`d-flex ${styles["imgCard"]}`}>
                {images.map((data) => {
                  return (
                    <div className={"position-relative"}>
                      <img
                        className={`${styles["image"]}`}
                        src={URL.createObjectURL(data)}
                        alt="/"
                      />
                      <div
                        className={`${styles["delete"]}`}
                        onClick={() => {
                          cancelHandler(data);
                        }}
                      >
                        <i class="bi bi-x-circle-fill"></i>
                      </div>
                    </div>
                  );
                })}
                {images.length > 4 ? undefined : (
                  <label htmlFor="images">
                    <img
                      className={`${styles["image"]} ${styles["addImage"]}`}
                      src={addPromo}
                      alt="/"
                    />
                  </label>
                )}
              </label>
              {images.length > 4 ? undefined : (
                <input
                  type="file"
                  id={"images"}
                  className="d-none"
                  onChange={imageHandler}
                />
              )}
            </div>
            {errMsg && <p className={"text-center text-danger"}>{errMsg}</p>}
            <button
              className={`${styles["btn"]} btn btn-dark`}
              onClick={sendHandler}
            >
              Sell Product
            </button>
          </div>
        </div>
      </form>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default CreateProduct;
