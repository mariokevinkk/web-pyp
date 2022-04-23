import React from "react";

function MenuItem({ image, name, price ,keterangan}) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> {keterangan} </p>
      <p> Rp.{price} </p>

      
    </div>
  );
}

export default MenuItem;