import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import qrcode from "../../assets/qrcode.svg";
import "./styles.css";

function Carousel() {
  const sliderRef = useRef<any>(null);
  console.log(sliderRef);
  const [Refresh, setRefresh] = useState(true);
  const iframeRef = useRef<any>(null);
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 30000,
    // Set the duration (in milliseconds) between slides
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRefresh(false);
      setTimeout(() => {
        setRefresh(true);
      }, 100);
    }, 30000);

    return () => clearInterval(intervalId);
  }, []);

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
            title=""
            style={{ width: "100%", height: "100%" }}
          />
        )}
      </div>
      <div className="container" onClick={avancarProximo}>
        <div className="alexa">
          <h1>Autorizaí, a Alexa para análise da pertinência clínica!</h1>
          <h2>Participe do sorteio da Alexa última geração.</h2>
          <img height={200} src={qrcode} alt="qrcode" style={{ backgroundColor: "rgba(0,0,0,0.2)", borderRadius: 5 }} />
        </div>
      </div>
    </Slider>
  );
}

export default Carousel;
