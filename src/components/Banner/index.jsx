import React from "react";
import img from "../../assets/banner.jpg";
import "./styles.scss";

export function Banner() {
  return (
    <div className="banner">
      <div className="banner__background">
        <img src={img} alt="Imagem do banner" className="banner__img" />
      </div>
    </div>
  );
}
