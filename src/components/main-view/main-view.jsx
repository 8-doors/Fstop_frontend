import { useState } from "react";
import { BookCard } from "../bookcard/book-card";
import { BookView } from "../book-view/book-view";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Once Upon a Time in Hollywood",
      image:
        "https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2019/06/once-upon-a-time-poster.jpg?ssl=1",
      director: "Quentin Tarantino"
    },
    {
      id: 2,
      title: "Kill Bill: Vol. 1",
      image:
        "https://image.tmdb.org/t/p/original/weNjkklUaVlZYb1ZlE00GLye6jg.jpg",
      director: "Quentin Tarantino"
    },
    {
      id: 3,
      title: "Spider-Man: Into the Spider-Verse",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkLd8Gx_3F1Ff-iUrKhCfDquQVkctpEn_eio0PPhsBcSa5G3p8",
      director: "Bob Persichetti"
    }
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <BookCard
          key={movie.id}
          movie={movie}
          onBookClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};
