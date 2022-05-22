import { Counter } from './Counter.js';
import * as React from 'react';


export function Msg({ name, pic }) {
  return (
    <div className="msg">
      <img className="profilepic1" src={pic} alt="Profile" />
      <h1> Hello {name} ❤</h1>
      <Counter />
    </div>
  );
}
