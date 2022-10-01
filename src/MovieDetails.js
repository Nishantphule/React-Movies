import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import * as React from 'react';
import { Backbtn } from "./Backbtn";
import {API} from "./global"

export function MovieDetails() {

  const { id } = useParams();

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(`${API}/movies/${id}`, {
      method: "GET"
    })
      .then((data) => data.json())
      .then((movies) => setMovie(movies));

  }, [id]);

  const styles = {
    color: "green"
  };
  movie.rating > 7 ?
    styles.color = "green" :
    styles.color = "red";
    
  return (
    <div className="main-container-info">
      <div className='movie-info'>
        <iframe
          width="100%"
          height="700"
          src={movie.url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className='head-info'>
          <h1 className='title'>{movie.title}</h1>
          <p className='rating' style={styles}>⭐{movie.rating}</p>
        </div>
        <p className='summary'>{movie.description}</p>
        <Backbtn />
      </div>
    </div>
  );
}
