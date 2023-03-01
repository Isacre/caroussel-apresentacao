import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import qrcode from "../../assets/qrcode.svg";
import "./styles.css";

function Carousel() {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 30000, // Set the duration (in milliseconds) between slides
  };

  return (
    <Slider {...settings}>
      <div className="container">
        <iframe
          src="https://mb.triagil.com.br/public/dashboard/052b4ec4-f3be-4db0-80b3-5c5c40c56cc8"
          title="YouTube video player"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="container">
        <div className="alexa">
          <h1>Autorizaí, a Alexa para análise da pertinência clínica!</h1>
          <h2>Participe do sorteio da Alexa última geração.</h2>
          <img style={{ backgroundColor: "rgba(0,0,0,0.2)", borderRadius: 5 }} height={200} src={qrcode} alt="qrcode" />
        </div>
      </div>
    </Slider>
  );
}

export default Carousel;
