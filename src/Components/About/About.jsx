import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({setPlayState}) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="about-image" className="about-img"/>
        <img src={play_icon} alt="play-icon" className="play-icon" onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          harum?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod ratione velit, accusantium libero atque vel vitae rerum non est eos!
        </p>
        <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, minus?</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
          quos quisquam illo facilis debitis! Iste ullam sit eligendi laborum
          facere! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae iusto nam nemo totam quis veritatis dignissimos. Alias suscipit rem autem molestias. Hic vel repudiandae est sapiente. Ut sit ab exercitationem!
        </p>
      </div>
    </div>
  );
};

export default About;
