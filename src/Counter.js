import { useEffect, useState } from 'react';
import './App.css';
import IconButton from '@mui/material/IconButton';
import { Badge } from '@mui/material';

function Counter() {
  const [like, setLike] = useState(0);
  const [unlike, setUnlike] = useState(0);


  useEffect(() => {
    console.log("Like is updated:", like , unlike)
  },[like, unlike])

  return (
    <div className='like-dislike'>
      <IconButton onClick={() => setLike(like + 1)} color="primary" aria-label="like">
        <Badge badgeContent={like} color="primary" >👍</Badge> </IconButton>
      <IconButton onClick={() => setUnlike(unlike + 1)} color="error" aria-label="like">
      <Badge badgeContent={unlike} color="error" >👎</Badge> </IconButton>
    </div>
  );
}

export {Counter}