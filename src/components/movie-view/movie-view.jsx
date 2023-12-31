import PropTypes from "prop-types";

export const MovieView = ({ movie, onBackClick }) => {
    return (
      <div>
        
        <div>
          <h1>{movie.title}</h1>
        </div>
        <div>
          <img src={movie.image} className="moviePoster"/>
        </div>
        <div>
          <span>Genre: </span>
          <span>{movie.genre}</span>
        </div>
        <div>
          <span>Director: </span>
          <span>{movie.director}</span>
        </div>
        <div>
          <span>Description: </span>
          <span>{movie.description}</span>
        </div>
        <button onClick={onBackClick}>Back</button>
      </div>
    );
  };

  MovieView.propTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string,
      director: PropTypes.string
    }).isRequired,
    onBackClick: PropTypes.func.isRequired
  }