import { MovieProps } from "./MovieCard";

export default function MovieDetails({ movie }: MovieProps) {
  return (
    <div>
      <p>Year Released: {movie.yearReleased}</p>
      <p>IMDb Rating: {movie.IMDbRating}</p>
    </div>
  );
}
