import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Counter } from './Counter.js';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Card, CardActions, CardContent } from '@mui/material';

export function Movies({ movie,id,editbtn,deletebtn }) {
  const styles = {
    color: "green"
  };
  movie.rating > 7 ?
    styles.color = "green" :
    styles.color = "red";

  const [show, setShow] = useState(true);

  const navigate = useNavigate();
  return (
    <Card className='movie' key={id}>
      <img className="profilepic" src={movie.pic} alt={movie.title} /> <br></br>
      <CardContent>
      <div className='head'>
        <h1 className='title'>
          {movie.title} 
        <IconButton title="Trailer" onClick={() => navigate("/movies/"+ id)} className="btn-info btnn" color="primary" aria-label="like">
         <InfoIcon />
         </IconButton>

         <IconButton title="Toggle Summary" onClick={() => setShow(!show)} className="btn-sum btnn" color="primary" aria-label="like">
         {show ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
         </IconButton>
      </h1>
        <p style={styles} className='rating'>⭐{movie.rating}</p>
      </div>
      {show ? (<p className='summary'>{movie.description}</p>) : ""}
      </CardContent>
      <CardActions className='actions'>   
          <Counter id={id}/>
          <div>
          {editbtn}
          {deletebtn}
          </div>         
          </CardActions>
    </Card>
  );
}
