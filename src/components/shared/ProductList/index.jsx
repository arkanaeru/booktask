export default function ProductList() {
    return (
        <>
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
        </>
    );
}