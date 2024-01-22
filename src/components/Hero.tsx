"use client";
import React from "react";
import Slide from "./Slide";
import Slider from "react-slick";


const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    speed:500,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  const slideData = [
    {
      id: 1,
      img: "/banner-1.jpg",
      title: "Trending Item",
      mainTitle: "WOMEN'S LATEST FASHION SALE",
      price: "$20",
    },
    {
      id: 2,
      img: "/banner-2.jpg",
      title: "Trending Accessories",
      mainTitle: "MODERN SUNGLASSES",
      price: "$15",
    },
    {
      id: 3,
      img: "/banner-3.jpg",
      title: "sale offer",
      mainTitle: "NEW FASHION SUPER SALE",
      price: "$30",
    },
  ];
  return (
    <div>
      <div className="container pt-6 lg:pt-0">
      <Slider {...settings}>
      {slideData.map((item) => (
          <Slide
            key={item.id}
            img={item.img}
            title={item.title}
            mainTitle={item.mainTitle}
            price={item.price}
          />
        ))}
      </Slider>
      </div>
    </div>
  );
};

export default Hero;
