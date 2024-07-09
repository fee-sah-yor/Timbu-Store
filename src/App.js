import "./App.css";
import Carousel from "./components/Carousel";
import DashboardGallery from "./components/DashboardGallery";
import Footer from "./components/Footer";
import Sorting from "./components/Sorting";
import Topbar from "./components/Topbar";

function App() {
  return (
    <>
      <section className="w-full h-[100vh]">
        <Topbar />
        <Sorting />
        <Carousel />
        <DashboardGallery />
        <Footer/>
      </section>
    </>
  );
}

export default App;
