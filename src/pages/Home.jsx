import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  return (
    <div>
      <header>
        <nav className="navbar">
          <a href="/" className="active" aria-current="page">
            Home
          </a>
          <a href="/directors">Directors</a>
          <a href="/actors">Actors</a>
        </nav>
        <h1>Home Page</h1>
      </header>
      <main>
        {movies.map((movie) => (
          <article key={movie.id}>
            <h2>{movie.title}</h2>
            <Link to={`/movie/${movie.id}`}>View Info</Link>
          </article>
        ))}
      </main>
    </div>
  );
}

export default Home;