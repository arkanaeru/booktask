import React, { useState } from "react";
import Header from "../components/shared/Header";
import Hero from "../components/shared/Hero";
import Footer from "../components/shared/Footer";
import Team from "../components/shared/Team";
import LoginForm from "../components/shared/LoginForm";
import BookCard from "../components/shared/Bookcard";
import booksData from "../Utils/books";

export default function Home() {
    const [bookList, setBookList] = useState(booksData);

    const handleAddBook = () => {
        const newBook = {
            id: bookList.length + 1,
            title: "Judul Baru",
            author: "Penulis Baru",
            year: 2025,
            description: "Deskripsi buku baru yang ditambahkan.",
            image: "https://via.placeholder.com/300x200", // bisa diganti gambar bebas
        };
        setBookList([...bookList, newBook]);
    };

    return (
        <>
            <Header />
            <Hero />

            {/* Rekomendasi Buku */}
            <section className="container py-5">
                <h2 className="text-center mb-4">Rekomendasi Buku</h2>

                <div className="text-center mb-4">
                    <button className="btn btn-success" onClick={handleAddBook}>
                        + Tambah Buku
                    </button>
                </div>

                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {bookList.map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>
            </section>

            <Team />
            <LoginForm />
            <Footer />
        </>
    );
}
