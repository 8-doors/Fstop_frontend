import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import PropTypes from "prop-types";

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    fetch('https://fstop-744b7969db99.herokuapp.com/movies')
      .then((response) => response.json())
      .then((data) => {
        const moviesFromApi = data.map((doc) => {
          return {
            id: doc.key,
            title: doc.Title,
            genre: doc.Genre,
            description: doc.Description,
            image: doc.ImagePath,
            director: doc.Director
          };
        });
        setMovies(moviesFromApi)
      });
  }, []);

  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

// add a function to change out the login button when the user is logged in with said users username which will redirect to the user view.

  return (
    <div>
      <div
        onClick={() => {
          return (
            <LoginView 
            onLoggedIn={(user, token) => {
              setUser(user);
              setToken(token);
            }}
            />
          )
        }}
      >Login
      </div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
      <button onClick={() => { setUser(null); setToken(null); localStorage.clear(); }}>Logout</button>
    </div>
  );
};

MainView.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
    director: PropTypes.string
  }).isRequired,
  onBackClick: PropTypes.func.isRequired,
  onMovieClick: PropTypes.func.isRequired,
  setMovies: PropTypes.func.isRequired,
  selectedMovie: PropTypes.func.isRequired,
  setSelectedMovie: PropTypes.func.isRequired
}