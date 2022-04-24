
import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
import { Link } from "react-router-dom";
import Kategori from "../components/Kategori";
import { DesignList } from "./DesignList";
function Design() {
    return (
        <div className="menu">
         <Kategori/>
          <h1 className="menuTitle">Our Freelancer</h1>
          <div className="menuList">
            {DesignList.map((menuItem, key) => {
              return (
                <MenuItem
                  key={key}
                  image={menuItem.image}
                  name={menuItem.name}
                  keterangan={menuItem.keterangan}
                  price={menuItem.price}
                />
              );
            })}
          </div>
        </div>
      );
        }

export default Design;
