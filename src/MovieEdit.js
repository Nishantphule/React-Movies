import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Backbtn } from "./Backbtn";

export function MovieEdit() {

  const navigate = useNavigate();

  const { id } = useParams();

  const [movie, setMoviee] = useState([]);

  useEffect(() => {
    fetch(`https://6288bebc7af826e39e64a149.mockapi.io/movie/${id}`, {
      method: "GET"
    })
      .then((data) => data.json())
      .then((movies) => setMoviee(movies));

  }, [id]);

  const [Add, setMovie] = useState({ pic: movie.pic, title: movie.title, rating: movie.rating, description: movie.description, url: movie.url });

  const newMovie = (add) => {
    fetch(`https://6288bebc7af826e39e64a149.mockapi.io/movie/${id}`, {
      method: "PUT",
      body: JSON.stringify(add),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((data) => data.json())
      .then(() => navigate(-1));
  };

  return (
    <div className='add-movie'>
      <TextField className="input" onChange={(e => setMovie({ ...Add, pic: e.target.value }))} id="filled-basic" label="Enter poster url" variant="filled" placeholder={movie.pic} />
      <TextField className="input" onChange={(e => setMovie({ ...Add, title: e.target.value }))} id="filled-basic" label="Enter movie Title" variant="filled" placeholder={movie.title} />
      <TextField className="input" onChange={(e => setMovie({ ...Add, rating: e.target.value }))} id="filled-basic" label="Enter movie Rating" variant="filled" placeholder={movie.rating} />
      <TextField className="input" onChange={(e => setMovie({ ...Add, description: e.target.value }))} id="filled-basic" label="Enter movie Description" variant="filled" placeholder={movie.description} />
      <TextField className="input" onChange={(e => setMovie({ ...Add, url: e.target.value }))} id="filled-basic" label="Enter movie Trailer url" variant="filled" placeholder={movie.url} />
      <Button style={{ width: "20%" }} className="add" onClick={() => newMovie(Add)} color="secondary" variant="contained">UPDATE Movie</Button>
      <Backbtn />
    </div>
  );
}
