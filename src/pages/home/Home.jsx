import "./Home.css";

import ComOne from "../../components/comOne/ComOne";
import Best from "../../components/best/Best";

import { Link } from "react-router-dom";
import heroimg from "../../assets/heroimg.png";
import cal from "../../assets/cal.png";
import xal from "../../assets/xal.png";
import zal from "../../assets/zal.png";
function Home() {
  return (
    <div className="hero">
      <div className="f ">
        <div className="hero-container">
          <div className="hero-one">
            <span className="new-p">NEW PRODUCT</span>
            <h1 className="hero-title">XX99 Mark II Headphones</h1>
            <p className="hero-text">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link to="/" className="hero-btn">
              See Product
            </Link>
          </div>
          <div className="hero-two">
            <img src={heroimg} alt="" className="two-img" />
          </div>
        </div>
      </div>
      <ComOne />
      <div className="db container">
        <div className="db-one">
          <img src={cal} alt="" className="db-img" />
          <div className="div">
            <h2 className="db-title">ZX9 SPEAKER</h2>
            <p className="db-text">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link className="db-links">See Product</Link>
          </div>
        </div>
        <div className="db-two">
          <div className="g">
            <h2 className="two-title"> ZX7 SPEAKER</h2>
            <Link className="r">See Product</Link>
          </div>
          <img src={xal} alt="" className="dc" />
        </div>
        <div className="db-tre">
          <img src={zal} alt="" className="tre-img" />
          <div className="h">
            <h2 className="two-title"> YX1 EARPHONES</h2>
            <Link className="r">See Product</Link>
          </div>
        </div>
      </div>
      <Best/>
    </div>
  );
}

export default Home;
