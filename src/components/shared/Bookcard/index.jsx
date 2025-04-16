import React from 'react';

export default function BookCard({ book }) {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={book.image} className="card-img-top" alt={book.title} />
        <div className="card-body">
          <h5 className="card-title">{book.title}</h5>
          <p className="card-text"><strong>Author:</strong> {book.author}</p>
          <p className="card-text"><strong>Year:</strong> {book.year}</p>
          <p className="card-text">{book.description}</p>
          <button className="btn btn-primary btn-sm w-100">Tambahkan</button>
        </div>
      </div>
    </div>
  );
}
