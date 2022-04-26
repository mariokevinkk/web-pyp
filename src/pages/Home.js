import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/background.png";
import Kategori from "../components/Kategori";
import "../styles/Home.css";

function Home() {
  return (
    
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      
      <div className="headerContainer">
        <h1> Kampung Freelance </h1>
        <p> #MudahkanUsahamu</p>
        <Link to="/order">
          <button> Cari Freelance </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
