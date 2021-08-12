import { Link, useHistory } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import api from '../api';

export default function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [notes, setNotes] = useState('');
  const history = useHistory();
  
  //upon render, apply focus to title field
  const titleField = useRef(null);
  useEffect(() =>{
    titleField.current.focus();
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { title, author, notes };

    await api.insertBook(payload)
    .then(res => {
      history.push('/books/list')
    })
  }

  return (
    <div className="page-container">

      <main className="page-header-container">
        <img src="/storial-logo.png" alt="Storial Logo" className="w-1/5" />
        <h1 className="page-header-title">
          Your Library
        </h1>
      </main>

      <form className="flex flex-col" onSubmit={handleSubmit} >
        <label class="block text-gray-700 text-sm font-bold mb-2" for="title" >
          Title
        </label>
        <input 
          type="text" 
          name="title" 
          ref={titleField}
          id="title" 
          className="textfield focus:outline-none focus:shadow-outline" 
          required
          value={title}
          onChange={ (e) => setTitle(e.target.value)}
        />
        <label>
          Author
        </label>
        <input 
          type="text" 
          name="Author" 
          id="Author" 
          className="textfield focus:outline-none focus:shadow-outline" 
          required
          value={author}
          onChange={ (e) => setAuthor(e.target.value)}
        />
        <label>
          Notes
        </label>
        <textarea 
          name="Notes" 
          id="Notes" 
          className="textfield focus:outline-none focus:shadow-outline h-28" 
          required
          value={notes}
          onChange={ (e) => setNotes(e.target.value)}
        />
        <input 
          type="submit" 
          value="Add Book" 
          className="submit-btn" 
        />
      </form>

      <section className="page-navbar">
        <Link to="/" className="m-10">
          <button className="page-btn">home</button>
        </Link>

        <Link to="/books/list" className="m-10">
          <button className="page-btn">view library</button>
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