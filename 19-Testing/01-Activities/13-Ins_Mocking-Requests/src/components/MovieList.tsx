import { useEffect, useState } from "react";

interface Movie {
  title: string;
  description: string;
  yearReleased: number;
  IMDbRating: number;
}

export default function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const response = await fetch("/api/movies");
    const data = await response.json();
    setMovies(data);
  };

  return (
    <div className="container p-4">
        <div className="text-center mt-5 p-5 bg-secondary rounded text-white">
          <h1>Movies</h1>
        </div>
        <div className="my-2 row text-center g-2">
          {movies.map((movie: Movie, index) => (
            <div key={index} className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="card-title">{movie.title}</h3>
                  <p className="card-text">{movie.description}</p>
                  <div>
                    <p className="released">Year Released: {movie.yearReleased}</p>
                    <p className="rating">IMDb Rating: {movie.IMDbRating}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    
  );
}
