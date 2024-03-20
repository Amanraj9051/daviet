
import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


import first from '../assets/uploads/2024/03/Doc_6522-1.jpg';


const Banner = () => {
  var settings = {
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  // const photos = require.context('../assets/uploads/2024/03',  false, /\.(png|jpe?g|svg)$/);
  return (
    
      
    <>
      {/* {
        photos.map((item) => {
          return (
            console.log(item)
          )
        })
      } */}

      {/* <img src={first} alt="" /> */}
      <div className=' mx-52 rounded '>
        <Slider {...settings}>
          <img src={first} alt=""  />
          <img src={first} alt="" />
          <img src={first} alt="" />
          <img src={first} alt="" />
          <img src={first} alt="" />
          <img src={first} alt="" />
        </Slider>
      </div>


      {/* <div className={`border flex justify-center h-96 items-center `} style={{background: `url(${first})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>TEST</div> */}

    </>

  
  );
  }

export default Banner