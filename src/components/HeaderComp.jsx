import React from "react";
import styles from "../css/Header.module.css";
function HeaderComp() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.innerContainer}>
        <img src="https://i.ibb.co/DVbKyxn/logo.png" alt="" />
      </div>
    </div>
  );
}

export default HeaderComp;
