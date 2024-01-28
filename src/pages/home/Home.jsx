import React from "react";
import Banner from "../../sections/banner/Banner";
import Offers from "../../sections/offers/Offers";
import Products from "../../sections/products/Products";
import Slime from "../../sections/slime/Slime";
import Feedbacks from "../../sections/feedbacks/Feedbacks";
import Video from "../../sections/video/Video";
import Services from "../../sections/services/Services";

const Home = () => {
  return (
    <>
      <Banner />
      <Offers />
      <Products />
      <Slime />
      <Feedbacks />
      <Video />
      <Services />
    </>
  );
};

export default Home;
