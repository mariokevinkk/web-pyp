import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Kategori.css";
function Kategori() {
  return (
    <div className='kategori'>
     
        <Link to="/order/program"> Programming </Link>
        <Link to="/order/design"> Design </Link>
        <Link to="/order/marketing"> Marketing </Link>
    </div>
  )
}

export default Kategori
