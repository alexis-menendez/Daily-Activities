import MovieCard from "./components/MovieCard";

const movies = [
  {
    title: "Psycho",
    description: "A secretary on the run for embezzlement takes refuge at a secluded California motel owned by a repressed man and his overbearing mother.",
    yearReleased: 1960,
    IMDbRating: 8.5,
  },
  {
    title: "The Shining",
    description: "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
    yearReleased: 1980,
    IMDbRating: 8.4,
  },
  {
    title: "The Exorcist",
    description: "When a young girl is possessed by a mysterious entity, her mother seeks the help of two Catholic priests to save her life.",
    yearReleased: 1973,
    IMDbRating: 8.1,
  },
];

function App() {
  
  return (
    <>
      <div className="container p-4">
        <div className="text-center mt-5 p-5 bg-secondary rounded text-white">
          <h1>Movies</h1>
        </div>
        <div className="my-2 row text-center g-2">
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App;
