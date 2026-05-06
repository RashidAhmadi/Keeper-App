import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

import Home from "../pages/Home";
import Contact from "../pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">

        <Header />
        <Navbar />

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;