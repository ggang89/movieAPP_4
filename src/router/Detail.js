import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function Detail() {
  const { movie_Id } = useParams();
  const [loading, setLoading] = useState(true)
  const [movie, setMovie] =useState({})
  const getMovie = async() => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${movie_Id}`
    );
    const json = await response.json();
    setLoading(false);
    setMovie(json.data.movie);
    console.log(json)
  }
  useEffect(() => {
    getMovie();
  })
  return (
    <>
      {loading ? (
        <h1>...Loading...⏳</h1>
      ) : (
        <>
            <img src={movie.large_cover_image } alt={movie.title}></img>
            <h1>Title: {movie.title}</h1>
            <p>rating: {movie.rating} / 10.0 </p>
            <p>runtime: {movie.runtime}/min</p>
            <ul>genres:{movie.genres.map(g => (<li>{g}</li>)) }</ul>

            
        </>
      )}
    </>
  );
}