import { useState } from "react";

// import the array of movie objects
import moviesData from "../movies-data.json";
import MovieCard from "./MovieCard";

//function component
function MovieList() {
  // Declare a state variable "movies"
  // and set the array from movies-data.json as the initial state
  const [movies, setMovies] = useState(moviesData);

  //when called the deleteMovie function passes the _id of that specific movie
  const deleteMovie = (movieId) => {
    //The function deleteMovie then filters the existing movies array
    //using the .filter() method, to remove the clicked movie: return movie._id !== movieId;.
    const filteredMovies = movies.filter((movie) => {
      //The filter() method will create a new array called filteredMovies
      //and exclude the clicked movie from that new array.
      return movie._id !== movieId;
    });

    //At last, the new filteredMovies array is set as the new state via the state updater function
    //setMovies. Updating the state (state variable) will cause the component to re-render:
    setMovies(filteredMovies);
  };

  /* 
            this is moved to the MovieCard component
            to extract component 
            <h3>{movie.title}</h3>
            <p>Director: {movie.director}</p>
            <p>Rating: {movie.IMDBRating}</p>
            <button
              onClick={() => deleteMovie(movie._id)}
              className="btn-delete"
            >
              Delete
            </button> */

  return (
    <div>
      <h2>Movie List</h2>
      {movies.map((movie) => {
        return (
          <MovieCard
            key={movie._id}
            movie={movie}
            clickToDelete={deleteMovie}
          />
        );
      })}
    </div>
  );
}

export default MovieList;
