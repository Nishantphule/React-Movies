import { Movies } from './Movies.js';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as React from 'react';
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export function Movieapp() {
  const navigate = useNavigate();
  const [list, setList] = useState([]);

  const getMovies = () => {
    fetch("https://6288bebc7af826e39e64a149.mockapi.io/movie", {
      method: "GET"
    })
      .then((data) => data.json())
      .then((movies) => setList(movies));
  };

  useEffect(() => getMovies(), []);

  const deleteMovie = (id) => {
    fetch("https://6288bebc7af826e39e64a149.mockapi.io/movie/" + id, {
      method: "DELETE"
    })
      .then((data) => data.json())
      .then(() => getMovies());
  };

  return (
    <div className='main-container'>
      {list.map((data) => (<Movies
        key={data.id}
        movie={data}
        id={data.id}
        editbtn={<IconButton title="Edit Movie" onClick={() => navigate("/movieedit/" + data.id)}><EditIcon color="primary" /></IconButton>}
        deletebtn={<IconButton title="Delete Movie" onClick={() => deleteMovie(data.id)}><DeleteIcon color="error" /></IconButton>} />))}
    </div>
  );
}
