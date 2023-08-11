import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import PageNotFound from "./Components/PageNotFound";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Loader from "./Components/Loader";
import Feature from "./Components/Feature";
import Blog from "./Components/Blog";
import FQ from "./Components/F&Q";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/loader" element={<Loader />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/f&q" element={<FQ />} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </>
  );
}

export default App;
