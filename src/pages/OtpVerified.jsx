import React from 'react'
import styles from '../styles/OtpVerified.module.css'
import Navbar from '../component/navbar/Navbar'
import Footer from '../component/footer/Footer'

export default function OtpVerified() {
  return (
    <>
    <Navbar/>
    <main className="container-fluid p-0">

    <div className={styles["title-container"]}>
      <div className={styles.title}>
      <h1>My Account</h1>
      <p>Register and log in with your account to be able to shop at will</p>
      </div>
    </div>

    <div className={`${styles["form-container"]} container`}>
    <form action='forgot'>
      <div className={styles["form-forgot"]}>
      <h1>OTP Verified!</h1>
      <p>Enter your new password bellow!</p>
      <div className={styles["input-box"]}>
      <input type="text" name="email" id="email" placeholder='Enter new password *' />
      </div>
      <div className={styles["input-box"]}>
      <input type="text" name="email" id="email" placeholder='Confirm new password *' />
      </div>
      <div className={styles["forgot-btn"]}>
      <button>Send</button>
      </div>
      </div>
    </form>

    
    </div>

    </main>
    <Footer/>
    </>
  )
}
