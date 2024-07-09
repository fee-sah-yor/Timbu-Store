import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductPage from "./Page/ProductPage";
import Home from "./Page/Home";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";


function App() {
  return (
    <>
     <section className="w-full h-[100vh] mt-32 mb-6">
     <Topbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Product page" element={<ProductPage/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
      </section>
    </>
  );
}

export default App;
