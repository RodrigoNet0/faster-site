import "./App.css";
 import Price from "./components/Price";
 import About from "./components/About";
 import Hero from "./components/Hero";
 import Header from "./components/Header/Header";
import Cards from "./components/Cards";

function App() {
  return (
    <>
       <Header />
      <Hero />
      <br />
      <About />
      <Price /> 
      <Cards />
    </>
  );
}

export default App;
