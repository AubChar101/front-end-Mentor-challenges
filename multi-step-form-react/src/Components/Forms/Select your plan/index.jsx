//react
import { useContext, useState } from "react";
import { formData } from "../../../App";
//icons
import icon_advanced from "../../../assets/images/icon-advanced.svg";
import icon_arcade from "../../../assets/images/icon-arcade.svg";
import icon_pro from "../../../assets/images/icon-pro.svg";
//style
import styles from "./style.module.css";

export default function Index() {
  const formObj = useContext(formData);

  const [error, setError] = useState(false);

  const plans = [
    { icon: icon_arcade, plan_name: "Arcade", price_monthly: 9 },
    { icon: icon_advanced, plan_name: "Advanced", price_monthly: 12 },
    { icon: icon_pro, plan_name: "Pro", price_monthly: 15 },
  ];
  return (
    <section className={`${styles.main__container}`}>
      <section className={`${styles.section__top}`}>
        <header>
          <h1 className="header__title">Select your plan</h1>
          <h5 className="header__subtitle">
            You have the option of monthly or yearly billing.
          </h5>
        </header>
        <form className={`${styles.forms__container}`}>
          {plans.map(it => {
            return (
              <>
                <div
                  className={`${styles.plans__container} ${
                    formObj[0].plan_selected.plan_name == it.plan_name
                      ? styles.plans__container__selected
                      : ""
                  }`}
                  onClick={() => {
                    formObj[1](prev => {
                      return {
                        ...prev,
                        plan_selected: {
                          ...prev.plan_selected,
                          plan_name: it.plan_name,
                          price_monthly: it.price_monthly,
                        },
                      };
                    });
                  }}
                >
                  <div className={`${styles.plans__icon__container}`}>
                    <img
                      className={`${styles.plans__icon}`}
                      src={it.icon}
                    ></img>
                  </div>
                  <div className={`${styles.plans__plansInfo__container}`}>
                    <h4 className="text__medium">{it.plan_name}</h4>
                    <h5 className="text__small">
                      $
                      {formObj[0].plan_selected.type == 12
                        ? `${it.price_monthly * 10}/yr`
                        : `${it.price_monthly}/mo`}
                    </h5>
                    {formObj[0].plan_selected.type == 12 ? (
                      <span>2 month free</span>
                    ) : null}
                  </div>
                </div>
              </>
            );
          })}
        </form>
        {error ? (
          <h3 className={`${styles.error__message}`}>Plase select a plan</h3>
        ) : (
          ""
        )}
      </section>
      <div className={`${styles.buttons__container}`}>
        <div className={`${styles.Toogle__container}`}>
          <div className={`${styles.Toogle__wrap}`}>
            <label
              htmlFor="Toogle"
              style={{
                color:
                  formObj[0].plan_selected.type == 12
                    ? "var(--Cool-gray)"
                    : "var(--Marine-blue)",
              }}
            >
              Monthly
            </label>
            <div
              name="Toogle"
              className={`${styles.Toogle}`}
              onClick={() => {
                formObj[0].plan_selected.type == 1
                  ? formObj[1](prev => {
                      return {
                        ...prev,
                        plan_selected: {
                          ...prev.plan_selected,
                          type: 12,
                        },
                      };
                    })
                  : formObj[1](prev => {
                      return {
                        ...prev,
                        plan_selected: {
                          ...prev.plan_selected,
                          type: 1,
                        },
                      };
                    });
              }}
            >
              <div
                className={`${styles.Toogle__switch} ${
                  formObj[0].plan_selected.type == 12
                    ? styles.Toogle__switch__active
                    : ""
                }`}
              ></div>
            </div>
            <label
              htmlFor="Toogle"
              style={{
                color:
                  formObj[0].plan_selected.type == 12
                    ? "var(--Marine-blue)"
                    : "var(--Cool-gray)",
              }}
            >
              Yearly
            </label>
          </div>
        </div>
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
          className={`${styles.Next_button} ${
            error ? styles.Next_button__disabled : ""
          }`}
          onClick={() => {
            if (formObj[0].plan_selected.plan_name !== "") {
              formObj[1](prev => {
                return { ...prev, current_step: prev.current_step + 1 };
              });
            } else {
              setError(!error);
            }
          }}
        >
          Next step
        </button>
      </div>
    </section>
  );
}
