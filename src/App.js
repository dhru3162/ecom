import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import PageNotFound from "./Components/PageNotFound";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Loader from "./Components//Loader/Loader";
import Feature from "./Components/Feature";
import Blog from "./Components/Blog";
import FQ from "./Components/F&Q";
import ProductPage from "./Components/ProductPage";
import Cart from "./Components/Cart";
import LoginSignup from "./Components/LoginSignup";
import Profile from "./Components/Profile";
import RagisterDetails from "./Components/RagisterDetails";
import CheckOut from "./Components/CheckOut";
import { useContext } from "react";
import { Datacontext } from "./Components/Context";
import MyOrders from "./Components/MyOrders";
import Users from "./Components/Users";
import Products from "./Components/Products";
import EditUser from "./Components/EditUser";

function App() {
  const contextData = useContext(Datacontext)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/loader" element={<Loader />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/f&q" element={<FQ />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/myorders" element={<MyOrders />} />
        <Route path={`/cart/${contextData.palceorder}`} element={<CheckOut />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/ragister" element={<RagisterDetails />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<EditUser />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
