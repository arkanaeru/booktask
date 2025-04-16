import { Link } from 'react-router';

export default function Header() {
    // komponen dengan H besar jadi
    return (
        <>
            <header className="d-flex flex-wrap align-items-center justify-content-between py-3 mb-4 border-bottom">
                <div className="d-flex align-items-center mb-2 mb-md-0">
                    <i className="fa-solid fa-book fa-2xl" style={{ color: "#3f7d8d" }}></i>
                    <span className="ms-2 fs-4">Bookstore</span>
                </div>

                <ul className="nav mb-2 justify-content-center mb-md-0">
                    <li><Link to="/" className="nav-link px-3">Home</Link></li>
                    <li><Link to="/books" className="nav-link px-3">Book</Link></li>
                    <li><Link to="/team" className="nav-link px-3">Team</Link></li>
                    <li><Link to="/contact" className="nav-link px-3">Contact</Link></li>
                </ul>

                <div className="text-end">
                    <Link to= "/login">
                    <button type="button" className="btn btn-outline-primary me-2">Login</button>
                    </Link>
                    <button type="button" className="btn btn-primary">Register</button>
                </div>
                {/* ganti a href jadi Link to, gapake tag a tuh karena tag a tuh sifatnya ngerender ulang*/}
            </header>
        </>
    );
}