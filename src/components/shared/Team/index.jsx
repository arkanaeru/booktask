export default function Team() {
    return (
        <>
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
        </>
    );
}