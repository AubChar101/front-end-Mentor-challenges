import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../../../assets/shared/logo.svg";
import IconHamburger from "../../../assets/shared/icon-hamburger.svg";
import IconClose from "../../../assets/shared/icon-close.svg";
import styles from "./headerMobile.module.css";
export default function Index() {
  const [Toogle, setToogle] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.Logo}>
        <img src={Logo} alt="Logo" />
      </div>
      <div className={styles.Button_container}>
        <button
          onClick={() => {
            setToogle(!Toogle);
          }}
          className={styles.button}
        >
          <img src={Toogle ? IconClose : IconHamburger} alt="Close" />
        </button>
      </div>
      {Toogle ? (
        <nav className={`${styles.glass} ${styles.nav}`}>
          <div className={styles.Link_container}>
            <Link className={styles.a} to="/" value="00">
              Home
            </Link>
            <Link className={styles.a} to="/destination" value="01">
              Destination
            </Link>
            <Link className={styles.a} to="/crew" value="02">
              Crew
            </Link>
            <Link className={styles.a} to="/technology" value="03">
              Technology
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
