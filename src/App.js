import React from "react";

import Navbar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="app ">
      <header className="wrapHeader ">
        <Navbar />
      </header>

      <main className="wrapMain container">
        <Main />
      </main>

      <footer className="wrapFooter ">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
