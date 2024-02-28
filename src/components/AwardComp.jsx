import React from "react";
import styles from "../css/Award.module.css";
function AwardComp() {
  return (
    <div className={styles.AwardParentContainer}>
      <div className={styles.awardInnerContainer}>
        <div className={styles.momentoImg}>
          <img src="https://i.ibb.co/Lz2p14n/1.png" alt="" />
        </div>
        <div className={styles.awardedEventContainer}>
          <div className={styles.information}>
            <h3>
              {" "}
              C.R.L PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </h3>
            <ul>
              <li>
                {" "}
                C.R.I's energy efficient products are well recognized by various
                Government Institutions, as trustworthy products for various
                projects across the globe to save energy.
              </li>
              <li>
                C.R.I. is the highest contributor in the country for the
                projects of LESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel
              </li>
            </ul>
          </div>
          <div className={styles.eventImg}>
            <img src="https://i.ibb.co/pn1FJ8n/2.png" alt="" />
          </div>
          <div className={styles.infromationTwo}>
            <p>
              Government of India has awarded the <span>"National Energy Conservation
              Award 2018"</span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I.
              Group received the award from Smt. Sumitra Mahajan, Speaker of Lok
              Sabha & Shri. Raj Kumar Singh, Honorable Minister of State
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AwardComp;
