'use client';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from './Image'
import './Pictures.css'
import { useNavigate } from 'react-router-dom';
function Pictures(){
  const images = [
    './Cupboards/1.jpg',
    './Cupboards/7.jpg',
    './Cupboards/10.jpg',
    './Cupboards/Cup.jpg',
    './Cupboards/8.jpg',
    './Cupboards/11.jpg',
  ]
  
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/Home');
  };
  return(
    <main>
      <div className='Conl'>
        <Image images={images}/>
      </div>
      <div className='container'>
        <img className='Im' src='./logo.png' alt='Rk Wood Works'/>
        <h4>RK&nbsp;&nbsp;Wood&nbsp;&nbsp;Works</h4>
        <button type='button' onClick={handleClick} className='bt'>Know more</button>
      </div>
    </main>
  );
}

export default Pictures;