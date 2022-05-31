import { useEffect, useState } from 'react';
import './App.css';
import IconButton from '@mui/material/IconButton';
import { Badge } from '@mui/material';



function Counter({ id }) {

  // const [set, setMoviee] = useState([]);

  //   fetch(`https://6288bebc7af826e39e64a149.mockapi.io/movie/${id}`, {
  //     method: "GET"
  //   })
  // .then((data) => data.json())
  // .then((movies) => setMoviee(movies))
  

  const [like, setLike] = useState(0);
  const [unlike, setUnlike] = useState(0);



  useEffect(() => {
    console.log("Like is updated:", like , unlike)
  },[like, unlike])

  return (
    <div className='like-dislike'>
      <IconButton title="Like" onClick={() => setLike(like + 1)} color="primary" aria-label="like">
        <Badge badgeContent={like} color="primary" >👍</Badge> </IconButton>
      <IconButton title="Dislike" onClick={() => setUnlike(unlike + 1)} color="error" aria-label="like">
      <Badge badgeContent={unlike} color="error" >👎</Badge> </IconButton>
    </div>
  );
}

export {Counter}