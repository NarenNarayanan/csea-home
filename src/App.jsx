import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Events from "./components/Events";
import About from "./components/About";
import Contact from "./components/Contact";

function Home() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold">Welcome to CSEA Home</h1>
      <p className="mt-4">This is the homepage of our project! </p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
