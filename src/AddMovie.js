import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function AddMovie() {
  const navigate = useNavigate();
  const [Add, setMovie] = useState({ pic: "", title: '', rating: "", description: "", url: "" });
  const styles = {
    color: "green"
  };
  Add.rating > 7 ?
    styles.color = "green" :
    styles.color = "red";

  const newMovie = (add) => {
    fetch("https://6288bebc7af826e39e64a149.mockapi.io/movie", {
      method: "POST",
      body: JSON.stringify(add),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((data) => data.json())
      .then(() => navigate("/movies"));
  };


  return (
    <div className='add-movie'>
      <TextField className="input" onChange={(e => setMovie({ ...Add, pic: e.target.value }))} id="filled-basic" label="Enter poster url" variant="filled" />
      <TextField className="input" onChange={(e => setMovie({ ...Add, title: e.target.value }))} id="filled-basic" label="Enter movie Title" variant="filled" />
      <TextField className="input" onChange={(e => setMovie({ ...Add, rating: e.target.value }))} id="filled-basic" label="Enter movie Rating" variant="filled" />
      <TextField className="input" onChange={(e => setMovie({ ...Add, description: e.target.value }))} id="filled-basic" label="Enter movie Description" variant="filled" />
      <TextField className="input" onChange={(e => setMovie({ ...Add, url: e.target.value }))} id="filled-basic" label="Enter movie Trailer url" variant="filled" />
      <Button style={{ width: "20%" }} className="add" onClick={() => newMovie(Add)} variant="contained">Add Movie</Button>
    </div>
  );
}
