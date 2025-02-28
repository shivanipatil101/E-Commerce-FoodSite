import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import RestaurantList from "./components/RestaurantList/RestaurantList";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <>
      <main className="overflow-x-hidden">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <Banner />
      </div>
      <div id="menus">
        <RestaurantList />
      </div>
      <div id="contact">
        <Footer />
      </div>
      </main>
    </>
  );
};

export default App;
