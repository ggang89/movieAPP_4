import { useEffect, useState } from "react";
import Movie from "../Movie";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    );
    const json = await response.json();
    setLoading(false);
    setMovies(json.data.movies);
    console.log(json);
    
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="wrap">
      {loading ? (
        <h1>Loading....🐧🐧🐧</h1>
      ) : (
        <>
            <h1 className="title">Movie App_4 🎥</h1>
          
          <div className="content">
            {movies.map((m) => (
              <Movie
                key={m.id}
                id={m.id}
                title={m.title}
                rating={m.rating}
                runtime={m.runtime}
                genres={m.genres}
                img={m.medium_cover_image}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
