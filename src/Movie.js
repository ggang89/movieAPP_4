import { Link } from "react-router-dom";

export default function Movie({id,img,title,rating,runtime,genres }) {
  
  return (
    <div className="movieBox">
      <img src={img} alt={title}></img>
      <h2>
        <Link to={`movie/${id}`}>{title}</Link>
      </h2>
      <p>rating:{rating}</p>
      <p>runtime: {runtime}</p>
      <ul>
        genres:{" "}
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}