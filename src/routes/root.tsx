import { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header/Header";
import Navbar from "../components/Navigation/Navbar";
import Footer from "../components/Footer/Footer";

function Root() {
  const [currentYear] = useState(new Date().getFullYear());
  return (
    <div className="App">
      <Header />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer year={currentYear} />
    </div>
  );
}

export default Root;
