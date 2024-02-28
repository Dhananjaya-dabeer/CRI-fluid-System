import React from "react";
import HeaderComp from "../components/HeaderComp";
import AwardComp from "../components/AwardComp";
import Products from "../components/Products";
import Footer from "../components/Footer";
function MainPage() {
  return (
    <div>
      <HeaderComp />
      <AwardComp />
      <Products />
      <Footer/>
    </div>
  );
}

export default MainPage;
