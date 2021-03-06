import React from "react";
import { Link } from "react-router-dom";
import PizzaLeft from "../assets/loginpic.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Login</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="email">E-mail</label>
          <input name="email" placeholder="Masukan email..." type="email" />
          <label htmlFor="password">Password</label>
          <input name="passsword" placeholder="Masukan password..." type="password" />
          
          <Link to="/">
          <button> Login </button>
        </Link>
        </form>
      </div>
    </div>
  );
}

export default Contact;
