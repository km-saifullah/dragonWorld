import "./index.css";
import Banner from "./sections/banner/Banner";
import Header from "./sections/header/Header";
import Navbar from "./sections/navbar/Navbar";
import Offers from "./sections/offers/Offers";

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
      <Offers />
    </div>
  );
};

export default App;
