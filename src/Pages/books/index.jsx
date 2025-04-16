import React, { useState, useEffect } from "react";
import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";
import ProductList from "../../components/shared/ProductList";
import booksData from "../../Utils/books"; // ambil data dari file utils

export default function Books() {
    const [books, setBooks] = useState([]);

    // ambil data dari books.js saat komponen pertama kali dimuat
    useEffect(() => {
        setBooks(booksData);
    }, []);

    return (
        <>
            <Header />
            <div className="container mt-5">
                <h2 className="text-center mb-4">Daftar Buku</h2>
                <ProductList books={books} />
            </div>
            <Footer />
        </>
    );
}


// Pake konsep Single page app