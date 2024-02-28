import React from "react";
import style from "../css/Footer.module.css";
function Footer() {
  return (
    <div className={style.footerContainer}>
      <div className={style.footerInnerContainer}>
        <div className={style.segmentHeader}>
          <h3>C.R.L FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3>
        </div>
        <div className={style.segments}>
          <p>
            CHEMICALS & PROCESS <span>|</span> POWER <span>|</span> WATER &
            WASTE WATER <span>|</span> OILS & GAS <span>|</span> PHARMA{" "}
            <span>|</span> SUGARS & DISTILLERIES <span>|</span>
            PAPER & PULP <span>|</span> MARINE & DEFENCE <span>|</span> METAL &
            MINING <span>|</span> FOOD & BEVERAGE <span>|</span>
          </p>
          <p>
            PETROCHEMICAL & REFINERIES <span>|</span> SOLAR <span>|</span>{" "}
            BUILDING <span>|</span> HVAC <span>|</span> FIRE FIGHTING{" "}
            <span>|</span> AGRICULTURE & RESIDENTIAL
          </p>
        </div>
        <div className={style.socialMediaProfielsContainer}>
          <div className={style.socialMediaProfiles}>
            <div className={style.toolFreeNumberContainer}>
              <div className={style.phone}>
                <i>&#128222;</i>
              </div>
              <div className={style.toolFreeNumber}>
                <p>
                  Toll free <span>1800 200 1234</span>
                </p>
              </div>
            </div>
            <div className={style.faceBookProfile}>
              <div className={style.facebookLogo}>
                <a
                  href="https://www.facebook.com/cripumps"
                  class="fa fa-facebook"
                ></a>
              </div>
              <div className={style.facebookProfileLink}>
                <a href="https://www.facebook.com/cripumps" target="new">
                  www.facebook.com/cripumps
                </a>
              </div>
            </div>
            <div className={style.worldWideWeb}>
              <div className={style.globe}>
                <a href="www.crigroups.com">
                  <img src="https://i.ibb.co/bg8NFGP/th.jpg" alt="" />
                </a>
              </div>
              <div className={style.websiteLink}>
                <a href="www.crigroups.com">www.crigroups.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
