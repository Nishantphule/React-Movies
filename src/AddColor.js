import { useState } from 'react';
import { ColorBox } from './ColorBox';
import Button from '@mui/material/Button';

export function AddColor() {
  const [color, setColor] = useState("orange");
  const styles = {
    fontSize: '24px',
    backgroundColor: color,
  };
  const [colorlist, setColorList] = useState(['orange', 'crimson', 'pink', 'green']);
  return (

    <div className='add-color'>
        <input onChange={(event) => setColor(event.target.value)} style={styles} type="text" placeholder="Enter a color" value={color} />
        <Button className='addcolorbtn' onClick={() => setColorList([...colorlist, color])} variant="contained">Add color</Button>
      {colorlist.map(add => <ColorBox color={add} />)}
      
    </div>
  );
}
