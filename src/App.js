import React from "react";
import About from "./Components/About/About";
import Center from "./Components/Center/Center";
import Chefs from "./Components/Chefs/Chefs";
import Choose from "./Components/Choose/Choose";
import Contact from "./Components/Contact/Contact";
import Fresh from "./Components/Fresh/Fresh";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/Header/Header";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Choose/>
      <About/>
      <Fresh/>
      <Chefs/>
      <Center/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
