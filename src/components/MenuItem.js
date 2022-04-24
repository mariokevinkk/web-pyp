import React from "react";
import { Link } from "react-router-dom";

function MenuItem({ image, name, price ,keterangan}) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> {keterangan} </p>
      <p> Rp.{price} </p>
      <button type="submit">Pesan</button>

      
    </div>
  );
}

export default MenuItem;