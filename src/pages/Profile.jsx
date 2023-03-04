import React, { useEffect } from "react";
import styles from "../styles/Profile.module.css";
import { useDispatch, useSelector } from "react-redux";
import authActions from "../redux/actions/auths";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import title from "../helper/title";
//component
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";
import NavDropdown from "react-bootstrap/NavDropdown";

// Import Image
import pencil from "../assets/profile/img_pencil.png";
// import { getProfile } from "../utils/fetchers";
import profileActions from "../redux/actions/profile";
// import Parker from "../assets/profile/parker.jpeg";
import axios from "axios";
// import bs icon
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Profile() {
  title("Profile");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showInput, setShowInput] = useState(true);
  const successToastMessage = () => {
    toast.success("Updating data success !", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClosePassword = () => setShowPassword(false);
  const handleShowPassword = () => setShowPassword(true);
  const userInfo = JSON.parse(localStorage["userInfo"] || "{}");
  const toLogout = () => navigate("/login");
  const logoutHandler = (e) => {
    e.preventDefault();
    toast.success("Logout Success !", {
      position: toast.POSITION.TOP_CENTER,
    });
    dispatch(authActions.logoutThunk(userInfo.token, toLogout));

    localStorage.removeItem("userInfo");
  };
  // get profile
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [display, setDisplay] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [datas, setDatas] = useState([]);
  const profiles = useSelector((state) => state.profile.profileUser);
  const data = useSelector((state) => state.profile.profileData);

  const [gender, setGender] = useState(profiles.gender);
  const [phone, setPhone] = useState(profiles.phone);
  const [username, setUsername] = useState(profiles.name);
  const [image, setImage] = useState(profiles.image);
  const [address, setAddress] = useState(profiles.address);
  const [storedesc, setStoredesc] = useState(profiles.store_desc);
  const [errMsg, setErrMsg] = useState(null);
  //  console.log(profiles);
  //  handle input image
  //  didmount
  useEffect(() => {
    // console.log(profiles);
    // console.log(userInfo.id);
    console.log(userInfo.token);
    dispatch(profileActions.profileThunk(userInfo.token));
    console.log("Data : ", datas);
    setDisplay(profiles.image);
    setImage(profiles.image);
    setEmail(data.email);
    setRole(userInfo.role);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //  patch
  const inputImage = (event) => {
    // console.log(image);
    if (event.target.files && event.target.files[0]) {
      setDisplay(URL.createObjectURL(event.target.files[0]));
      setImage(event.target.files[0]);
      console.log("check setimage:", image);
    }
  };

  const [password, setPassword] = useState(null);
  const [new_password, setNew_password] = useState(null);
  const [confirm_password, setConfirm_password] = useState(null);
  // edit password
  const sendRequestEditPwd = (event) => {
    const url = `${process.env.REACT_APP_BACKEND_HOST}/profile/change-password`;
    event.preventDefault();
    setErrMsg(null);
    if (!password && !new_password && !confirm_password) {
      return setErrMsg("All input must be filled");
    }
    if (!password && new_password && confirm_password) {
      return setErrMsg("Password must be filled");
    }
    if (password && !new_password && confirm_password) {
      return setErrMsg("New Password must be filled");
    }
    if (password && new_password && !confirm_password) {
      return setErrMsg("Confirm Password must be filled");
    }
    if (password && !new_password && !confirm_password) {
      return setErrMsg("New Password & Confirm Password must be filled");
    }
    if (password && password.length < 8) {
      return setErrMsg("Password at least in 8 character");
    }
    if (new_password && new_password.length < 8) {
      return setErrMsg("New_Password at least in 8 character");
    }
    if (new_password !== confirm_password) {
      return setErrMsg("Password doesn't match");
    }
    // kondisi jika password lebih dari 8 karakter
    axios
      .patch(
        url,
        { password, new_password },
        {
          headers: { "x-access-token": userInfo.token },
        }
      )
      .then((res) => {
        toast.success(res.data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
        handleClosePassword();
      })
      .catch((err) => {
        setErrMsg("Password is wrong");
      });
  };

  const SendRequest = async (e) => {
    try {
      e.preventDefault();
      let formData = new FormData();
      // let bodyFromDataUser = null;
      if (address) formData.append("address", address);
      if (storedesc) formData.append("store_desc", storedesc);
      // console.log("check imagedata:", image === profiles.image);
      // console.log("check image:", image);
      if (image !== display) formData.append("image", image);
      if (phone) formData.append("phone", phone);
      if (username) formData.append("name", username);
      if (gender) formData.append("gender", gender);
      for (var pair of formData.entries()) {
        console.log(pair[0] + " - " + pair[1]);
      }
      // console.log(formData);
      if (formData) {
        successToastMessage();
        await dispatch(
          profileActions.updateProfileThunk(formData, userInfo.token)
        );
        await dispatch(profileActions.profileThunk(userInfo.token));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [visible, setVisible] = useState(false);
  const [invisible, setInvisible] = useState(false);
  const [confirmPwd, setConfirmPwd] = useState(false);

  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    if (visible) setVisible(false);
    if (!visible) setVisible(true);
  };

  const togglePwd = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    if (invisible) setInvisible(false);
    if (!invisible) setInvisible(true);
  };
  const togglePwdConfirm = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    if (confirmPwd) setConfirmPwd(false);
    if (!confirmPwd) setConfirmPwd(true);
  };

  return (
    <>
      <Navbar />
      <div className={`container-fluid p-5 ${styles["cont-fluid"]}`}>
        <div className="container justify-content-center">
          <p className={`text-center  ${styles["profile"]}`}>Profile</p>
          <p className={`text-center fs-6 ${styles["text-profile"]}`}>
            See your notifications for the latest updates
          </p>
        </div>
      </div>
      {/* navbar admin */}
      {role !== "seller" ? null : (
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
              to={"/admin/my-product"}
              className={` text-decoration-none ${styles["no-underline"]}`}
            >
              <p className={`${styles["cursor"]} ${styles["color-text"]}`}>
                My Product
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
              to={"/admin/my-order"}
              className={` text-decoration-none ${styles["no-underline"]} `}
            >
              <p className={`${styles["cursor"]} ${styles["color-text"]}`}>
                My Order
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
      )}

      {/* navbar admin */}

      <div className={`container d-flex mt-5 ${styles["cont-profile"]}`}>
        <span>
          <label htmlFor="images">
            <img
              className={`${styles["profile-picture"]} `}
              src={display}
              alt="/"
            />
          </label>
          {showInput ? null : (
            <input
              type="file"
              id={"images"}
              className="d-none"
              onChange={inputImage}
            />
          )}
        </span>

        <span className={`fs-3 ms-3 mt-2 ${styles["name"]}`}>
          {/* kondisi ketika click muncul jadi input */}
          {showInput ? (
            <p>{username}</p>
          ) : (
            <input
              className={styles.username}
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                console.log(username);
              }}
            />
          )}
          <p className="fs-6">
            as <span className="fw-bold">{role}</span>
          </p>
        </span>
        {/* <img
               src={pencil}
               alt="pencil"
               className={` ${styles["svg"]} ${styles["cursor"]}`}
            /> */}
      </div>
      <div className="container mt-5">
        <form className={`form-floating `}>
          <input
            type="text"
            className={`form-control my-auto ${styles["floating-form"]}`}
            id="floatingInputValue"
            placeholder="male / female"
            value={gender}
            minLength={4}
            maxLength={6}
            disabled={showInput ? true : false}
            onChange={(e) => {
              setGender(e.target.value.toLowerCase());
              console.log(e.target.value);
            }}
          />

          <label htmlFor="floatingInputValue">Gender</label>
          <div className={`d-flex justify-content-end ${styles["cont-edit"]}`}>
            <img
              src={pencil}
              alt="pencil"
              className={` ${styles["pencil"]} ${styles["cursor"]}`}
              onClick={() => {
                showInput ? setShowInput(false) : setShowInput(true);
                console.log("click");
              }}
            />
          </div>
        </form>
        <section className="form-floating">
          <input
            type="email"
            className={`form-control my-auto ${styles["floating-form"]} ${styles["floating-form-2"]}`}
            id="floatingInputValue"
            placeholder="name@example.com"
            defaultValue={email}
            disabled={showInput ? true : true}
            // onChange={(e) => {
            //    setEmail(e.target.value);
            //    console.log(e.target.value);
            // }}
          />
          <label htmlFor="floatingInputValue">Your Email</label>
        </section>

        <section className="form-floating">
          <input
            type="tel"
            className={`form-control my-auto ${styles["floating-form"]} ${styles["floating-form-3"]}`}
            id="floatingInputValue"
            placeholder="Phone Number "
            value={phone}
            maxLength={13}
            disabled={showInput ? true : false}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <label htmlFor="floatingInputValue">Phone</label>
        </section>

        {role !== "seller" ? (
          <section className="form-floating">
            <input
              type="text"
              className={`form-control my-auto ${styles["floating-form"]} ${styles["floating-form-3"]}`}
              id="floatingInputValue"
              placeholder="Address "
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              disabled={showInput ? true : false}
            />
            <label htmlFor="floatingInputValue">address</label>
          </section>
        ) : (
          <section className="form-floating">
            <input
              type="text"
              className={`form-control my-auto ${styles["floating-form"]} ${styles["floating-form-3"]}`}
              id="floatingInputValue"
              placeholder="Address "
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              disabled={showInput ? true : false}
            />
            <label htmlFor="floatingInputValue">Store Name</label>
          </section>
        )}

        <section className="form-floating">
          <input
            type="text"
            className={`form-control my-auto ${styles["floating-form"]} ${styles["floating-form-3"]}`}
            id="floatingInputValue"
            placeholder="Store Desc "
            value={storedesc}
            onChange={(e) => {
              setStoredesc(e.target.value);
            }}
            disabled={showInput ? true : false}
          />
          <label htmlFor="floatingInputValue">Store Description</label>
        </section>
        <div
          className={`${styles.buttons} d-flex flex-md-row flex-column justify-content-between align-items-center`}
        >
          <section className="d-flex flex-md-row flex-column w-100">
            <button
              type="submit"
              className={`btn btn-danger my-3 fa-xs ${styles["logout"]} me-4`}
              onClick={(e) => {
                e.preventDefault();
                handleShow();
              }}
            >
              <div className="d-flex justify-content-center">
                <i className="bi bi-box-arrow-right fa-2x"></i>
                <p className="my-auto ms-3 fs-5">Logout</p>
              </div>
            </button>

            {/* edit password dengan modal form data post to api*/}
            <button
              type="submit"
              className={`btn btn-warning my-3 fa-xs ${styles["logout"]} `}
              onClick={(e) => {
                e.preventDefault();
                handleShowPassword();
              }}
            >
              <div className="d-flex justify-content-center">
                <i className="bi bi-credit-card-2-front fa-2x"></i>
                <p className="my-auto ms-3 fs-5">Edit Password</p>
              </div>
            </button>
          </section>
          {/* button saved data buat kondisi jika edit pada form diklik kan muncul button */}
          {showInput ? null : (
            <button
              onClick={SendRequest}
              type="submit"
              className={`btn btn-success my-3 fa-xs ${styles["logout"]} d-flex justify-content-center align-items-center`}
            >
              <div className="d-flex justify-content-center">
                <i className="bi bi-person-check fa-2x"></i>
                <p className="my-auto ms-3 fs-5">Save</p>
              </div>
            </button>
          )}
        </div>
      </div>
      <Footer />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Rima Furniture</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to logout?</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={logoutHandler}>
            Yes
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* edit password */}
      <Modal show={showPassword} onHide={handleClosePassword}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="w-100">
            <span>
              <label htmlFor="old_password">Password</label>
              <br />
              <div className={styles["icon-eye"]}>
                {visible ? (
                  <i className="fa-regular fa-eye" onClick={togglePassword}></i>
                ) : (
                  <i
                    className="fa fa-regular fa-eye-slash"
                    onClick={togglePassword}
                  ></i>
                )}
              </div>
              <input
                id={"old_password"}
                type={visible ? "text" : "password"}
                className={`${styles.input__password} w-100 ps-2 mb-3`}
                name="password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </span>
            <br />
            <span>
              <label htmlFor="newPassowrd">New Password</label>
              <br />
              <div className={styles["icon-eye-invisible"]}>
                {invisible ? (
                  <i className="fa-regular fa-eye" onClick={togglePwd}></i>
                ) : (
                  <i
                    className="fa fa-regular fa-eye-slash"
                    onClick={togglePwd}
                  ></i>
                )}
              </div>
              <input
                id="newPassowrd"
                type={invisible ? "text" : "password"}
                className={`${styles.input__password} w-100 ps-2 `}
                name="old_password"
                onChange={(event) => {
                  setNew_password(event.target.value);
                }}
              />
            </span>
            <span>
              <label htmlFor="newPassowrd">Confirm Password</label>
              <br />
              <div className={styles["icon-eye-invisible_confirm"]}>
                {confirmPwd ? (
                  <i
                    className="fa-regular fa-eye"
                    onClick={togglePwdConfirm}
                  ></i>
                ) : (
                  <i
                    className="fa fa-regular fa-eye-slash"
                    onClick={togglePwdConfirm}
                  ></i>
                )}
              </div>
              <input
                id="newPassowrd"
                type={confirmPwd ? "text" : "password"}
                className={`${styles.input__password} w-100 ps-2 `}
                name="confirm_password"
                onChange={(event) => {
                  setConfirm_password(event.target.value);
                }}
              />
            </span>
          </div>
        </Modal.Body>
        {errMsg && <p className="text-center text-danger">{errMsg}</p>}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosePassword}>
            Close
          </Button>
          <Button variant="success " onClick={sendRequestEditPwd}>
            Yes 😊
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </>
  );
}

export default Profile;
