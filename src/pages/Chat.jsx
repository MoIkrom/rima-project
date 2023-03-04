import React from 'react'
import styles from '../styles/Chat.module.css'
import avatar from '../assets/profile/parker.jpeg'
import Navbar from '../component/navbar/Navbar'
import Footer from '../component/footer/Footer'

function Chat() {
  return (
    <>
    <Navbar/>
    <main className="container-fluid p-0">

    <div className={styles["title-container"]}>
    <div className={`col-lg-12 ${styles["page-title"]}`}>
                  <h1>My Account</h1>
                  <p>
                     Register and log in with your account to be able to shop at
                     will
                  </p>
          </div>
    </div>

    <div className={`${styles["form-container"]} container`}>
      <div className={styles.chat}>
      <div className={styles["chat-left-active"]}>
        <div className={styles["profile-chat"]}>
        <img src={avatar} alt="" />
        <div className={styles["profile-status"]}>
        <h5>Putra Parker</h5>
        <p>Online</p>
        </div>
        </div>
      </div>
      <div className={styles["chat-left"]}>
        <div className={styles["profile-chat"]}>
        <img src={avatar} alt="" />
        <div className={styles["profile-status"]}>
        <h5>Putra Parker</h5>
        <p>Hi there, is it available?</p>
        </div>
        </div>
      </div>
      <div className={styles["chat-left"]}>
        <div className={styles["profile-chat"]}>
        <img src={avatar} alt="" />
        <div className={styles["profile-status"]}>
        <h5>Putra Parker</h5>
        <p>Is it available for home delivery?</p>
        </div>
        </div>
      </div>
      </div>

      <div className={styles["chat-right"]}>
      <div className={styles["chat-right-active"]}>
        <div className={styles["profile-chat"]}>
        <img src={avatar} alt="" />
        <div className={styles["profile-status"]}>
        <h5>Putra Parker</h5>
        <p>Online</p>
        </div>
        </div>
      </div>
      <div className={styles["chat-toggle"]}>
        <div className={styles["send-chat-box"]}>
      <div className="send-chat">
        <input type="text" name="send-chat" id="send-chat" placeholder='Write your message' />
      </div>
      <div className={styles["send-btn"]}>
      <button>Send</button>
      </div>
        </div>
      </div>
      </div>
    </div>

    </main>
    <Footer/>
    </>
  )
}

export default Chat