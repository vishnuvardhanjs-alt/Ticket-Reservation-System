import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Tiles.css"

function Tiles(props) {
  const navigate = useNavigate();

  const navFunc = (loc) => {
    navigate(loc);
  };

  return (
    <div className='tiles-cont' onClick={() => { navFunc(props.nav) }}>
      <div className='img-cont'>
        <img src={props.image} alt={props.name} className='tile-img' />
      </div>
      <h2>{props.name}</h2>
    </div>
  )
}

export default Tiles