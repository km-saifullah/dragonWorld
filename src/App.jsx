import Home from "./pages/home/Home";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import About from "./pages/about/About";
import Shop from "./pages/shop/Shop";
import Offers from "./pages/offers/Offers";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/notfound/NotFound";
import Registration from "./pages/register/Registration";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Registration />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
