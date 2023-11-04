import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='banner' style={{backgroundImage:"url(https://upload.wikimedia.org/wikipedia/en/2/2d/Eesho_Film_Poster.jpeg)"}}>

      <div className="content">
      <h1 className='title'>Title</h1>
      <p>Description of the thingd wwe want to diplay in our sample</p>
      <div className="banner-button">
      <button className='btn1'>Play</button>
      <button className='btn2'>More Info</button>
      
      </div>
      </div>

    </div>
  )
}

export default Banner
