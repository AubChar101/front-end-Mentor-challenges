import { useContext } from "react";
import { formData } from "../../App";
import styles from "./style.module.css";

export default function Index() {
  const steps = ["Your Info", "Select Plan", "Add-Ons", "Summary"];
  const current_step = useContext(formData)[0].current_step;
  return (
    <nav className={`${styles.trackBar}`}>
      <section className={`${styles.trackBar__stepsContainer}`}>
        {steps.map((it, index) => {
          return (
            <>
              <div className={`${styles.step__container}`} key={index}>
                <h1
                  className={`${styles.step__number} ${
                    current_step === index + 1
                      ? styles.step__number__active
                      : ""
                  }`}
                >
                  {index + 1}
                </h1>
                <div className={`${styles.step__info}`}>
                  <h5
                    className={`${styles.step__info__name}`}
                    value={`step ${index + 1}`}
                  >
                    {it}
                  </h5>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </nav>
  );
}
