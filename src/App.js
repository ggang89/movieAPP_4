import { useEffect, useState } from 'react';
import './App.css';
import Movie from './Movie';

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`);
    const json = await response.json();
    setLoading(false);
    setMovies(json.data.movies);
    console.log(json)
  };
  useEffect (() => {
    getMovies();
  },[]);


  return (
    <div>
      <>
        {loading ? (
          <h1>Loading....🐧🐧🐧</h1>
        ) : (
          <>
              <h1>Movie App_4 🎥</h1>
              {movies.map((m) => (
                <Movie
                  key={m.id}
                  title={m.title}
                  rating={m.rating}
                  runtime={m.runtime}
                  genres={m.genres}
                  img={ m.medium_cover_image} />
             ))}
          </>
        )}
      </>
    </div>
  );
}

export default App;
