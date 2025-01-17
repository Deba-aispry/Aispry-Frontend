import "react-multi-carousel/lib/styles.css";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/home/HomeIndex";

import ScrollToTopButton from "./components/utility/ScrollToTopBtn";
import DemoBtn from "./components/utility/DemoBtn";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <ScrollToTopButton />
      <DemoBtn />
    </div>
  );
}

export default App;
