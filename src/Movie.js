export default function Movie({img,title,rating,runtime,genres }) {
  
  return (
    <div className="movieBox">
     <img src={img} alt={title}></img>
      <h2>{title}</h2>
      <p>rating:{rating}</p>
      <p>runtime: {runtime}</p>
      <ul>
        genres: {genres.map(g => (
          <li key={g}>{g}</li>
       ))}
      </ul>
    </div>
  );
}