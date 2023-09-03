import { useContext, useEffect, useState } from "react";
import { formData } from "../../../App.jsx";
import checkmark from "../../../assets/images/icon-checkmark.svg";
import styles from "./style.module.css";

export default function Index() {
  const formObj = useContext(formData);
  const [checked, setChecked] = useState({
    Online_Service: false,
    Larger_Storage: false,
    Customazable_Profile: false,
  });

  useEffect(() => {
    formObj[0].Add_Ons.forEach(it => {
      switch (it.name) {
        case "Online Service":
          setChecked(prev => {
            return {
              ...prev,
              Online_Service: true,
            };
          });
          break;
        case "Larger Storage":
          setChecked(prev => {
            return {
              ...prev,
              Larger_Storage: true,
            };
          });
          break;
        case "Customazable Profile":
          setChecked(prev => {
            return {
              ...prev,
              Customazable_Profile: true,
            };
          });
          break;
      }
    });
  }, []);

  const options = [
    {
      name: "Online Service",
      description: "Access to multiplayer games",
      price: 1,
      checked: checked.Online_Service,
    },
    {
      name: "Larger Storage",
      description: "Extra 1TB of cloud save",
      price: 2,
      checked: checked.Larger_Storage,
    },
    {
      name: "Customazable Profile",
      description: "Custom theme on your profile",
      price: 2,
      checked: checked.Customazable_Profile,
    },
  ];
  return (
    <section className={`${styles.main__container}`}>
      <section className={`${styles.section__top}`}>
        <header>
          <h1 className="header__title">Add-Ons</h1>
          <h5 className="header__subtitle">
            Add-ons help enhance your gaming experience.
          </h5>
        </header>
        <form className={`${styles.forms__container}`}>
          {options.map((it, index) => {
            return (
              <>
                <div
                  className={`${styles.option__container} ${
                    it.checked ? styles.option__container__checked : ""
                  }`}
                  onClick={() => {
                    switch (index) {
                      case 0:
                        setChecked(prev => {
                          return {
                            ...prev,
                            Online_Service: !checked.Online_Service,
                          };
                        });
                        break;
                      case 1:
                        setChecked(prev => {
                          return {
                            ...prev,
                            Larger_Storage: !checked.Larger_Storage,
                          };
                        });
                        break;
                      case 2:
                        setChecked(prev => {
                          return {
                            ...prev,
                            Customazable_Profile: !checked.Customazable_Profile,
                          };
                        });
                        break;
                    }
                  }}
                  key={index}
                >
                  <div className={`${styles.option__left__container}`}>
                    <div className={`${styles.option__checkbox__container}`}>
                      <input
                        type="checkbox"
                        readOnly={true}
                        checked={it.checked ? true : false}
                      ></input>
                      <img
                        src={checkmark}
                        className={`${styles.checkmark}`}
                        style={{
                          display: it.checked ? "block" : "none",
                        }}
                      />
                    </div>
                    <div className={`${styles.option__optionInfo__container}`}>
                      <h4
                        className={`${styles.text_medium__small} text__medium`}
                      >
                        {it.name}
                      </h4>
                      <h5 className={`${styles.text_small__small} text__small`}>
                        {it.description}
                      </h5>
                    </div>
                  </div>
                  <h5 className={`${styles.text_small__small} text__small`}>
                    +$
                    {formObj[0].plan_selected.type == 1
                      ? `${it.price}/mo`
                      : `${it.price * 10}/yr`}
                  </h5>
                </div>
              </>
            );
          })}
        </form>
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
            const Add_Ons_Array = (() => {
              return options.filter(it => {
                return it.checked == true;
              });
            })();
            formObj[1](prev => {
              return {
                ...prev,
                Add_Ons: Add_Ons_Array,
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
