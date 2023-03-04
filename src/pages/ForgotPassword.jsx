import React from "react";
import styles from "../styles/ForgotPassword.module.css";
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";
import withNavigate from "../helper/withNavigate";
import Axios from "axios";

class ForgotPassword extends React.Component {
  state = {
    sendEmail: true,
    sendOtp: false,
    sendPassword: false,
    isShow: false,
    isEmail: null,
    isCode: null,
    isPassword: null,
    isConfirm: null,
    pin: null,
    minutes: 0,
    seconds: 0,
    loading: false,
    MsgErr: null,
  };

   componentDidMount() {}
   componentWillUnmount() {
      clearInterval(this.myInterval);
   }
   countDown = () => {
      this.myInterval = setInterval(() => {
         const { seconds, minutes } = this.state;

         if (seconds > 0) {
            this.setState(({ seconds }) => ({
               seconds: seconds - 1,
            }));
         }
         if (seconds === 0) {
            if (minutes === 0) {
               clearInterval(this.myInterval);
            } else {
               this.setState(({ minutes }) => ({
                  minutes: minutes - 1,
                  seconds: 59,
               }));
            }
         }
      }, 1000);
   };

   handlerButtonEmail = (e) => {
      e.preventDefault();
      const url = `${process.env.REACT_APP_BACKEND_HOST}/auth/forgot`;
      if (!this.state.isEmail) return "ALLDATA MUST BE FIELD";
      Axios.patch(url, { email: this.state.isEmail }).then((response) => {
         this.setState(
            {
               pin: response.data.data.code,
               sendEmail: false,
               sendOtp: true,
               minutes: 2,
            },
            () => {
               this.countDown();
            }
         );
      });
   };

   handlerButtonCode = (e) => {
      e.preventDefault();
      const { isCode, pin } = this.state;
      if (isCode === pin) {
         return this.setState({
            sendOtp: false,
            sendPassword: true,
         });
      }
   };

   handlerButtonPassword = (e) => {
      e.preventDefault();
      const url = `${process.env.REACT_APP_BACKEND_HOST}/auth/forgot`;
      const { isCode, isEmail, isConfirm, isPassword } = this.state;
      if (isConfirm !== isPassword) return "PASSWORD DOEST'N MATCH";
      const body = {
         email: isEmail,
         code: isCode,
         new_password: isConfirm,
      };
      Axios.patch(url, body).then((result) => {
         console.log(result);
      });
   };

   showPage = () => {
      const state = this.state;
      if (state.sendEmail && !state.sendOtp && !state.sendPassword) {
         return (
            <div className={styles["form-forgot"]}>
               <h1>Forgot your Password?</h1>
               <p>
                  Don't worry! Just fill in your email and we'll send you a code
                  verfication.
               </p>
               <div className={styles["input-box"]}>
                  <input
                     type="text"
                     name="email"
                     id="email"
                     placeholder="Username or email address *"
                     onChange={(e) => {
                        this.setState({ isEmail: e.target.value });
                     }}
                  />
               </div>
               <div className={styles["forgot-btn"]}>
                  <button
                     onClick={(e) => {
                        this.handlerButtonEmail(e);
                     }}
                  >
                     Send Email
                  </button>
               </div>
            </div>
         );
      }
      if (!state.sendEmail && state.sendOtp && !state.sendPassword) {
         return (
            <div className={styles["form-forgot"]}>
               <h1>OTP Verification</h1>
               <p>Enter the OTP sent to your Email</p>
               <div className={styles["input-box"]}>
                  <input
                     type="text"
                     name="otp"
                     id="otp"
                     placeholder="Input OTP here"
                     onChange={(e) => {
                        this.setState({ isCode: e.target.value });
                     }}
                  />
               </div>
               <div className={styles["forgot-btn"]}>
                  <button
                     onClick={(e) => {
                        this.handlerButtonCode(e);
                     }}
                  >
                     Verify
                  </button>
               </div>
               <div className={styles["count-text"]}>
                  <p>
                     Click{" "}
                     <span
                        className={
                           this.state.seconds !== 0 ? styles.block : styles.show
                        }
                        onClick={(e) => {
                           if (this.state.seconds === 0) {
                              this.handlerButtonEmail(e);
                           }
                        }}
                     >
                        here
                     </span>{" "}
                     if you didn't receive any code in {this.state.minutes} :{" "}
                     {state.seconds < 10 ? `0${state.seconds}` : state.seconds}{" "}
                     minutes
                  </p>
               </div>
            </div>
         );
      }
      if (!state.sendEmail && !state.sendOtp && state.sendPassword) {
         return (
            <div className={styles["form-forgot"]}>
               <h1>OTP Verified!</h1>
               <p>Enter your new password bellow!</p>
               <div className={styles["input-box-otp"]}>
                  <i
                     className={`${this.iconShow()} ${styles.password}`}
                     onClick={() => {
                        this.setState((prevState) => ({
                           pwdShown: prevState.pwdShown ? false : true,
                        }));
                     }}
                  ></i>
                  <input
                     type={this.showPassword()}
                     name="password"
                     id="password"
                     placeholder="Enter new password *"
                     onChange={(e) => {
                        this.setState({ isPassword: e.target.value });
                     }}
                  />
               </div>
               <div className={styles["input-box-otp"]}>
                  <i
                     className={`${this.iconShowConfirm()} ${styles.password}`}
                     onClick={() => {
                        this.setState((prevState) => ({
                           pwdShownConfirm: prevState.pwdShownConfirm
                              ? false
                              : true,
                        }));
                     }}
                  ></i>
                  <input
                     type={this.showPasswordConfirm()}
                     name="confirm"
                     id="confirm"
                     placeholder="Confirm new password *"
                     onChange={(e) => {
                        this.setState({ isConfirm: e.target.value });
                     }}
                  />
               </div>
               <div className={styles["forgot-btn"]}>
                  <button
                     onClick={(e) => {
                        this.handlerButtonPassword(e);
                     }}
                  >
                     Send
                  </button>
               </div>
            </div>
         );
      }
   };

   showPassword = () => {
      if (!this.state.pwdShown) return "password";
      return "text";
   };

   showPasswordConfirm = () => {
      if (!this.state.pwdShownConfirm) return "password";
      return "text";
   };

   iconShow = () => {
      if (this.state.pwdShown) return "fa fa-regular fa-eye";
      return "fa fa-regular fa-eye-slash";
   };

   iconShowConfirm = () => {
      if (this.state.pwdShownConfirm) return "fa fa-regular fa-eye";
      return "fa fa-regular fa-eye-slash";
   };

   render() {
      return (
         <>
            <Navbar />
            <main className="container-fluid p-0">
               <div className={styles["title-container"]}>
                  <div className={`col-lg-12 ${styles["page-title"]}`}>
                     <h1>My Account</h1>
                     <p>
                        Register and log in with your account to be able to shop
                        at will
                     </p>
                  </div>
               </div>
               <div className={`${styles["form-container"]} container`}>
                  <form action="forgot">{this.showPage()}</form>
               </div>
            </main>
            <Footer />
         </>
      );
   }
}

const NewForgot = withNavigate(ForgotPassword);
export default NewForgot;
