import { useState } from "react";
import Header from "../../Components/Header/index";
import data from "../../assets/data/data.json";
import Moon from "../../assets/destination/image-moon.png";
import Mars from "../../assets/destination/image-mars.png";
import Europa from "../../assets/destination/image-europa.png";
import Titan from "../../assets/destination/image-titan.png";
import "./style.css";

export default function Index() {
  const [PlanetImage, setPlanetImage] = useState(Moon);
  const [planet, setPlanet] = useState(0);
  const currentplanet = data.destinations[planet];
  return (
    <main className="destination">
      <Header />
      <article>
        <div className="sub-title-container">
          <h3 className="sub-title">Pick your destination</h3>
        </div>
        <section className="container">
          <section className="planet-container">
            <img src={PlanetImage}></img>
          </section>
          <section className="text-container">
            <div className="destination-navigator">
              {data.destinations.map((it, index) => {
                return (
                  <>
                    <button
                      className={`navigator sub-title ${
                        planet == index ? "current-navigator" : ""
                      }`}
                      onClick={() => {
                        setPlanet(index);
                        if (index == 0) {
                          setPlanetImage(Moon);
                        }
                        if (index == 1) {
                          setPlanetImage(Mars);
                        }
                        if (index == 2) {
                          setPlanetImage(Europa);
                        }
                        if (index == 3) {
                          setPlanetImage(Titan);
                        }
                      }}
                      key={index}
                    >
                      {it.name}
                    </button>
                  </>
                );
              })}
            </div>
            <h1 className="title">{currentplanet.name}</h1>
            <p className="paragraph">{currentplanet.description}</p>
            <hr color="gray" className="line"></hr>
            <div className="planet-distance">
              <div>
                <h5 className="paragraph">AVG. DISTANCE</h5>
                <h2>{currentplanet.distance}</h2>
              </div>
              <div>
                <h5 className="paragraph">EST. TRAVEL TIME</h5>
                <h2>{currentplanet.travel}</h2>
              </div>
            </div>
          </section>
        </section>
      </article>
    </main>
  );
}
