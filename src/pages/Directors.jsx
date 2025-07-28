import { useState, useEffect } from "react";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then((response) => response.json())
      .then((data) => setDirectors(data))
      .catch((error) => console.error("Error fetching directors:", error));
  }, []);

  return (
    <div>
      <header>
        <nav className="navbar">
          <a href="/">Home</a>
          <a href="/directors" className="active" aria-current="page">
            Directors
          </a>
          <a href="/actors">Actors</a>
        </nav>
        <h1>Directors Page</h1>
      </header>
      <main>
        {directors.map((director) => (
          <article key={director.name}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie) => (
                <li key={movie}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </div>
  );
}

export default Directors;