import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Counter } from './Counter.js';


export function Movies({ movie,id }) {
  const styles = {
    color: "green"
  };
  movie.rating > 7 ?
    styles.color = "green" :
    styles.color = "red";

  const [show, setShow] = useState(true);

  // const paraStyles = {
  //   display: show? "block" : "none"
  // }
  const navigate = useNavigate();
  return (
    <div className='movie'>
      <img className="profilepic" src={movie.pic} alt={movie.title} /> <br></br>
      <div className='head'>
        <h1 className='title'>{movie.title}</h1>
        <p style={styles} className='rating'>⭐{movie.rating}</p>
      </div>
      <button onClick={() => navigate("/movies/"+ id)} className="btn-info btnn">Info</button>
      <button onClick={() => setShow(!show)} className="btn-sum btnn">Toggle Summary</button>
      {/* <p className='summary' style={paraStyles} >{movie.description}</p> */}
      {show ? (<p className='summary'>{movie.description}</p>) : ""}

      <Counter />
    </div>
  );
}
