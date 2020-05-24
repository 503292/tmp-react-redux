import React from "react";

import Navbar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Favicon from "react-favicon";
import "./App.css";

function App() {
  return (
    <div className="app ">
      <Favicon url="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Kolovrat_%28%D0%9A%D0%BE%D0%BB%D0%BE%D0%B2%D1%80%D0%B0%D1%82%29_Swastika_%28%D0%A1%D0%B2%D0%B0%D1%81%D1%82%D0%B8%D0%BA%D0%B0%29_-_Rodnovery.svg/1200px-Kolovrat_%28%D0%9A%D0%BE%D0%BB%D0%BE%D0%B2%D1%80%D0%B0%D1%82%29_Swastika_%28%D0%A1%D0%B2%D0%B0%D1%81%D1%82%D0%B8%D0%BA%D0%B0%29_-_Rodnovery.svg.png" />
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
