import React, { useRef } from "react";
import "./Testimonial.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonial = () => {

    const slider=useRef();
    let tx=0;
    const slideForward = ()=>{
        if(tx>-50){
            tx-=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`
    }
    const slideBackward = ()=>{
        if(tx<0){
            tx+=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`
    }

  return (
    <div className="testimonials">
      <img src={next_icon} alt="next-icon" className="next-btn" onClick={slideForward}/>
      <img src={back_icon} alt="back-icon" className="back-btn" onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="user" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
                voluptas voluptatem nulla exercitationem consequuntur ex eveniet
                ut tenetur. Maxime illo non architecto inventore, deleniti
                veniam! Doloribus ad dicta adipisci ullam. Tenetur, iste est.
                Omnis dolorem corporis repellat, tenetur consequuntur ullam
                veniam atque suscipit velit, necessitatibus sunt aperiam
                officiis quos maxime.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="user" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
                voluptas voluptatem nulla exercitationem consequuntur ex eveniet
                ut tenetur. Maxime illo non architecto inventore, deleniti
                veniam! Doloribus ad dicta adipisci ullam. Tenetur, iste est.
                Omnis dolorem corporis repellat, tenetur consequuntur ullam
                veniam atque suscipit velit, necessitatibus sunt aperiam
                officiis quos maxime.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="user" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
                voluptas voluptatem nulla exercitationem consequuntur ex eveniet
                ut tenetur. Maxime illo non architecto inventore, deleniti
                veniam! Doloribus ad dicta adipisci ullam. Tenetur, iste est.
                Omnis dolorem corporis repellat, tenetur consequuntur ullam
                veniam atque suscipit velit, necessitatibus sunt aperiam
                officiis quos maxime.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="user" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
                voluptas voluptatem nulla exercitationem consequuntur ex eveniet
                ut tenetur. Maxime illo non architecto inventore, deleniti
                veniam! Doloribus ad dicta adipisci ullam. Tenetur, iste est.
                Omnis dolorem corporis repellat, tenetur consequuntur ullam
                veniam atque suscipit velit, necessitatibus sunt aperiam
                officiis quos maxime.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonial;
