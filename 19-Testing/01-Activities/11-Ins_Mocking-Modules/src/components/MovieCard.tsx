import MovieDetails from './MovieDetails'

export interface MovieProps {
  movie: {
    title: string;
    description: string;
    yearReleased: number;
    IMDbRating: number;
  };
}

export default function MovieCard({ movie }: MovieProps) {
  return (
    <div className="col-md-4">
      <div className="card h-100">
        <div className="card-body">
          <h3 className="card-title">{movie.title}</h3>
          <p className="card-text">{movie.description}</p>
          <MovieDetails movie={movie} />
        </div>
      </div>
    </div>
  );
}
