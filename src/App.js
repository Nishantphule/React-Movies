import { Routes, Route, useParams, Navigate } from "react-router-dom";
import { AddColor } from './AddColor';
import './App.css';
import {Counter} from './Counter.js'
import { Home } from "./Home";
import { Movies } from './Movies.js';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as React from 'react';
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import { Toolbar } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const INITIAL_MOVIE_buttonST = [
  {
    pic: "https://gospeljingle.com/wp-content/uploads/2022/01/Pushpa_-The-Rise-2021.jpg",
    title: "Pushpa:The Rise - Part 1",
    rating: "7.6",
    url:"https://www.youtube.com/embed/pKctjlxbFDQ ",
    description: "Story of Pushpa Raj, a lorry driver in Seshachalam forests of South India, set in the backdrop of red sandalwood smuggbuttonng. Red Sandalwood is endemic to South-Eastern Ghats (mountain range) of India."
  },
  {
    pic: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/348fa1129695937.61705209953c0.jpg",
    title: "The Batman",
    rating: "8.0",
    url:"https://www.youtube.com/embed/mqqft2x_Aa4",
    description: "When the Riddler, a sadistic serial killer, begins murdering key pobuttontical figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement."
  },
  {
    pic: "https://m.media-amazon.com/images/M/MV5BYzJmYzExZGEtMTUwYy00YzIyLWJmOTEtZWFkNTU0YThlYzdmXkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_.jpg",
    title: "K.G.F: Chapter 1",
    rating: "8.2",
    url:"https://www.youtube.com/embed/-KfsY-qwBS0",
    description: "In the 1970s, a gangster goes undercover as a slave to assassinate the owner of a notorious gold mine."
  },
  {
    pic: "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg",
    title: "Spider-Man: No Way Home",
    rating: "8.4",
    url:"https://www.youtube.com/embed/JfVOs4VSpmA",
    description: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man."
  },
  {
    pic: "https://m.media-amazon.com/images/M/MV5BOWE5ZjljZDEtYTZmNy00MGVlLWJjNjEtMWUwMzUyMDc5NTA3XkEyXkFqcGdeQXVyODgzMDMwODI@._V1_.jpg",
    title: "Bachchhan Paandey",
    rating: "6.8",
    url:"https://www.youtube.com/embed/cpNaGiBhXiM",
    description: "A budding director tries to research a merciless gangster for making a film on gangster-ism. But her secret attempts to conduct the research fail when she gets caught for snooping."
  },
  {
    pic: "https://m.media-amazon.com/images/I/61zgu8mImuL._AC_SY606_.jpg",
    title: "Joker",
    rating: "8.4",
    url:"https://www.youtube.com/embed/zAGVQLHvwOY",
    description: "A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain."
  },
  {
    pic: "https://m.media-amazon.com/images/M/MV5BYmQxNmU4ZjgtYzE5Mi00ZDlhLTlhOTctMzJkNjk2ZGUyZGEwXkEyXkFqcGdeQXVyMzgxMDA0Nzk@._V1_.jpg",
    title: "Tumbbad",
    rating: "8.2",
    url:"https://www.youtube.com/embed/sN75MPxgvX8",
    description: "A mythological story about a goddess who created the entire universe. The plot revolves around the consequences when humans build a temple for her first-born."
  },
  {
    pic: "https://m.media-amazon.com/images/M/MV5BOWE1ZTMyM2QtMTNhNC00M2ZhLTg5ZTctNGZmZDM4YWQ5N2YwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    title: "Godzilla vs. Kong",
    rating: "6.3",
    url:"https://www.youtube.com/embed/odM92ap8_c0",
    description: "The epic next chapter in the cinematic Monsterverse pits two of the greatest icons in motion picture history against each other--the fearsome Godzilla and the mighty Kong--with humanity caught in the balance."
  },
  {
    pic: "https://m.media-amazon.com/images/M/MV5BYzE3ODhiNzAtOWY4MS00NTdiLThmNDctNDM4NjRiNGFmYjI1XkEyXkFqcGdeQXVyMTI2ODM1ODUw._V1_.jpg",
    title: "Tom & Jerry: The Movie",
    rating: "5.2",
    url:"https://www.youtube.com/embed/kP9TfCWaQT4",
    description: "A chaotic battle ensues between Jerry Mouse, who has taken refuge in the Royal Gate Hotel, and Tom Cat, who is hired to drive him away before the day of a big wedding arrives."
  },
  {
    pic: "https://m.media-amazon.com/images/M/MV5BN2I2Yzc2OWMtMWQzYi00ZDcxLTgyOTMtNjBiNzA5Y2QxZDYxXkEyXkFqcGdeQXVyMTM0NTc2NDgw._V1_.jpg",
    title: "Venom: Let There Be Carnage",
    rating: "6.0",
    url:"https://www.youtube.com/embed/-ezfi6FQ8Ds",
    description: "Eddie Brock attempts to reignite his career by interviewing serial killer Cletus Kasady, who becomes the host of the symbiote Carnage and escapes prison after a failed execution."
  }
];

function App() {
  const [list, setList] = useState(INITIAL_MOVIE_buttonST);
  const navigate = useNavigate();

  return (
    <div className="App">
      <AppBar className="navigate-bar" position="static" color="primary">
      <Toolbar>
      <button onClick={() => navigate("/")} >
            HOME
          </button >
          <button onClick={() => navigate("/movies")} >
          MOVIES
          </button>
          <button onClick={() => navigate("/addmovies")} >
          ADD MOVIES
          </button>
          <button onClick={() => navigate("/color")} >
          COLOR GAME
          </button>
      </Toolbar>
        </AppBar>
        


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movieapp list={list} setList={setList}/>} />
        <Route path="/movies/:id" element={<MovieDetails list={list} setList={setList}/>} />
        <Route path="/addmovies" element={<AddMovie list={list} setList={setList}/>} />
        <Route path="/user" element={<User />} />
        <Route path="/color" element={<AddColor />} />
        <Route path="*" element={<Navigate replace to ="/404" />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </div>
  );
}

function AddMovie({list, setList}) {
  const [Add, setMovie] = useState({pic:"",title:'',rating:"",description:"",url:""});
  const styles = {
    color: "green"
  };
  Add.rating > 7 ?
    styles.color = "green" :
    styles.color = "red";

  return (
    <div className='add-movie'>
      <TextField className="input" onChange={(e => setMovie({ ...Add, pic: e.target.value }))} id="filled-basic" label="Enter poster url" variant="filled" />
      <TextField className="input" onChange={(e => setMovie({ ...Add, title: e.target.value }))} id="filled-basic" label="Enter movie Title" variant="filled" />
      <TextField className="input" onChange={(e => setMovie({ ...Add, rating: e.target.value }))} id="filled-basic" label="Enter movie Rating" variant="filled" />
      <TextField className="input" onChange={(e => setMovie({ ...Add, description: e.target.value }))} id="filled-basic" label="Enter movie Description" variant="filled" />
      <TextField className="input" onChange={(e => setMovie({ ...Add, url: e.target.value }))} id="filled-basic" label="Enter movie Trailer url" variant="filled" />
      <Button className="add" onClick={() => setList([...list, Add])} variant="contained">Add Movie</Button>
      {/* <div className='main-container'>
      {list.map((data ,index) => (<Movies movie={data} id={index} />))}
    </div> */}
    </div>
  );
}


function Movieapp({list}) {

  return (
    <div className='main-container'>
      {list.map((data ,index) => (<Movies movie={data} id={index} />))}
    </div>
  );
}

function NotFound(){
  return(
    <div>
      <h1>404 Not Found</h1>
    </div>
  )
}

function MovieDetails({list}){

  const { id } = useParams()
  const movie = list[id];
  const styles = {
    color: "green"
  };
  movie.rating > 7 ?
    styles.color = "green" :
    styles.color = "red";
  return(
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
        <p className='summary' >{movie.description}</p>
        <Backbtn/>
      </div>
    </div>
  );
}

function Backbtn(){
  const navigate = useNavigate();
  return(
    <div className="back-btn">
      <Button onClick={() => navigate(-1)} variant="contained"><ArrowBackIosIcon/> BACK</Button>
    </div>
  )
}

function User(){
  const users = [
   {
     name: "Vaibhav",
     pic: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
   },
   {
     name: "Tejaswini",
     pic: "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixbuttonb=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
   },
   {
     name: "Shreyas",
     pic: "https://1.bp.blogspot.com/-OUtpaIR5QhI/YTuyWw8XvtI/AAAAAAAAuUk/ZtNLZvNSoL8pyaYESOjwReXEhYu1zFltgCLcBGAsYHQ/s1536/Best-Profile-Pic-For-Boys%2B%252813%2529.jpg",
   },
 ];
 return (
   <div className='users'>
     {users.map(nm => <Msg name={nm.name} pic={nm.pic}/> )}
   </div>
 )
}


function Msg({name,pic}){
 return  (
    <div className="msg">
     <img className="profilepic1" src ={pic} alt="Profile" />
     <h1> Hello {name} ❤</h1>
     < Counter/>
    </div>
 );
}

export default App;
