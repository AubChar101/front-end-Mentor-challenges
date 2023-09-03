import { useContext, useEffect, useState } from "react";
import { formData } from "../../../App";
import styles from "./style.module.css";

export default function Index() {
  const formObj = useContext(formData);

  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    phone_number: "",
  });

  const [errorMessages, setErrorMessages] = useState({
    name: false,
    email: false,
    phone_number: false,
  });

  useEffect(() => {
    formObj[0].personal_info.name.length > 0 &&
      setInputValues(formObj[0].personal_info);
  }, []);

  const inputs = [
    {
      name: "Name",
      inputType: "text",
      value: inputValues.name,
      placeholder: "e. g. Stephen King",
      onChange: e => {
        setInputValues(prev => {
          return { ...prev, name: e.target.value };
        });
      },
      error: errorMessages.name,
    },
    {
      name: "email",
      inputType: "email",
      value: inputValues.email,
      placeholder: "e. g. stephenking@lorem.com",
      onChange: e => {
        setInputValues(prev => {
          return { ...prev, email: e.target.value };
        });
      },
      error: errorMessages.email,
    },
    {
      name: "Phone number",
      inputType: "number",
      value: inputValues.phone_number,
      placeholder: "e. g. +1 234 567 890",
      onChange: e => {
        setInputValues(prev => {
          return { ...prev, phone_number: e.target.value };
        });
      },
      error: errorMessages.phone_number,
    },
  ];
  return (
    <section className={`${styles.main__container}`}>
      <section className={`${styles.section__top}`}>
        <header>
          <h1 className="header__title"> Personal Info</h1>
          <h5 className="header__subtitle">
            Please provide your name, email address, and phone number.
          </h5>
        </header>
        <form className={`${styles.forms__container}`}>
          {inputs.map(it => {
            return (
              <>
                <div className={`${styles.textInput__container}`}>
                  <div className={`${styles.labels__container}`}>
                    <label
                      htmlFor={`${it.name}`}
                      className={`${styles.label__message}`}
                    >
                      {it.name}
                    </label>
                    {it.error ? (
                      <label
                        htmlFor={`${it.name}`}
                        className={`${styles.label__message__error}`}
                      >
                        {` Enter your ${it.name}`}
                      </label>
                    ) : null}
                  </div>
                  <input
                    type={it.inputType}
                    name={it.name}
                    id={it.name}
                    className={`${styles.textInput}`}
                    style={{
                      borderColor: it.error ? "var(--Strawberry-red)" : "",
                    }}
                    placeholder={it.placeholder}
                    required
                    value={it.value}
                    onChange={e => it.onChange(e)}
                  ></input>
                </div>
              </>
            );
          })}
        </form>
      </section>
      <div className={`${styles.Next_button__container}`}>
        <button
          type="submit"
          className={`${styles.Next_button} ${
            !inputValues.name && !inputValues.email && !inputValues.phone_number
              ? styles.Next_button__disabled
              : ""
          }`}
          onClick={() => {
            if (inputValues.name.length == 0) {
              setErrorMessages(prev => {
                return { ...prev, name: true };
              });
            } else {
              setErrorMessages(prev => {
                return { ...prev, name: false };
              });
            }
            if (
              inputValues.email.length == 0 ||
              !inputValues.email.includes("@")
            ) {
              setErrorMessages(prev => {
                return { ...prev, email: true };
              });
            } else {
              setErrorMessages(prev => {
                return { ...prev, email: false };
              });
            }
            if (inputValues.phone_number.length == 0) {
              setErrorMessages(prev => {
                return { ...prev, phone_number: true };
              });
            } else {
              setErrorMessages(prev => {
                return { ...prev, phone_number: false };
              });
            }

            if (
              inputValues.name &&
              inputValues.email &&
              inputValues.phone_number
            ) {
              formObj[1](prev => {
                return {
                  ...prev,
                  personal_info: inputValues,
                  current_step: prev.current_step + 1,
                };
              });
            }
          }}
        >
          Next step
        </button>
      </div>
    </section>
  );
}
