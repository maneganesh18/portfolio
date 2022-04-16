import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Img1 from "./img/Img1.jpg";
import Img2 from "./img/Img2.jpg";
import Img3 from "./img/Img3.jpg";
import './home.css'

const Home = () => {
  return (
   <div className="home">
        <Carousel controls={false} indicators interval={2500} pauseonhover='false'>
      <Carousel.Item>
        <img className="d-block w-100 custom-img" src={Img1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 custom-img" src={Img2} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 custom-img" src={Img3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
   </div>
  );
};

export default Home;

