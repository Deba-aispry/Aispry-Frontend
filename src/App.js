import "react-multi-carousel/lib/styles.css";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/home/HomeIndex";

import ScrollToTopButton from "./components/utility/ScrollToTopBtn";
import DemoBtn from "./components/utility/DemoBtn";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <Footer />
      <ScrollToTopButton />
      <DemoBtn />
    </div>
  );
}

export default App;
