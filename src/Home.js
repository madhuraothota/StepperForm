import React from "react";
import Header from "./Components/Header/Header";
import Promo from "./Components/Promo/Promo";
import Quote from "./Components/Quote/Quote";
import Requirementform from "./Components/Requirementform/Requirementform";
import Hiringcos from "./HiringCos/Hiringcos";
import Ourservices from "./Components/OurServices/Ourservices";
import Footer from "./Components/Footer/Footer";


const Home = () => {
  return (
    <React.Fragment>
      <Header/>
      <Promo/>
      <Quote/>
      <Requirementform/>
      <Hiringcos/>
      <Ourservices/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer/>            
    </React.Fragment>
  );
};

export default Home;
