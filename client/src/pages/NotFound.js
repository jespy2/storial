import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <img src="/storial-logo.png" alt="Storial Logo" className="header-logo" />
      <h1 className="text-4xl font-bold text-gray-900">Bummer!</h1>
      <h3 className="text-xl font-bold text-gray-400">That page cannot be found</h3>
      <Link to="/">
        <button className="home-btn">Take me home!</button>
      </Link>
    </main>
  )
}