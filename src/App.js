
import { useState } from 'react';
import './App.css';
import {Counter} from './Counter.js'

function App() {
  const movies = [
    {
    pic:"https://gospeljingle.com/wp-content/uploads/2022/01/Pushpa_-The-Rise-2021.jpg",
    title:"Pushpa:The Rise - Part 1",
    rating:"7.6",
    description:"Story of Pushpa Raj, a lorry driver in Seshachalam forests of South India, set in the backdrop of red sandalwood smuggling. Red Sandalwood is endemic to South-Eastern Ghats (mountain range) of India."
    },
    {
      pic:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/348fa1129695937.61705209953c0.jpg",
      title:"The Batman",
      rating:"8.0",
      description:"When the Riddler, a sadistic serial killer, begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement."
    },
    {
      pic:"https://m.media-amazon.com/images/M/MV5BZDNlNzBjMGUtYTA0Yy00OTI2LWJmZjMtODliYmUyYTI0OGFmXkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_FMjpg_UX1000_.jpg",
      title:"K.G.F: Chapter 1",
      rating:"8.2",
      description:"In the 1970s, a gangster goes undercover as a slave to assassinate the owner of a notorious gold mine."
    },
    {
      pic:"https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg",
      title:"Spider-Man: No Way Home",
      rating:"8.4",
      description:"With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man."
    },
    {
      pic:"https://m.media-amazon.com/images/M/MV5BOWE5ZjljZDEtYTZmNy00MGVlLWJjNjEtMWUwMzUyMDc5NTA3XkEyXkFqcGdeQXVyODgzMDMwODI@._V1_.jpg",
      title:"Bachchhan Paandey",
      rating:"6.8",
      description:"A budding director tries to research a merciless gangster for making a film on gangster-ism. But her secret attempts to conduct the research fail when she gets caught for snooping."
    },
    {
      pic:"https://m.media-amazon.com/images/I/61zgu8mImuL._AC_SY606_.jpg",
      title:"Joker",
      rating:"8.4",
      description:"A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain."
    },
    {
      pic:"https://m.media-amazon.com/images/M/MV5BYmQxNmU4ZjgtYzE5Mi00ZDlhLTlhOTctMzJkNjk2ZGUyZGEwXkEyXkFqcGdeQXVyMzgxMDA0Nzk@._V1_.jpg",
      title:"Tumbbad",
      rating:"8.2",
      description:"A mythological story about a goddess who created the entire universe. The plot revolves around the consequences when humans build a temple for her first-born."
    },
    {
      pic:"https://m.media-amazon.com/images/M/MV5BOWE1ZTMyM2QtMTNhNC00M2ZhLTg5ZTctNGZmZDM4YWQ5N2YwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      title:"Godzilla vs. Kong",
      rating:"6.3",
      description:"The epic next chapter in the cinematic Monsterverse pits two of the greatest icons in motion picture history against each other--the fearsome Godzilla and the mighty Kong--with humanity caught in the balance."
    },
    {
      pic:"https://m.media-amazon.com/images/M/MV5BYzE3ODhiNzAtOWY4MS00NTdiLThmNDctNDM4NjRiNGFmYjI1XkEyXkFqcGdeQXVyMTI2ODM1ODUw._V1_.jpg",
      title:"Tom & Jerry: The Movie",
      rating:"5.2",
      description:"A chaotic battle ensues between Jerry Mouse, who has taken refuge in the Royal Gate Hotel, and Tom Cat, who is hired to drive him away before the day of a big wedding arrives."
    },
    {
      pic:"https://m.media-amazon.com/images/M/MV5BN2I2Yzc2OWMtMWQzYi00ZDcxLTgyOTMtNjBiNzA5Y2QxZDYxXkEyXkFqcGdeQXVyMTM0NTc2NDgw._V1_.jpg",
      title:"Venom: Let There Be Carnage",
      rating:"6.0",
      description:"Eddie Brock attempts to reignite his career by interviewing serial killer Cletus Kasady, who becomes the host of the symbiote Carnage and escapes prison after a failed execution."
    }
  ]
  return (
    <div className="App">
      <div className='main-container'>
      {movies.map(data => <Movies movie={data}/> )}</div> 
      <div><AddMovie/></div>
    </div>
  );
}

function Movies({movie}){
  const styles = {
    color:"green"
  }
  movie.rating>7 ? 
    styles.color = "green" :
    styles.color = "red"

const [show , setShow] = useState(true);

    // const paraStyles = {
    //   display: show? "block" : "none"
    // }

  return  (
     <div className='movie'>
      <img className="profilepic" src ={movie.pic} alt={movie.title} /> <br></br>
      <div className='head'>
        <h1 className='title'>{movie.title}</h1>
        <p style={styles} className='rating'>⭐{movie.rating}</p>
      </div>
      <button onClick={() => setShow(!show)} className="btn">Toggle Summary</button>
      {/* <p className='summary' style={paraStyles} >{movie.description}</p> */}


      {show ? (<p className='summary' >{movie.description}</p>): "" }

      <Counter/>
     </div>
  );
 }

function AddMovie(){
  const [Add, setMovie] = useState({
    pic:"",
    title:"",
    rating:"",
    description:""
  })
  const styles = {
    color:"green"
  }
  Add.rating>7 ? 
    styles.color = "green" :
    styles.color = "red"

const [show , setShow] = useState(true);

    const paraStyles = {
      display: show? "block" : "none"
    }

    
  return(
    <div className='add-movie'>
    <input type="text" placeholder='Enter poster url' value={Add.pic} onChange={(e => setMovie({...Add,pic: e.target.value}))} ></input>
    <input type="text" placeholder='Enter movie name' value={Add.title} onChange={(e => setMovie({...Add,title: e.target.value}))}></input>
    <input type="text" placeholder='Enter movie rating' value={Add.rating} onChange={(e => setMovie({...Add,rating: e.target.value}))}></input>
    <input type="text" placeholder='Enter poster summary' value={Add.description} onChange={(e => setMovie({...Add,description: e.target.value}))}></input>
    <button>Add Movie</button>
    <div className='movie'>
      <img className="profilepic" src ={Add.pic} alt={Add.title} /> <br></br>
      <div className='head'>
        <h1 className='title'>{Add.title}</h1>
        <p style={styles} className='rating'>⭐{Add.rating}</p>
      </div>
      <button onClick={() => setShow(!show)} className="btn">Toggle Summary</button>
      <p className='summary' style={paraStyles} >{Add.description}</p>
     </div>
  </div>
  )
}


export default App;
