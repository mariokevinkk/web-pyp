import React from 'react'
import "../styles/bayar.css";
function Bayar() {
    return (
        <div className='bayar'>
          <div >
            <h3>Nama : ajayviknesh</h3>
            <h3>Harga: Rp.159.999(Harga sudah termasuk biaya Pemesanan)</h3>
            <h3>Metode Pembayaran:</h3>
            <input type="radio" value="ovo" name="metode" /> OVO
        <input type="radio" value="dana" name="metode" /> DANA
        <input type="radio" value="gopay" name="metode" /> GO-PAY
            <form id="contact-form" method="POST">
          


          <label htmlFor="message">Catatan</label>
          <textarea
            rows="6"
            placeholder="Masukan catatan..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Pesan</button>
        </form>



          </div>
        </div>
      );
}

export default Bayar
