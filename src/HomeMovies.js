import { Home } from './Home';
import { useState, useEffect } from 'react';
import * as React from 'react';
import {API} from "./global"

export function HomeMovies() {
  const [list, setList] = useState([]);

  const getMovies = () => {
    fetch(`${API}/movies`, {
      method: "GET"
    })
      .then((data) => data.json())
      .then((movies) => setList(movies));
  };

  useEffect(() => getMovies(), []);

  return (
    <div className='main-container-home'>
      {list.map((data) => (<Home
        key={data._id}
        movie={data}
        id={data._id}/>))}
    </div>
  );
}