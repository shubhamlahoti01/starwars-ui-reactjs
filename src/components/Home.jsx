import React from "react";
import "../styles/home.scss";

const Home = () => {
  return (
    <div className="home-outer">
      <div className="home-inner">
        <img
          src="https://cdn.pixabay.com/photo/2016/09/22/09/49/star-wars-1686787_1280.jpg"
          alt="star-wars-banner"
        />
        <div className="home-details">
          <h1>Welcome to Star Wars</h1>
          <h1>Dashboard</h1>
          <p>
            Star Wars is an American epic space opera multimedia franchise
            created by George Llucas, which began with the eponymous 1977 film
            and quickly became a worldwide pop culture phenomenon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
