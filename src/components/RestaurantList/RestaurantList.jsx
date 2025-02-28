import React, { useState } from "react";
import { Grid, List } from "lucide-react"; // Icons for view toggle
import burgerKing from "../../assets/restaurants/burgerKing.png";
import pizzaHut from "../../assets/restaurants/pizzaHut.png";
import kfc from "../../assets/restaurants/kfc.jpeg";
import tacoBell from "../../assets/restaurants/tacobell.avif";
import dominos from "../../assets/restaurants/dominos.jpg";
import mcdonalds from "../../assets/restaurants/mcdonalds.png";
import shakeShack from "../../assets/restaurants/shakeShack.jpeg";
import subway from "../../assets/restaurants/subway.png";
import starbucks from "../../assets/restaurants/starBukcs.png";
import dunkinDonuts from "../../assets/restaurants/dunkin.png";
import chipotle from "../../assets/restaurants/chipotle.png";
import wendys from "../../assets/restaurants/wendys.png";
import popeyes from "../../assets/restaurants/popeyes.jpeg";
import fiveGuys from "../../assets/restaurants/fiveguys.png";
import arbys from "../../assets/restaurants/arbys.jpg";

const restaurantsData = [
  { id: 1, name: "Burger King", cuisine: "American", rating: 4.5, price: "$$", location: "Prozone Mall", image: burgerKing },
  { id: 2, name: "Pizza Hut", cuisine: "Italian", rating: 4.3, price: "$$", location: "Beed By Pass", image: pizzaHut },
  { id: 3, name: "KFC", cuisine: "American", rating: 4.2, price: "$$", location: "Beed By Pass", image: kfc },
  { id: 4, name: "Taco Bell", cuisine: "Mexican", rating: 4.0, price: "$", location: "NiralaBazar", image: tacoBell },
  { id: 5, name: "Domino's Pizza", cuisine: "Italian", rating: 4.1, price: "$$", location: "Prozone Mall", image: dominos },
  { id: 6, name: "McDonald's", cuisine: "Fast Food", rating: 4.4, price: "$$", location: "Chikalthana", image: mcdonalds },
  { id: 7, name: "Shake Shack", cuisine: "American", rating: 4.6, price: "$$$", location: "Cannought Place", image: shakeShack },
  { id: 8, name: "Subway", cuisine: "Healthy", rating: 4.0, price: "$", location: "Prozone Mall", image: subway },
  { id: 9, name: "Starbucks", cuisine: "Coffee", rating: 4.7, price: "$$$", location: "City Center Mall", image: starbucks },
  { id: 10, name: "Dunkin' Donuts", cuisine: "Desserts", rating: 4.1, price: "$$", location: "MG Road", image: dunkinDonuts },
  { id: 11, name: "Chipotle", cuisine: "Mexican", rating: 4.2, price: "$$", location: "CBD Belapur", image: chipotle },
  { id: 12, name: "Wendy's", cuisine: "Fast Food", rating: 4.3, price: "$$", location: "Vashi", image: wendys },
  { id: 13, name: "Popeyes", cuisine: "American", rating: 4.5, price: "$$", location: "Andheri", image: popeyes },
  { id: 14, name: "Five Guys", cuisine: "Burgers", rating: 4.8, price: "$$$", location: "Powai", image: fiveGuys },
  { id: 15, name: "Arby's", cuisine: "Sandwiches", rating: 4.0, price: "$", location: "Bandra", image: arbys },
];

const RestaurantList = () => {
  const [view, setView] = useState("grid");
  const [visibleCount, setVisibleCount] = useState(6); // Show 6 restaurants initially

  // Function to load more restaurants
  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* View Toggle */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Restaurants</h2>
        <div className="flex items-center gap-2">
          <button onClick={() => setView("grid")} className="p-2">
            <Grid size={20} />
          </button>
          <button onClick={() => setView("list")} className="p-2">
            <List size={20} />
          </button>
        </div>
      </div>

      {/* Restaurant List */}
      <div className={view === "grid" ? "grid grid-cols-3 gap-4" : "flex flex-col gap-4 hover:"}>
        {restaurantsData.slice(0, visibleCount).map((restaurant) => (
          <div key={restaurant.id} className="border p-4 rounded shadow bg-white transition-transform transform hover:scale-105 hover:shadow-lg">
            <img src={restaurant.image} alt={restaurant.name} className="w-full h-40 object-cover rounded transition-opacity duration-300 hover:opacity-80" />
            <h3 className="text-lg font-bold mt-2">{restaurant.name}</h3>
            <p className="text-sm text-gray-500">{restaurant.cuisine}</p>
            <p className="text-green-600">{restaurant.price}</p>
            <p className="text-yellow-500">⭐ {restaurant.rating}</p>
            <p className="text-gray-600">{restaurant.location}</p>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < restaurantsData.length && (
        <div className="mt-6 text-center">
          <button
            onClick={loadMore}
            className="primary-btn flex items-center gap-2"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default RestaurantList;
