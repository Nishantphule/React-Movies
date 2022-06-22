import { Routes, Route, useParams, Navigate } from "react-router-dom";
import { AddColor } from './AddColor';
import './App.css';
import { Home } from "./Home";
import { Movies } from './Movies.js';
import { useNavigate } from 'react-router-dom';
import { useState ,useEffect} from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import { IconButton, Toolbar } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import HomeIcon from '@mui/icons-material/Home';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import AddIcon from '@mui/icons-material/Add';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { NotFound } from "./NotFound";
import { User } from "./User";
import EditIcon from '@mui/icons-material/Edit';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';


const INITIAL_MOVIE_buttonST = [
  {
    id:"100",
    pic: "https://gospeljingle.com/wp-content/uploads/2022/01/Pushpa_-The-Rise-2021.jpg",
    title: "Pushpa:The Rise - Part 1",
    rating: "7.6",
    url:"https://www.youtube.com/embed/pKctjlxbFDQ ",
    description: "Story of Pushpa Raj, a lorry driver in Seshachalam forests of South India, set in the backdrop of red sandalwood smuggbuttonng. Red Sandalwood is endemic to South-Eastern Ghats (mountain range) of India."
  },
  {
    id:"101",
    pic: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/348fa1129695937.61705209953c0.jpg",
    title: "The Batman",
    rating: "8.0",
    url:"https://www.youtube.com/embed/mqqft2x_Aa4",
    description: "When the Riddler, a sadistic serial killer, begins murdering key pobuttontical figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement."
  },
  {
    id:"102",
    pic: "https://m.media-amazon.com/images/M/MV5BYzJmYzExZGEtMTUwYy00YzIyLWJmOTEtZWFkNTU0YThlYzdmXkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_.jpg",
    title: "K.G.F: Chapter 1",
    rating: "8.2",
    url:"https://www.youtube.com/embed/-KfsY-qwBS0",
    description: "In the 1970s, a gangster goes undercover as a slave to assassinate the owner of a notorious gold mine."
  },
  {
    id:"103",
    pic: "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg",
    title: "Spider-Man: No Way Home",
    rating: "8.4",
    url:"https://www.youtube.com/embed/JfVOs4VSpmA",
    description: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man."
  },
  {
    id:"104",
    pic: "https://m.media-amazon.com/images/M/MV5BOWE5ZjljZDEtYTZmNy00MGVlLWJjNjEtMWUwMzUyMDc5NTA3XkEyXkFqcGdeQXVyODgzMDMwODI@._V1_.jpg",
    title: "Bachchhan Paandey",
    rating: "6.8",
    url:"https://www.youtube.com/embed/cpNaGiBhXiM",
    description: "A budding director tries to research a merciless gangster for making a film on gangster-ism. But her secret attempts to conduct the research fail when she gets caught for snooping."
  },
  {
    id:"105",
    pic: "https://m.media-amazon.com/images/I/61zgu8mImuL._AC_SY606_.jpg",
    title: "Joker",
    rating: "8.4",
    url:"https://www.youtube.com/embed/zAGVQLHvwOY",
    description: "A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain."
  },
  {
    id:"106",
    pic: "https://m.media-amazon.com/images/M/MV5BYmQxNmU4ZjgtYzE5Mi00ZDlhLTlhOTctMzJkNjk2ZGUyZGEwXkEyXkFqcGdeQXVyMzgxMDA0Nzk@._V1_.jpg",
    title: "Tumbbad",
    rating: "8.2",
    url:"https://www.youtube.com/embed/sN75MPxgvX8",
    description: "A mythological story about a goddess who created the entire universe. The plot revolves around the consequences when humans build a temple for her first-born."
  },
  {
    id:"107",
    pic: "https://m.media-amazon.com/images/M/MV5BOWE1ZTMyM2QtMTNhNC00M2ZhLTg5ZTctNGZmZDM4YWQ5N2YwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    title: "Godzilla vs. Kong",
    rating: "6.3",
    url:"https://www.youtube.com/embed/odM92ap8_c0",
    description: "The epic next chapter in the cinematic Monsterverse pits two of the greatest icons in motion picture history against each other--the fearsome Godzilla and the mighty Kong--with humanity caught in the balance."
  },
  {
    id:"108",
    pic: "https://m.media-amazon.com/images/M/MV5BYzE3ODhiNzAtOWY4MS00NTdiLThmNDctNDM4NjRiNGFmYjI1XkEyXkFqcGdeQXVyMTI2ODM1ODUw._V1_.jpg",
    title: "Tom & Jerry: The Movie",
    rating: "5.2",
    url:"https://www.youtube.com/embed/kP9TfCWaQT4",
    description: "A chaotic battle ensues between Jerry Mouse, who has taken refuge in the Royal Gate Hotel, and Tom Cat, who is hired to drive him away before the day of a big wedding arrives."
  },
  {
    id:"109",
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

  const [mode,setMode] = useState("light")

const Theme = createTheme({
  palette: {
    mode: mode,
  },
});
const [show, setShow] = useState(false);
  return (

    <ThemeProvider theme={Theme}>
      <Paper elevation={4} style={{ minHeight:"100vh", borderRadius:"0px" }}>
      <div className="App">
      <AppBar className="navigate-bar" position="static" color="primary">
      <Toolbar className="navbar">
      <div className="navbtn">
      <Button variant="inherit"  onClick={() => navigate("/")} >
        <HomeIcon/>HOME
        </Button >
          <Button variant="inherit"  onClick={() => navigate("/movies")} >
            <LocalMoviesIcon/>MOVIES
          </Button>
          <Button variant="inherit"  onClick={() => navigate("/addmovies")} >
          <AddIcon />ADD MOVIES
          </Button>
          <Button variant="inherit"  onClick={() => navigate("/color")} >
          <ColorLensIcon/>COLOR GAME
          </Button>
      </div>
      <div className="navbtn1">
          <Button  variant="inherit" onClick={() => setMode(mode === "light" ? "dark" : "light")}>
          {mode === "light" ?  <Brightness4Icon/> : <Brightness7Icon/>}{mode === "light" ?  "dark" : "light"} MODE
          </Button>
      </div>
      <MenuOutlinedIcon onClick={() => setShow(!show)} className="menu" />
      {show? <div className="navbtn-low">
      <Button variant="inherit"  onClick={() => navigate("/")} >
        <HomeIcon/>HOME
        </Button >
          <Button variant="inherit"  onClick={() => navigate("/movies")} >
            <LocalMoviesIcon/>MOVIES
          </Button>
          <Button variant="inherit"  onClick={() => navigate("/addmovies")} >
          <AddIcon />ADD MOVIES
          </Button>
          <Button variant="inherit"  onClick={() => navigate("/color")} >
          <ColorLensIcon/>COLOR GAME
          </Button>
          <div className="navbtn2">
          <Button  variant="inherit" onClick={() => setMode(mode === "light" ? "dark" : "light")}>
          {mode === "light" ?  <Brightness4Icon/> : <Brightness7Icon/>}{mode === "light" ?  "dark" : "light"} MODE
          </Button>
      </div>
      </div>:""}
      </Toolbar>
        </AppBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movieapp />} />
        <Route path="/movies/:id" element={<MovieDetails/>} />
        <Route path="/movieedit/:id" element={<MovieEdit/>} />
        <Route path="/addmovies" element={<AddMovie list={list} setList={setList}/>} />
        <Route path="/user" element={<User />} />
        <Route path="/color" element={<AddColor />} />
        <Route path="*" element={<Navigate replace to ="/404" />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </div>
    </Paper>
    </ThemeProvider>
  );
}


function AddMovie() {
  const navigate = useNavigate();
  const [Add, setMovie] = useState({pic:"",title:'',rating:"",description:"",url:""});
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
    .then(() => navigate(-1))
    }


  return (
    <div className='add-movie'>
      <TextField className="input" onChange={(e => setMovie({ ...Add, pic: e.target.value }))} id="filled-basic" label="Enter poster url" variant="filled" />
      <TextField className="input" onChange={(e => setMovie({ ...Add, title: e.target.value }))} id="filled-basic" label="Enter movie Title" variant="filled" />
      <TextField className="input" onChange={(e => setMovie({ ...Add, rating: e.target.value }))} id="filled-basic" label="Enter movie Rating" variant="filled" />
      <TextField className="input" onChange={(e => setMovie({ ...Add, description: e.target.value }))} id="filled-basic" label="Enter movie Description" variant="filled" />
      <TextField className="input" onChange={(e => setMovie({ ...Add, url: e.target.value }))} id="filled-basic" label="Enter movie Trailer url" variant="filled" />
      <Button style={{width:"20%"}} className="add" onClick={() => newMovie(Add)} variant="contained">Add Movie</Button>
    </div>
  );
}


function Movieapp() {
  const navigate = useNavigate();
  const [list, setList] = useState([]);

  const getMovies = () => {
    fetch("https://6288bebc7af826e39e64a149.mockapi.io/movie", {
      method: "GET"
    })
  .then((data) => data.json())
  .then((movies) => setList(movies))
  }

useEffect(() => getMovies(),[]);

  const deleteMovie = (id) => {
    fetch("https://6288bebc7af826e39e64a149.mockapi.io/movie/"+id, {
      method: "DELETE"
    })
  .then((data) => data.json())
  .then(() => getMovies())
}

  return (
    <div className='main-container'>
      {list.map((data) => (<Movies 
      key={data.id} 
      movie={data} 
      id={data.id}
      editbtn={<IconButton title="Edit Movie" onClick={() => navigate("/movieedit/"+ data.id)}><EditIcon color="primary"/></IconButton>} 
      deletebtn={<IconButton title="Delete Movie"  onClick={() => deleteMovie(data.id)}><DeleteIcon color="error"/></IconButton>}
/>))}
    </div>
  );
}


function MovieEdit(){

  const navigate = useNavigate();

  const { id } = useParams()

  const [movie, setMoviee] = useState([]);

  useEffect(() => {
    fetch(`https://6288bebc7af826e39e64a149.mockapi.io/movie/${id}`, {
      method: "GET"
    })
  .then((data) => data.json())
  .then((movies) => setMoviee(movies))
  
  }, [id])

  const [Add, setMovie] = useState({pic:movie.pic,title:movie.title,rating:movie.rating,description:movie.description,url:movie.url});

    const newMovie = (add) => {
      fetch(`https://6288bebc7af826e39e64a149.mockapi.io/movie/${id}`, {
      method: "PUT",
      body: JSON.stringify(add),
      headers: {
      "Content-Type": "application/json",
    },
    }).then((data) => data.json())
    .then(() => navigate(-1))
    }

  return (
    <div className='add-movie'>
      <TextField className="input" onChange={(e => setMovie({ ...Add, pic: e.target.value }))} id="filled-basic" label="Enter poster url" variant="filled" placeholder={movie.pic}/>
      <TextField className="input" onChange={(e => setMovie({ ...Add, title: e.target.value }))} id="filled-basic" label="Enter movie Title" variant="filled" placeholder={movie.title}/>
      <TextField className="input" onChange={(e => setMovie({ ...Add, rating: e.target.value }))} id="filled-basic" label="Enter movie Rating" variant="filled" placeholder={movie.rating}/>
      <TextField className="input" onChange={(e => setMovie({ ...Add, description: e.target.value }))} id="filled-basic" label="Enter movie Description" variant="filled" placeholder={movie.description}/>
      <TextField className="input" onChange={(e => setMovie({ ...Add, url: e.target.value }))} id="filled-basic" label="Enter movie Trailer url" variant="filled" placeholder={movie.url}/>
      <Button style={{width:"20%"}} className="add" onClick={() => newMovie(Add)} color="secondary" variant="contained">UPDATE Movie</Button>
      <Backbtn/>
    </div>
  );
}


function MovieDetails(){

  const { id } = useParams()

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(`https://6288bebc7af826e39e64a149.mockapi.io/movie/${id}`, {
      method: "GET"
    })
  .then((data) => data.json())
  .then((movies) => setMovie(movies))
  
  }, [id])

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


export default App;
