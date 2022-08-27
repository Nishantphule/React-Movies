import { Routes, Route, Navigate } from "react-router-dom";
import { AddColor } from './AddColor';
import './App.css';
import { Home } from "./Home";
import { useNavigate } from 'react-router-dom';
import { useState} from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import { Toolbar } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import AddIcon from '@mui/icons-material/Add';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { NotFound } from "./NotFound";
import { User } from "./User";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { MovieDetails } from "./MovieDetails";
import { MovieEdit } from "./MovieEdit";
import { AddMovie } from "./AddMovie";
import { Movieapp } from "./Movieapp";
import Login from "./Login";
import Signup from "./Signup";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const INITIAL_MOVIE_buttonST = [
  {
    id: "100",
    pic: "https://gospeljingle.com/wp-content/uploads/2022/01/Pushpa_-The-Rise-2021.jpg",
    title: "Pushpa:The Rise - Part 1",
    rating: "7.6",
    url: "https://www.youtube.com/embed/pKctjlxbFDQ ",
    description:
      "Story of Pushpa Raj, a lorry driver in Seshachalam forests of South India, set in the backdrop of red sandalwood smuggbuttonng. Red Sandalwood is endemic to South-Eastern Ghats (mountain range) of India.",
  },
  {
    id: "101",
    pic: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/348fa1129695937.61705209953c0.jpg",
    title: "The Batman",
    rating: "8.0",
    url: "https://www.youtube.com/embed/mqqft2x_Aa4",
    description:
      "When the Riddler, a sadistic serial killer, begins murdering key pobuttontical figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
  },
  {
    id: "102",
    pic: "https://m.media-amazon.com/images/M/MV5BYzJmYzExZGEtMTUwYy00YzIyLWJmOTEtZWFkNTU0YThlYzdmXkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_.jpg",
    title: "K.G.F: Chapter 1",
    rating: "8.2",
    url: "https://www.youtube.com/embed/-KfsY-qwBS0",
    description:
      "In the 1970s, a gangster goes undercover as a slave to assassinate the owner of a notorious gold mine.",
  },
  {
    id: "103",
    pic: "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg",
    title: "Spider-Man: No Way Home",
    rating: "8.4",
    url: "https://www.youtube.com/embed/JfVOs4VSpmA",
    description:
      "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
  },
  {
    id: "104",
    pic: "https://m.media-amazon.com/images/M/MV5BOWE5ZjljZDEtYTZmNy00MGVlLWJjNjEtMWUwMzUyMDc5NTA3XkEyXkFqcGdeQXVyODgzMDMwODI@._V1_.jpg",
    title: "Bachchhan Paandey",
    rating: "6.8",
    url: "https://www.youtube.com/embed/cpNaGiBhXiM",
    description:
      "A budding director tries to research a merciless gangster for making a film on gangster-ism. But her secret attempts to conduct the research fail when she gets caught for snooping.",
  },
  {
    id: "105",
    pic: "https://m.media-amazon.com/images/I/61zgu8mImuL._AC_SY606_.jpg",
    title: "Joker",
    rating: "8.4",
    url: "https://www.youtube.com/embed/zAGVQLHvwOY",
    description:
      "A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.",
  },
  {
    id: "106",
    pic: "https://m.media-amazon.com/images/M/MV5BYmQxNmU4ZjgtYzE5Mi00ZDlhLTlhOTctMzJkNjk2ZGUyZGEwXkEyXkFqcGdeQXVyMzgxMDA0Nzk@._V1_.jpg",
    title: "Tumbbad",
    rating: "8.2",
    url: "https://www.youtube.com/embed/sN75MPxgvX8",
    description:
      "A mythological story about a goddess who created the entire universe. The plot revolves around the consequences when humans build a temple for her first-born.",
  },
  {
    id: "107",
    pic: "https://m.media-amazon.com/images/M/MV5BOWE1ZTMyM2QtMTNhNC00M2ZhLTg5ZTctNGZmZDM4YWQ5N2YwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    title: "Godzilla vs. Kong",
    rating: "6.3",
    url: "https://www.youtube.com/embed/odM92ap8_c0",
    description:
      "The epic next chapter in the cinematic Monsterverse pits two of the greatest icons in motion picture history against each other--the fearsome Godzilla and the mighty Kong--with humanity caught in the balance.",
  },
  {
    id: "108",
    pic: "https://m.media-amazon.com/images/M/MV5BYzE3ODhiNzAtOWY4MS00NTdiLThmNDctNDM4NjRiNGFmYjI1XkEyXkFqcGdeQXVyMTI2ODM1ODUw._V1_.jpg",
    title: "Tom & Jerry: The Movie",
    rating: "5.2",
    url: "https://www.youtube.com/embed/kP9TfCWaQT4",
    description:
      "A chaotic battle ensues between Jerry Mouse, who has taken refuge in the Royal Gate Hotel, and Tom Cat, who is hired to drive him away before the day of a big wedding arrives.",
  },
  {
    id: "109",
    pic: "https://m.media-amazon.com/images/M/MV5BN2I2Yzc2OWMtMWQzYi00ZDcxLTgyOTMtNjBiNzA5Y2QxZDYxXkEyXkFqcGdeQXVyMTM0NTc2NDgw._V1_.jpg",
    title: "Venom: Let There Be Carnage",
    rating: "6.0",
    url: "https://www.youtube.com/embed/-ezfi6FQ8Ds",
    description:
      "Eddie Brock attempts to reignite his career by interviewing serial killer Cletus Kasady, who becomes the host of the symbiote Carnage and escapes prison after a failed execution.",
  },
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
          <Button variant="inherit" onClick={() => navigate("/signup")}><AccountCircleIcon />{}</Button>
      </div>


<div className="menu">
<AccountCircleIcon onClick={() => navigate("/signup")}/>
<MenuOutlinedIcon onClick={() => setShow(!show)} />
</div>

      
      
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
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
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


export default App;
