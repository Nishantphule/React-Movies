import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';



export function Backbtn() {
  const navigate = useNavigate();
  return (
    <div className="back-btn">
      <Button onClick={() => navigate(-1)} variant="contained"><ArrowBackIosIcon /> BACK</Button>
    </div>
  );
}
