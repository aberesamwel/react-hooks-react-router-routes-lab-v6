import { useState, useEffect } from "react";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/actors")
      .then((response) => response.json())
      .then((data) => setActors(data))
      .catch((error) => console.error("Error fetching actors:", error));
  }, []);

  return (
    <div>
      <header>
        <nav className="navbar">
          <a href="/">Home</a>
          <a href="/directors">Directors</a>
          <a href="/actors" className="active" aria-current="page">
            Actors
          </a>
        </nav>
      </header>
      <main>
        <h1>Actors Page</h1>
        {actors.map((actor) => (
          <article key={actor.name}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie) => (
                <li key={movie}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </div>
  );
}

export default Actors;