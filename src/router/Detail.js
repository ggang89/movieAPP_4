import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function Detail() {
  const {movie_Id} = useParams
  const [loading, setLoading] = useState(true)
  const [movie, setMovie] =useState({})
  const getMovie = async() => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${movie_Id}`
    );
    const json = await response.json();
    setLoading(false);
    setMovie();
    console.log(json)
  }
  useEffect(() => {
    getMovie();
  })
  return (
    <>
      {loading ? <h1>wait...Loading..🐧</h1> : (
        <>
        {movie}
        </>
    )}
    </>
  )
}