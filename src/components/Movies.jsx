import Movie from "./Movie";
export default function Movies({ movies = [] }) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {movies.length ? (
        movies.map((movie) => (
          <Movie
            key={movie.imdbID}
            title={movie.Title}
            imgUrl={movie.Poster}
            year={movie.Year}
            type={movie.Type}
          />
        ))
      ) : (
        <h4 className="text-3xl">Nothing found</h4>
      )}
    </div>
  );
}
