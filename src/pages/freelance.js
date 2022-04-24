import React from 'react'

function freelance() {
  return (
    <div>
    

<form id="contact-form" method="POST">
  <label htmlFor="name">Nama Lengkap</label>
  <input name="name" placeholder="Masukan nama lengkap..." type="text" />
  <label htmlFor="name">Tempat,tanggal lahir</label>
  <input  placeholder="Masukan tempat,tanggal lahir anda..." type="text" />
  <label htmlFor="name">Alamat</label>
  <input  placeholder="Masukan alamat lengkap anda..." type="text" />
  <label htmlFor="email">Email</label>
  <input name="email" placeholder="Masukan email..." type="email" />
  
  <label htmlFor="name">Tempat,tanggal lahir</label>
  <input  placeholder="Masukan tempat,tanggal lahir anda..." type="text" />
  <label htmlFor="name">Masukan keterangan tentang anda(pengalaman,skil,dll)</label>
  <input  placeholder="Masukan tempat,tanggal lahir anda..." type="text" />
 
  <button type="Daftar"> Daftar</button>
</form>
    </div>
  )
}

export default freelance
