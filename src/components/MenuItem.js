import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function MenuItem({ image, name, price ,keterangan}) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> Rp.{price} </p>
      <p> {keterangan} </p>
     
      <Link to="/pembayaran">
          <button> Pesan </button>
        </Link>

      
    </div>
  );
}

export default MenuItem;