import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import "react-tooltip/dist/react-tooltip.css";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/home/HomeIndex";
import AboutUs from "./components/aboutUs/AboutUs";
import AiSolutions from "./components/aiSolutions/AiSolutions";
import ResourceIndex from "./components/resources/ResourceIndex";
import Ecommerce from "./components/industryApplications/ecommerce/Ecommerce";
import Energy from "./components/industryApplications/enegry/Energy";
import Esg from "./components/industryApplications/esg/Esg";
import Financial from "./components/industryApplications/financial/Financial";
import Fmcg from "./components/industryApplications/fmcg/Fmcg";
import HealthCare from "./components/industryApplications/healthCare/HealthCare";
import Manufacturing from "./components/industryApplications/manufacturing/Manufacturing";
import Transportation from "./components/industryApplications/transportation/Transportation";
import HowWeWorksDetails from "./components/howWeWorks/HowWeWorksDetails";

import ScrollToTopButton from "./components/utility/ScrollToTopBtn";
import DemoBtn from "./components/utility/DemoBtn";
import Footer from "./components/footer/Footer";
import { useEffect } from "react";

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Navbar />
        <Routes>
          {/* Define routes for each component */}
          <Route path="/" element={<Homepage />} />
          <Route path="/industry/ecommerce" element={<Ecommerce />} />
          <Route path="/industry/energy" element={<Energy />} />
          <Route path="/industry/esg" element={<Esg />} />
          <Route path="/industry/financial" element={<Financial />} />
          <Route path="/industry/fmcg" element={<Fmcg />} />
          <Route path="/industry/healthcare" element={<HealthCare />} />
          <Route path="/industry/manufacturing" element={<Manufacturing />} />
          <Route path="/industry/transportation" element={<Transportation />} />
          <Route path="/how-we-works" element={<HowWeWorksDetails />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/ai-solutions" element={<AiSolutions />} />
          <Route path="/resources" element={<ResourceIndex />} />
        </Routes>
        <Footer />
        <ScrollToTopButton />
        <DemoBtn />
      </div>
    </Router>
  );
}

export default App;
