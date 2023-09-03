import { useContext } from "react";
import { formData } from "../../../App";
import styles from "./style.module.css";

export default function Index() {
  const formObj = useContext(formData);
  return (
    <section className={`${styles.main__container}`}>
      <section className={`${styles.section__top}`}>
        <header>
          <h1 className="header__title">Finishing Up</h1>
          <h5 className="header__subtitle">
            Double-check everything looks OK before confirming.
          </h5>
        </header>
        <div className={`${styles.finishingup__card__container}`}>
          <div className={`${styles.review__container}`}>
            <div className={`${styles.plan__selected__container}`}>
              <h1 className={`${styles.plan__name}`}>
                {formObj[0].plan_selected.plan_name}{" "}
                <span>
                  {formObj[0].plan_selected.type == 1
                    ? "( Monthly )"
                    : "( Yearly )"}
                </span>
              </h1>
              <h1 className={`${styles.plan__price}`}>
                +$
                {formObj[0].plan_selected.type == 1
                  ? formObj[0].plan_selected.price_monthly
                  : formObj[0].plan_selected.price_monthly * 10}
                /{formObj[0].plan_selected.type == 1 ? "mo" : "yr"}
              </h1>
              <div className={`${styles.change_plan__button__container}`}>
                <button className={`${styles.change_plan__button}`}>
                  change
                </button>
              </div>
            </div>
            {formObj[0].Add_Ons.length !== 0 ? (
              <>
                <hr className={`${styles.line}`}></hr>
                <div className={`${styles.add_ons__container}`}>
                  {formObj[0].Add_Ons.map(it => {
                    return (
                      <>
                        <div className={`${styles.add_ons}`}>
                          <h3 className={`${styles.add_ons__name}`}>
                            {it.name}
                          </h3>
                          <h3 className={`${styles.add_ons__price}`}>
                            +$
                            {formObj[0].plan_selected.type == 1
                              ? it.price
                              : it.price * 10}
                            /{formObj[0].plan_selected.type == 1 ? "mo" : "yr"}
                          </h3>
                        </div>
                      </>
                    );
                  })}
                </div>
              </>
            ) : null}
          </div>
          <div className={`${styles.total__container}`}>
            <h2 className={`${styles.total__text}`}>
              Total{" "}
              <span>
                ( per {formObj[0].plan_selected.type == 1 ? "month" : "year"} )
              </span>
            </h2>
            <h2 className={`${styles.total}`}>
              $
              {formObj[0].plan_selected.type == 1
                ? formObj[0].plan_selected.price_monthly +
                  (() => {
                    let i = 0;
                    for (let x of formObj[0].Add_Ons) {
                      i += x.price;
                    }
                    return i;
                  })()
                : formObj[0].plan_selected.price_monthly * 10 +
                  (() => {
                    let i = 0;
                    for (let x of formObj[0].Add_Ons) {
                      i += x.price;
                    }
                    return i;
                  })() *
                    10}
              /{formObj[0].plan_selected.type == 1 ? "mo" : "yr"}
            </h2>
          </div>
        </div>
      </section>
      <div className={`${styles.buttons__container}`}>
        <button
          className={`${styles.goBack__Button}`}
          onClick={() => {
            formObj[1](prev => {
              return {
                ...prev,
                current_step: prev.current_step - 1,
              };
            });
          }}
        >
          GoBack
        </button>
        <button
          type="submit"
          className={`${styles.Next_button}`}
          onClick={() => {
            formObj[1](prev => {
              return {
                ...prev,
                current_step: prev.current_step + 1,
              };
            });
          }}
        >
          Next step
        </button>
      </div>
    </section>
  );
}
