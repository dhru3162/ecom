import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import PageNotFound from "./Components/PageNotFound";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Loader from "./Components/Loader";
import Feature from "./Components/Feature";
import Blog from "./Components/Blog";
import FQ from "./Components/F&Q";
import ProductPage from "./Components/ProductPage";
import Cart from "./Components/Cart";
import LoginSignup from "./Components/LoginSignup";
import Profile from "./Components/Profile";
import RagisterDetails from "./Components/RagisterDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/loader" element={<Loader />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/f&q" element={<FQ />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/ragister" element={<RagisterDetails />} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </>
  );
}

export default App;
