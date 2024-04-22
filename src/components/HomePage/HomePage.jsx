import React from "react";
import Slide from "../../assets/slide5.png";
import BoloCenoura from "../../assets/cenoura.png";
import BoloFuba from "../../assets/fuba.png";
import BoloLaranja from "../../assets/laranja.png";
import styles from "../HomePage/HomePage.css";

function HomePage() {
  return (
    <div>
      <div>
        <img src={Slide} className="img-slide" alt="Image-Bolo" />
      </div>
      <div className="content">
        <p>Mais Vendidos</p>
        <div className="produtos">
            <img src={BoloCenoura} alt="Bolo-Cenoura" />
            <img src={BoloFuba} alt="Bolo-Fuba" />
            <img src={BoloLaranja} alt="Bolo-Laranja" />
         </div>
        <p>Aproveite</p>
        </div>
        <div className="info">
           <div className="info-left">
           <span>Clube Assinatura</span>
            <p>Se torne cliente fidelizado e receba divresas vantagens</p>
           <button>Sabe mais</button>
           </div>
           <div className="info-right">
           <span>Monte seu bolo</span>
            <p>Escolha os ingredientes e receba um bolo feito para você !</p>
           <button>Sabe mais</button>
           </div>

        </div>
      </div>
   
  );
}

export default HomePage;
