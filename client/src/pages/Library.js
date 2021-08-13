import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from '../api';
import BookList from '../components/BookList';

export default function Library() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    (async () => {
      await api.getAllBooks()
        .then(books => {
          setBooks(books.data.data)
        })
    })()
  })

  return (
    <div className="home-container">

      <main className="page-header-container">
        <img src="/storial-logo.png" alt="Storial Logo" className="header-logo" />
        <h1 className="page-header-title">
          Your Library
        </h1>
      </main>

      { !books && <div>Loading...</div>}
      { books && <BookList books={books} />}


      <section className="page-navbar px-4 ">
        <Link to="/" >
          <button className="page-btn">home</button>
        </Link>

        <Link to="/books/create" >
          <button className="page-btn">quick add book</button>
        </Link>
      </section>

      <footer className="footer-container">
        <a
          className="flex items-center justify-center"
          href="https://www.linkedin.com/in/jamesespy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Handmade artisanal app by James Espy
        </a>
      </footer>
    </div>
  )
}
