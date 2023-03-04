import React, { useState } from "react";
import Header from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";
import styles from "../styles/Register.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import registerActions from "../redux/actions/register";
import authActions from "../redux/actions/auths";
import Axios from "axios";

function Regist() {
   const navigate = useNavigate();
   const dispacth = useDispatch();
   const [body, setBody] = useState({});
   const [selected, setSelected] = useState("register");

   const [register, setIsRegister] = useState(true);
   const [verify, setIsVerify] = useState(false);
   const [username, setIsUsername] = useState(false);
   const [loading, setIsLoading] = useState(false);
   const [errMsg, setErrMsg] = useState();
   const [visible, setVisible] = useState(false);

   const togglePassword = () => {
      // When the handler is invoked
      // inverse the boolean state of passwordShown
      setVisible(!visible);
   };

   const changeHandler = (e) =>
      setBody({ ...body, [e.target.name]: e.target.value });
   console.log(body);
   

   const toLogin = () => navigate("/login");
   const toHome = () => navigate("/");

   const sendVerif = async (e) => {
      try {
         e.preventDefault();
         const send = {
            emailOrusername: body.email,
            password: body.password,
         };
         await dispacth(registerActions.registerThunk(body));
         toast.success(`Congrats! ${body.username} register success`, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
         });
         await dispacth(authActions.loginThunk(send, toHome))
         navigate("/");
      } catch (error) {}
   };
   const sendVerifPin = (e) => {
      e.preventDefault();
      setErrMsg(null);
      if (body.code !== body.pin) return setErrMsg("* Pin Code Doesn't Match*");
      setIsVerify(false);
      setIsUsername(true);
      //  dispacth(registerActions.registerThunk(sendBody, toLogin));
   };

   const submitHandler = (e) => {
      e.preventDefault();
      setErrMsg(null);
      if (!body.email || !body.password || !body.role)
         return setErrMsg("* Alldata Must Be Filled *");
      if (body.password.length < 8)
         return setErrMsg("* Password at least in 8 character *");
         console.log(body.role)
      //  return toast.error("All input must be fulfilled", {
      //    position: "top-center",
      //    autoClose: 2000,
      //    hideProgressBar: false,
      //    closeOnClick: true,
      //    pauseOnHover: true,
      //    draggable: true,
      //    progress: undefined,
      //    theme: "light",
      //  });
      const sendBody = {
         email: body.email,
      };
      setIsLoading(true);
      Axios.post(
         `${process.env.REACT_APP_BACKEND_HOST}/auth/register`,
         sendBody
         )
         .then((result) => {
            setBody({ ...body, pin: result.data.data.code });
            setIsLoading(false);
            setIsRegister(false);
            setIsVerify(true);
         })
         .catch((err) => {
            setIsLoading(false);
            setErrMsg("* Email Already Exists *");
         });
   };

   const showPage = () => {
      if (loading) {
         return (
            <div className={styles["loader-container"]}>
               <div className={styles.spinner}></div>
            </div>
         );
      }

      if (register && !verify && !username) {
         return (
            <div className={`row ${styles["form-container"]}`}>
               <div className="col-lg-3 offset-lg-2">
                  <div className={styles["account"]}>
                     <div className={styles["login-account"]}>
                        <h1 onClick={toLogin}>Login Account</h1>
                     </div>
                     <div className={styles["regist-account"]}>
                        <h1
                           onClick={() => {
                              setSelected("register");
                           }}
                           className={
                              selected === "register" && `${styles["selected"]}`
                           }
                        >
                           Register Account
                        </h1>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6 offset-lg-1 col-12">
                  <div className={styles["form"]}>
                     <div className={styles["title-form"]}>
                        <h1>Create Account</h1>
                     </div>
                     <div
                        className={`${styles["form-login"]} ${styles.form__bar}`}
                     >
                        <form>
                           <input
                              type="text"
                              name="email"
                              placeholder="Email address*"
                              onChange={changeHandler}
                              className={styles.input__}
                           />
                           <input
                              type={visible ? "text" : "password"}
                              name="password"
                              placeholder="Password *"
                              onChange={changeHandler}
                              className={styles.input__}
                           />
                           <span className={styles["icon-eye"]}>
                              {visible ? (
                                 <i
                                    className="fa-regular fa-eye"
                                    onClick={togglePassword}
                                 ></i>
                              ) : (
                                 <i
                                    className="fa fa-regular fa-eye-slash"
                                    onClick={togglePassword}
                                 ></i>
                              )}
                           </span>
                           <div className={styles["radio"]}>
                              <div className={styles["input"]}>
                                 <input
                                    type="checkbox"
                                    name="role"
                                    value="customer"
                                    onChange={changeHandler}
                                 />
                                 <label htmlFor="">I'm Customer</label>
                              </div>
                              <div className={styles["input"]}>
                                 <input
                                    type="checkbox"
                                    name="role"
                                    value="seller"
                                    onChange={changeHandler}
                                 />
                                 <label htmlFor="">I'm Seller</label>
                              </div>
                           </div>
                        </form>
                     </div>
                     {errMsg && <p className={styles.errmsg}>{errMsg}</p>}
                     <div className={styles["btn-login"]}>
                        <button onClick={submitHandler}>Register</button>
                     </div>
                  </div>
               </div>
            </div>
         );
      }
      if (!register && verify && !username) {
         return (
            <div className={`row ${styles["form-container-verify"]}`}>
               <div className=""></div>
               <div className="col-lg-5 col-12 justify-content-center">
                  <div className={styles["form-verify"]}>
                     <div className={styles["title-form-verify"]}>
                        <h1>Verify your email address</h1>
                        <p>
                           Thankyou for signup with us. To verify, we sent OTP
                           to your email
                        </p>
                     </div>
                     <div className={styles["form-login-verify"]}>
                        <form action="">
                           <input
                              type="text"
                              name="code"
                              placeholder="Input OTP here*"
                              onChange={changeHandler}
                           />
                        </form>
                     </div>
                     {errMsg && <p className={styles.errmsg2}>{errMsg}</p>}
                     <div className={styles["btn-verify"]}>
                        <button onClick={sendVerifPin}>Confirm</button>
                     </div>
                  </div>
               </div>
            </div>
         );
      }
      if (!register && !verify && username) {
         return (
            <div className={`row ${styles["form-container-username"]}`}>
               <div className=""></div>
               <div className="col-lg-5 col-12 justify-content-center">
                  <div className={styles["form-username"]}>
                     <div className={styles["title-form-username"]}>
                        <h1>Email verified!</h1>
                        <p>
                           Set{" "}
                           {body.role === "customer"
                              ? "username"
                              : "store name"}{" "}
                           and start your journey at Rima Furniture
                        </p>
                     </div>
                     <div className={styles["form-login-username"]}>
                        <form action="">
                           <input
                              type="text"
                              name="username"
                              placeholder={
                                 body.role === "customer"
                                    ? "Input username here *"
                                    : "Input store name here *"
                              }
                              onChange={changeHandler}
                           />
                        </form>
                        { body.role === 'seller' && (
                           <form action="">
                           <input
                              type="text"
                              name="store_desc"
                              placeholder={
                                 body.role === "seller" && "Input your store description"
                              }
                              onChange={changeHandler}
                           />
                        </form>
                        )}
                     </div>
                     {errMsg && <p className={styles.errmsg2}>{errMsg}</p>}
                     <div className={styles["btn-username"]}>
                        <button onClick={sendVerif}>Confirm</button>
                     </div>
                  </div>
               </div>
            </div>
         );
      }
   };

   return (
      <>
         <Header />
         <div className="container-fluid">
            <div className="row">
               <main className={`col-lg-12 ${styles["page-title"]}`}>
                  <h1>My Account</h1>
                  <p>
                     Register and log in with your account to be able to shop at
                     will
                  </p>
               </main>
            </div>
         </div>
         <div className="container-fluid">
            <form action="register">{showPage()}</form>

            {/* email verification form start */}

            {/* email verification end */}

            {/* setup username start */}

            {/* setup username end */}
         </div>
         <ToastContainer />
         <Footer />
      </>
   );
}

export default Regist;
