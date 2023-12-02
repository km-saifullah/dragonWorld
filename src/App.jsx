import Banner from "./sections/banner/Banner";
import Header from "./sections/header/Header";
import Navbar from "./sections/navbar/Navbar";
import Offers from "./sections/offers/Offers";
import Products from "./sections/products/Products";
import Feedbacks from "./sections/feedbacks/Feedbacks";
import Video from "./sections/video/Video";
import "./index.css";
import Slime from "./sections/slime/Slime";
import Footer from "./sections/footer/Footer";
import Copyright from "./sections/copyrights/Copyright";
const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
      <Offers />
      <Products />
      <Slime />
      <Feedbacks />
      <Video />
      <Footer />
      <Copyright />
    </div>
  );
};

export default App;
