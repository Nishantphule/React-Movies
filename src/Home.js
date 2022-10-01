import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Card, CardContent } from '@mui/material';


export function Home({ movie,id }) {
  const styles = {
    color: "green"
  };
  movie.rating > 7 ?
    styles.color = "green" :
    styles.color = "red";

  const [show, setShow] = useState(true);

  return (
    <Card className='movie-home' key={id}>
      <img className="profilepic-home" src={movie.pic} alt={movie.title} /> <br></br>
      <CardContent>
      <div className='head'>
        <h1 className='title'>
          {movie.title} 
         <IconButton title="Toggle Summary" onClick={() => setShow(!show)} className="btn-sum btnn" color="primary" aria-label="like">
         {show ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
         </IconButton>
      </h1>
        <p style={styles} className='rating'>⭐{movie.rating}</p>
      </div>
      </CardContent>
    </Card>
  );
}
