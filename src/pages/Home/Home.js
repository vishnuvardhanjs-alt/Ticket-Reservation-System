import React from 'react'
import './Home.css'
import Tiles from '../../components/Tiles/Tiles'
import Bus from "../../assets/Home/bus.png"
import Train from "../../assets/Home/train.png"
import Air from "../../assets/Home/air.png"
import Logo from "../../assets/Logo.png"

function Home() {
  return (
    <div className="home-cont">
      <img src={Logo} alt='Logo' className='home-logo'/>
      <div className='opt-cont'>
        <Tiles image={Bus} name="Bus" nav="/bus"/>
        <Tiles image={Train} name="Train" nav="/train"/>
        <Tiles image={Air} name="Air" nav="/air"/>
      </div>
    </div>
  )
}

export default Home