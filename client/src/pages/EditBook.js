import { Link, useHistory, useParams } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import api from '../api';

export default function EditBook() {
  const { id } = useParams();
  const history = useHistory();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [notes, setNotes] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newNotes, setNewNotes] = useState('');
  const [isLoading, setIsLoading] = useState('');

  //load book data for initial render and apply focus to title field
  const titleField = useRef(null);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      await api.getBookById(id)
      .then(book => {
        setTitle(book.data.data.title);
        setAuthor(book.data.data.author);
        setNotes(book.data.data.notes);
        setIsLoading(false);
        titleField.current.focus();
      })          
    })()
  }, [])  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { }
    payload.title = newTitle ? newTitle : title;
    payload.author = newAuthor ? newAuthor : author;
    payload.notes = newNotes ? newNotes : notes;

    await api.updateBookById(id, payload)
    .then(res => {
      window.alert(`${newTitle} has been successfully updated`)
      history.push('/books/list');
    })
  }

  return (
    <div className="page-container">
      <main className="page-header-container">
        <img src="/storial-logo.png" alt="Storial Logo" className="w-1/5" />
        <h1 className="page-header-title">
          edit {title}
        </h1>
      </main>
      {isLoading &&
        <h2>Loading...</h2>
      }

      {!isLoading &&
      <form
        className="flex flex-col"
        onSubmit={handleSubmit}
      >
        <label class="block text-gray-700 text-sm font-bold mb-2" for="title" >
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          ref={titleField}
          className="textfield focus:outline-none focus:shadow-outline"
          required
          defaultValue={title}
          onChange={(e) => {
            setNewTitle(e.target.value)
          }}
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
          defaultValue={author}
          onChange={(e) => {
            setNewAuthor(e.target.value)
          }}
        />
        <label>
          Notes
        </label>
        <textarea
          name="Notes"
          id="Notes"
          className="textfield focus:outline-none focus:shadow-outline h-28"
          required
          defaultValue={notes}
          onChange={(e) => setNewNotes(e.target.value)}
        />
        <input
          type="submit"
          value="Update Book"
          className="submit-btn"
        />
      </form>}

      <section className="page-navbar">
        <Link to="/books/list" className="m-10">
          <button className="page-btn">view library</button>
        </Link>
        <Link to="/books/create" className="m-10">
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