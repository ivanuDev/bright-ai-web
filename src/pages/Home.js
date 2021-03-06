import React from "react";
import HeroContainer from "../components/home/HeroContainer";
import Title from "../components/home/Title";
import CardContainer from "../components/home/CardContainer";
import TimeLine from "../components/home/TimeLine";
import src1 from "../images/how-1.png";
import gafas from "../images/gafas.png";

export default function Home() {
  return (
    <>
      <HeroContainer />
      <section id="introduccion">
        <Title title="Deja que nuestra tecnología hable por nosotros" />
        <CardContainer />
      </section>
      <div className="separator" />
      <section id="funcionamiento">
        <Title title="Cómo funciona" />
        <div className="timeline-container">
          <div className="timeline">
            <TimeLine />
          </div>
          <div className="timeline-image">
            <img src={src1} alt="bright-ai-howitworks" />
          </div>
        </div>
      </section>
      <div className="separator" />
      <section id="gafas">
        <Title title="Aplicación real" />
        <div className="gafas-container">
          <div className="gafas-img">
            <img src={gafas} alt="" />
          </div>
          <h3 className="gafas-text">elegantes<br/>innovadoras<br/>a tu alcance</h3>
        </div>
      </section>
    </>
  );
}