import React from 'react'
import '../css/Gameplay.css'
import { Link } from 'react-router-dom'

const Gameplay = () => {
  return (
    <div className='container'>
        <div className='image'>
            <img src="/dices.png" alt="" srcset="" />
        </div>
        <div className='content'>
            <h1>Dice Game</h1>
            <Link to = "/mainpage"><button>Play Now</button></Link>
        </div>    
    </div>
  )
}

export default Gameplay