import React from 'react'
import './Hero.css'
import hero_image from '../Assets/hero.jpg'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
         <h2>NEW ARRIVALS ONLY</h2>
         <div>
            <div className="hero-hand-icon">
                <p>new</p>
                <i class="far fa-hand-spock"></i>
            </div>
             <p>collections</p>
             <p>for everyone</p>
         </div>
         <div className="hero-latest-btn">
            <div> Latest Collection</div>
            <i class="fas fa-long-arrow-alt-right"></i>
         </div>
      </div>
      <div className="hero-right">
           <img src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Hero