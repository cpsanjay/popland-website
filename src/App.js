import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Upcoming from "./components/Upcoming";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Products />
      <Upcoming />
      <Footer />
    </div>
  );
}

export default App;
