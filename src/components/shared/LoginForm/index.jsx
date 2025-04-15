export default function LoginForm() {
    return (
        <>
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

                            {/* Kontak tambahan */}
                            <div className="mt-4 text-center">
                                <p className="mb-2">📞 Hubungi kami di <strong>081234567</strong></p>
                                <a
                                    href="https://instagram.com/arkanaeru_"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-dark fs-4"
                                >
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
