export default function Hero() {
    return (
        <>
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
        </>
    );
}