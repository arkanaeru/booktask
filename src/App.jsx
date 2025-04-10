import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <>
      <div className="container">
        {/* Header */}
        <header className="d-flex flex-wrap align-items-center justify-content-between py-3 mb-4 border-bottom">
          <div className="d-flex align-items-center mb-2 mb-md-0">
            <i className="fa-solid fa-book fa-2xl" style={{ color: "#3f7d8d" }}></i>
            <span className="ms-2 fs-4">Bookstore</span>
          </div>

          <ul className="nav mb-2 justify-content-center mb-md-0">
            <li><a href="#home" className="nav-link px-3">Home</a></li>
            <li><a href="#book" className="nav-link px-3">Book</a></li>
            <li><a href="#team" className="nav-link px-3">Team</a></li>
            <li><a href="#contact" className="nav-link px-3">Contact</a></li>
          </ul>

          <div className="text-end">
            <button type="button" className="btn btn-outline-primary me-2">Login</button>
            <button type="button" className="btn btn-primary">Register</button>
          </div>
        </header>

        {/* Home Section */}
        <section id="home" className="my-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold">Selamat Datang di Bookstore</h1>
              <p className="lead">Beli dan baca buku terbaik dari penulis favoritmu. Mulai dari fiksi, non-fiksi, sejarah, hingga pengembangan diri.</p>
              <a className="btn btn-primary btn-lg" href="#book">Lihat Buku</a>
            </div>
            <div className="col-lg-6">
              <img src="https://picsum.photos/seed/bookstore/600/400" alt="hero" className="img-fluid rounded" />
            </div>
          </div>
        </section>

        {/* Book Section */}
        <section id="book" className="album py-5 bg-light">
          <div className="container">
            <h2 className="text-center mb-4">Buku Terlaris</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
              {[...Array(6)].map((_, i) => (
                <div className="col" key={i}>
                  <div className="card shadow-sm">
                    <img src={`https://picsum.photos/seed/book${i}/300/200`} className="card-img-top" alt="book" />
                    <div className="card-body">
                      <h5 className="card-title">Judul Buku {i + 1}</h5>
                      <p className="card-text">Deskripsi singkat buku yang menarik untuk dibaca oleh semua kalangan.</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <button className="btn btn-sm btn-primary">Buy</button>
                        <small className="text-muted">Rp{(i + 1) * 25000}</small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-5 bg-white">
          <div className="container text-center">
            <h2 className="mb-4">Tim Kami</h2>
            <div className="row">
              {['Zahrah', 'Hayat', 'Arka', 'Putri'].map((name, i) => (
                <div className="col-md-4 mb-4" key={i}>
                  <div className="card">
                    <img src={`https://picsum.photos/seed/team${i}/300/300`} className="card-img-top rounded-circle p-3" alt={name} />
                    <div className="card-body">
                      <h5 className="card-title">{name}</h5>
                      <p className="card-text">Developer handal yang membangun platform ini dengan penuh semangat dan kopi hitam (tapi boong soalnya aku suka matcha).</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-5 bg-light">
          <div className="container">
            <h2 className="text-center mb-4">Hubungi Kami</h2>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Nama</label>
                    <input type="text" className="form-control" placeholder="Masukkan nama kamu" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder="email@example.com" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Pesan</label>
                    <textarea className="form-control" rows="4" placeholder="Tulis pesan kamu di sini..."></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Kirim</button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-4 border-top mt-5 text-center">
          <p className="mb-0 text-muted">&copy; 2025 NF Academy - Arka. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default App;
