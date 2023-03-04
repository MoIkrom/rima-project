import React from "react";
import styles from "../loader/Loader.module.css"

function Loader() {
  return (
    <>
      <div className={styles["loader-container"]}>
        <div className={styles.spinner}></div>
      </div>
    </>
  );
}

export default Loader;
