import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error("Error fetching movie:", error));
  }, [id]);

  if (!movie) {
    return (
      <div>
        <p>Movie not Found</p>
      </div>
    );
  }

  return (
    <div>
      <header>
        <nav className="navbar" role="navigation">
          <a href="/">Home</a>
          <a href="/directors">Directors</a>
          <a href="/actors">Actors</a>
        </nav>
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time} minutes</p>
        {movie.genres.map((genre) => (
          <span key={genre}>{genre}</span>
        ))}
      </main>
    </div>
  );
}

export default Movie;