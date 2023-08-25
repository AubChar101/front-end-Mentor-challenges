import { useState } from "react";
import Header from "../../Components/Header/index";
import data from "../../assets/data/data.json";
import Vehicle_Portrait from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import Space_Capsule_Portrait from "../../assets/technology/image-space-capsule-portrait.jpg";
import SpacePort_Portrait from "../../assets/technology/image-spaceport-portrait.jpg";
import "./style.css";

export default function Index() {
  const [technologyImage, setTechnologyImage] = useState(Vehicle_Portrait);
  const [technology, setTechnology] = useState(0);
  const currentTechnology = data.technology[technology];
  return (
    <main className="technology">
      <Header />
      <article>
        <section className="sub-title-container_tablet" style={{ order: -2 }}>
          <h3 className="sub-title">Space Lauch 101</h3>
        </section>
        <div className="navigator_container">
          {data.technology.map((it, index) => {
            return (
              <>
                <button
                  className={`navigator ${
                    technology == index ? "current-navigator" : ""
                  }`}
                  onClick={() => {
                    setTechnology(index);
                    if (index == 0) {
                      setTechnologyImage(Vehicle_Portrait);
                    }
                    if (index == 1) {
                      setTechnologyImage(SpacePort_Portrait);
                    }
                    if (index == 2) {
                      setTechnologyImage(Space_Capsule_Portrait);
                    }
                  }}
                  key={index}
                >
                  {index + 1}
                </button>
              </>
            );
          })}
        </div>
        <section className="text_container">
          <section className="sub-title-container">
            <h3 className="sub-title">Space Lauch 101</h3>
          </section>
          <section className="text">
            <h3 className="terminology">The terminology...</h3>
            <h1 className="title name">{currentTechnology.name}</h1>
            <p className="paragraph">{currentTechnology.description}</p>
          </section>
        </section>
        <section className="figure_container">
          <img src={technologyImage}></img>
        </section>
      </article>
    </main>
  );
}
