export default function ProductList({ books }) {
    return (
        <section className="py-5 bg-light">
            <div className="container">
                <div className="row">
                    {books.map((book) => (
                        <div className="col-md-4 mb-4" key={book.id}>
                            <div className="card h-100">
                                <img
                                    src={book.image}
                                    className="card-img-top"
                                    alt={book.title}
                                    style={{ height: "200px", objectFit: "cover" }}
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{book.title}</h5>
                                    <p className="card-text">{book.description}</p>
                                    <p className="text-muted">Penulis: {book.author}</p>
                                    <p className="text-muted">Tahun: {book.year}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
