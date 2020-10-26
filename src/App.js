import React from "react";
import NavigationBar from "./Components/NavigationBar";
import HomePage from "./Pages/HomePage/HomePage";
import Footer from "./Components/Footer";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <HomePage />
      {/*Footer not completed */}
      {/*<Footer />*/}
    </div>
  );
}

export default App;
