import { useState } from "react";
import Header from "../../Components/Header/index";
import data from "../../assets/data/data.json";
import Douglas_Hurley from "../../assets/crew/image-douglas-hurley.png";
import Anousheh_Ansari from "../../assets/crew/image-anousheh-ansari.png";
import Victor_Glover from "../../assets/crew/image-victor-glover.png";
import Mark_Shuttleworth from "../../assets/crew/image-mark-shuttleworth.png";
import "./style.css";

export default function Index() {
  const [CrewImage, setCrewImage] = useState(Douglas_Hurley);
  const [crew, setCrew] = useState(0);
  const currentCrew = data.crew[crew];
  return (
    <main className="crew">
      <Header />
      <article>
        <section className="text_container">
          <section className="sub-title-container">
            <h3 className="sub-title">Meet your crew</h3>
          </section>
          <section className="text">
            <h3 className="job_title">{currentCrew.role}</h3>
            <h1 className="title name">{currentCrew.name}</h1>
            <p className="paragraph">{currentCrew.bio}</p>
          </section>
          <div className="navigator_container">
            {data.crew.map((it, index) => {
              return (
                <>
                  <button
                    className={`navigator ${
                      crew == index ? "current-navigator" : ""
                    }`}
                    onClick={() => {
                      setCrew(index);
                      if (index == 0) {
                        setCrewImage(Douglas_Hurley);
                      }
                      if (index == 1) {
                        setCrewImage(Mark_Shuttleworth);
                      }
                      if (index == 2) {
                        setCrewImage(Victor_Glover);
                      }
                      if (index == 3) {
                        setCrewImage(Anousheh_Ansari);
                      }
                    }}
                    key={index}
                  ></button>
                </>
              );
            })}
          </div>
        </section>
        <section className="figure_container">
          <img src={CrewImage}></img>
        </section>
      </article>
    </main>
  );
}
