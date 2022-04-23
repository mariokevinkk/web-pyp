import React from "react";
import MultiplePizzas from "../assets/7.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p className="about">
        Kampung freelance adalah wadah untuk menghubungkan para pekerja Freelance digital, dengan konsumen. Dengan adanya kampung freelance ini akan memudahkan para freelancer menawarkan jasanya dan memudahkan konsumen untuk mencari jasa yang dibutuhkan. Kampung freelance juga akan meyediakan filter kategori jasa untuk memudahkan konsumen menemukan jasa yang diinginkannya. walapun kami sudah memberikan kategori untuk jasa yang dijual, namun tidak menutup ruang bagi pekerja kreatif untuk memunculkan tipe pekerjaan baru. nantinya bila tipe jasa tersebut mulai populer, akan kami buatkan kategori baru sesuai dengan jenis jasa tersebut.
        </p>
      </div>
    </div>
  );
}

export default About;
