import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import PageNotFound from "./Components/PageNotFound";
import About from "./Components/Home/About";
import ContactUs from "./Components/Home/ContactUs";
import Feature from "./Components/Home/Feature";
import Blog from "./Components/Home/Blog";
import FQ from "./Components/Home/F&Q";
import ProductPage from "./Components/Home/ProductPage";
import Cart from "./Components/User/Cart";
import LoginSignup from "./Components/LoginRegister/LoginSignup";
import Profile from "./Components/Profile/Profile";
import RagisterDetails from "./Components/LoginRegister/RagisterDetails";
import CheckOut from "./Components/User/CheckOut";
import { useContext } from "react";
import { Datacontext } from "./Components/Context";
import MyOrders from "./Components/User/MyOrders";
import Users from "./Components/Admin/Users";
import Products from "./Components/Admin/Products";
import EditUser from "./Components/Admin/EditUser";
import AddUser from "./Components/Admin/AddUser";
import AddProduct from './Components/Admin/AddProduct';
import EditProduct from './Components/Admin/EditProduct'
import ProtectAdmin from './Components/ProtectedCom/ProtectAdmin';
import ProtectUser from "./Components/ProtectedCom/ProtectUser";
import Loader from './Components/Loader/Loader';

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
        <Route path="/blog" element={<Blog />} />
        <Route path="/f&q" element={<FQ />} />
        <Route path="/cart" element={<ProtectUser Comp={Cart} />} />
        <Route path="/myorders" element={<ProtectUser Comp={MyOrders} />} />
        <Route path={`/cart/${contextData.palceorder}`} element={<ProtectUser Comp={CheckOut} />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/ragister" element={<RagisterDetails />} />
        <Route path="/users" element={<ProtectAdmin Comp={Users} />} />
        <Route path="/users/:id" element={<ProtectAdmin Comp={EditUser} />} />
        <Route path="/users/adduser" element={<ProtectAdmin Comp={AddUser} />} />
        <Route path="/products" element={<ProtectAdmin Comp={Products} />} />
        <Route path="/products/:id" element={<ProtectAdmin Comp={EditProduct} />} />
        <Route path="/products/addproduct" element={<ProtectAdmin Comp={AddProduct} />} />
        <Route path="/loader" element={<Loader />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
