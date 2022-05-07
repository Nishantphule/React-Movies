import { useState } from 'react';
import './App.css';

function Counter() {
  // let like = 100;
  const [like, setLike] = useState(0);
  const [unlike, setUnlike] = useState(0);
  return (
    <div className='like-dislike'>
      <button onClick={() => setLike(like + 1)}>👍 {like}</button>
      <button onClick={() => setUnlike(unlike + 1)}>👎 {unlike}</button>
    </div>
  );
}

export {Counter}