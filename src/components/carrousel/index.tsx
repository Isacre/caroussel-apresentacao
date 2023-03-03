import { useRef, useState } from "react";
import Slider from "react-slick";
import qrcode from "../../assets/qrcode.svg";
import logo from "../../assets/logo.png";
import "./styles.css";

function Carousel() {
  const sliderRef = useRef<any>(null);
  const [Refresh, setRefresh] = useState(true);
  const iframeRef = useRef<any>(null);
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 15000,
    beforeChange: () => {
      setRefresh(!Refresh);
    },
    draggable: false,
  };

  const avancarProximo = () => {
    sliderRef?.current?.slickNext();
  };

  return (
    <Slider ref={sliderRef} pauseOnHover={false} {...settings}>
      <div className="container" onClick={avancarProximo}>
        {Refresh && (
          <iframe
            id="apresentacaoframe"
            ref={iframeRef}
            src={"https://mb.triagil.com.br/public/dashboard/052b4ec4-f3be-4db0-80b3-5c5c40c56cc8"}
            title="resultados autorizai"
            style={{ width: "100%", height: "100%" }}
          />
        )}
      </div>
      <div className="container" onClick={avancarProximo}>
        <div className="alexa">
          <h1 className="autorizaititle">Autorizaí,</h1>
          <b className="subtitle">a Alexa para Análise da Pertinência Clínica.</b>
          <div className="secondContainer">
            <div className="textsecondcontainer">
              <h2>
                Participe do <b>Sorteio</b> de uma Alexa de Última Geração.
              </h2>
              <p>Preencha o formulário no QR Code ao lado.</p>
            </div>
            <img height={200} src={qrcode} alt="qrcode" className="qrcode" />
          </div>
          <img src={logo} alt="triagillogo" className="triagillogo" />
        </div>
      </div>
    </Slider>
  );
}

export default Carousel;
