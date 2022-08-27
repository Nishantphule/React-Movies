import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import {API} from "./global"

export default function Login() {
  // const navigate = useNavigate();
  const [Add, setUser] = useState({ username:"",password:"" });
  const styles = {
    color: "green"
  };
  Add.rating > 7 ?
    styles.color = "green" :
    styles.color = "red";

  // const newUser = (add) => {
  //   fetch(`${API}/users/login`, {
  //     method: "GET",
  //     body: JSON.stringify(add),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }).then((data) => data.json())
  //     .then(() => navigate("/movies"));
  // };
  return (
    <div>
      <div className='add-User'>
      <TextField className="input"  id="filled-basic" onChange={(e => setUser({ ...Add, username: e.target.value }))} label="Enter your username" variant="filled" />
      <TextField className="input"  id="filled-basic" onChange={(e => setUser({ ...Add, password: e.target.value }))} label="password" variant="filled" />
      <Button style={{ width: "80%" }} className="add" variant="contained">Login</Button>
    </div>
    </div>
  )
}
