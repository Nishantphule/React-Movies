import { useState } from 'react';

export function AddMovie() {
  const [Add, setMovie] = useState({
    pic: "",
    title: "",
    rating: "",
    description: ""
  });
  const styles = {
    color: "green"
  };
  Add.rating > 7 ?
    styles.color = "green" :
    styles.color = "red";

  const [show, setShow] = useState(true);

  const paraStyles = {
    display: show ? "block" : "none"
  };


  return (
    <div className='add-movie'>
      <input type="text" placeholder='Enter poster url' value={Add.pic} onChange={(e => setMovie({ ...Add, pic: e.target.value }))}></input>
      <input type="text" placeholder='Enter movie name' value={Add.title} onChange={(e => setMovie({ ...Add, title: e.target.value }))}></input>
      <input type="text" placeholder='Enter movie rating' value={Add.rating} onChange={(e => setMovie({ ...Add, rating: e.target.value }))}></input>
      <input type="text" placeholder='Enter poster summary' value={Add.description} onChange={(e => setMovie({ ...Add, description: e.target.value }))}></input>
      <button>Add Movie</button>
      <div className='movie'>
        <img className="profilepic" src={Add.pic} alt={Add.title} /> <br></br>
        <div className='head'>
          <h1 className='title'>{Add.title}</h1>
          <p style={styles} className='rating'>⭐{Add.rating}</p>
        </div>
        <button onClick={() => setShow(!show)} className="btn">Toggle Summary</button>
        <p className='summary' style={paraStyles}>{Add.description}</p>
      </div>
    </div>
  );
}
