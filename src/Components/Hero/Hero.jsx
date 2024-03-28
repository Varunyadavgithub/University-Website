import React from "react"
import "./Hero.css"
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure better education for a better world !</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed corrupti
          mollitia nulla tempore omnis labore architecto reiciendis odio unde,
          aspernatur blanditiis dolores quisquam perferendis molestiae id
          debitis quibusdam qui repudiandae pariatur consequuntur tempora soluta
          officia totam! Voluptates voluptate eaque illum sequi veniam ad nihil
          hic dolore harum ipsam, mollitia voluptas.
        </p>
        <button className="btn">Explore more <img src={dark_arrow} alt="arrow"/></button>
      </div>
    </div>
  );
};

export default Hero;
