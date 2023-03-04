import React, { useState } from "react";
import Header from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";
import styles from "../styles/Login.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import authActions from "../redux/actions/auths";

function Login() {
   const navigate = useNavigate();
   const dispacth = useDispatch();
   const [body, setBody] = useState({});
   const [selected, setSelected] = useState("login");
   const [visible, setVisible] = useState(false);

   const togglePassword = () => {
      // When the handler is invoked
      // inverse the boolean state of passwordShown
      setVisible(!visible);
   };

   const changeHandler = (e) =>
      setBody({ ...body, [e.target.name]: e.target.value });
   console.log(body);

   const goHome = () => navigate("/");
   const toRegister = () => navigate("/register");

   const submitHandler = (e) => {
      e.preventDefault();
      console.log(body);
      dispacth(authActions.loginThunk(body, goHome));
      return toast.success(`Hi! ${body.emailOrusername}, welcome back!`, {
         position: "top-center",
         autoClose: 2000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "light",
      });
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
            <div className={`row ${styles["form-container"]}`}>
               <div className="col-lg-3 offset-lg-2">
                  <div className={styles["account"]}>
                     <div className={styles["login-account"]}>
                        <h1
                           onClick={() => {
                              setSelected("login");
                           }}
                           className={
                              selected === "login" && `${styles["selected"]}`
                           }
                        >
                           Login Account
                        </h1>
                     </div>
                     <div className={styles["regist-account"]}>
                        <h1 onClick={toRegister}>Register Account</h1>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6 offset-lg-1 col-12">
                  <div className={styles["form"]}>
                     <div className={styles["title-form"]}>
                        <h1>Login</h1>
                     </div>
                     <div className={styles["form-login"]}>
                        <form className={styles.form__bar}>
                           <input
                              onChange={changeHandler}
                              type="text"
                              name="emailOrusername"
                              placeholder="User name or email address *"
                              className={styles.input__}
                           />
                           <input
                              onChange={changeHandler}
                              type={visible ? "text" : "password"}
                              name="password"
                              placeholder="Password *"
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
                           <p
                              onClick={() => {
                                 navigate("/forgot");
                              }}
                           >
                              Forget your password?
                           </p>
                        </form>
                     </div>
                     <div className={styles["btn-login"]}>
                        <button onClick={submitHandler}>Login</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <ToastContainer />
         <Footer />
      </>
   );
}

export default Login;
