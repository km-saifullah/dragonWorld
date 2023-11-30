import "./index.css";
import Banner from "./sections/banner/Banner";
import Header from "./sections/header/Header";
import Navbar from "./sections/navbar/Navbar";

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
    </div>
  );
};

export default App;
