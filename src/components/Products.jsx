import React from "react";
import style from "../css/Products.module.css";
function Products() {
  return (
    <div className={style.productsContainer}>
      <div className={style.productsIneerContainer}>
        <div className={style.installationIfno}>
          <p>
            INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
            RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
            POWER FOR THE NATION.
          </p>
        </div>
        <div className={style.productImg}>
          <img src="https://i.ibb.co/XbQYMwb/3.png" alt="" />
        </div>
        <div className={style.productNames}>
          <p>
            Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
            Solar Systems - Motors Valves
          </p>
        </div>
        <div className={style.horizontalRule}>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Products;
