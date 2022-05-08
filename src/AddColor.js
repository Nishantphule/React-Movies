import { useState } from 'react';
import { ColorBox } from './ColorBox';

export function AddColor() {
  const [color, setColor] = useState("orange");
  const styles = {
    fontSize: '24px',
    backgroundColor: color,
  };
  const [colorlist, setColorList] = useState(['orange', 'crimson', 'pink', 'green']);
  return (

    <div className='add-color'>
      <div>
        <input onChange={(event) => setColor(event.target.value)} style={styles} type="text" placeholder="Enter a color" value={color} />
        <button onClick={() => setColorList([...colorlist, color])}>Add Color</button>
      </div>

      {colorlist.map(add => <ColorBox color={add} />)}
    </div>
  );
}
