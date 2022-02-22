function MovieCard(props) {
  //click to delete must also be passed form the parent component to the child as a prop
  const { movie, clickToDelete } = props;

  return (
    <div className="MovieCard">
      <h3>{movie.title}</h3>
      <p>Director: {movie.director}</p>
      <p>Rating: {movie.IMDBRating}</p>
      <button onClick={() => clickToDelete(movie._id)} className="btn-delete">
        Delete
      </button>
    </div>
  );
}

export default MovieCard;
