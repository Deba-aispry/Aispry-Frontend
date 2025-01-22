import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import "react-tooltip/dist/react-tooltip.css";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/home/HomeIndex";

import Ecommerce from "./components/industryApplications/ecommerce/Ecommerce";
import Energy from "./components/industryApplications/enegry/Energy";
import Esg from "./components/industryApplications/esg/Esg";
import Financial from "./components/industryApplications/financial/Financial";
import Fmcg from "./components/industryApplications/fmcg/Fmcg";
import HealthCare from "./components/industryApplications/healthCare/HealthCare";
import Manufacturing from "./components/industryApplications/manufacturing/Manufacturing";
import Transportation from "./components/industryApplications/transportation/Transportation";

import ScrollToTopButton from "./components/utility/ScrollToTopBtn";
import DemoBtn from "./components/utility/DemoBtn";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
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
        </Routes>
        <Footer />
        <ScrollToTopButton />
        <DemoBtn />
      </div>
    </Router>
  );
}

export default App;
