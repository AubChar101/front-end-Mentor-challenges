import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styles from "./headerDesktop.module.css";
import Logo from "../../../assets/shared/logo.svg";
export default function Index() {
  const path = useLocation().pathname;
  return (
    <>
      <header className={styles.header}>
        <div className={styles.Logo}>
          <img src={Logo} alt="Logo" />
        </div>
        <hr color="gray" className={styles.line}></hr>
        <nav className={`${styles.glass} ${styles.nav}`}>
          <div
            className={`${styles.Link_container} ${
              path == "/" ? styles.currentLink : ""
            }`}
          >
            <Link className={styles.a} to="/" value="00">
              Home
            </Link>
          </div>
          <div
            className={`${styles.Link_container} ${
              path == "/destination" ? styles.currentLink : ""
            }`}
          >
            <Link className={styles.a} to="/destination" value="01">
              Destination
            </Link>
          </div>
          <div
            className={`${styles.Link_container} ${
              path == "/crew" ? styles.currentLink : ""
            }`}
          >
            <Link className={styles.a} to="/crew" value="02">
              Crew
            </Link>
          </div>
          <div
            className={`${styles.Link_container} ${
              path == "/technology" ? styles.currentLink : ""
            }`}
          >
            <Link className={styles.a} to="/technology" value="03">
              Technology
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
