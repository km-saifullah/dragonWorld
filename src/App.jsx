import Banner from "./sections/banner/Banner";
import Header from "./sections/header/Header";
import Navbar from "./sections/navbar/Navbar";
import Offers from "./sections/offers/Offers";
import Products from "./sections/products/Products";
import Feedbacks from "./sections/feedbacks/Feedbacks";
import Video from "./sections/video/Video";
import "./index.css";
const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
      <Offers />
      <Products />
      <Feedbacks />
      <Video />
    </div>
  );
};

export default App;
