import icon_thank_you from "../../../assets/images/icon-thank-you.svg";
import styles from "./style.module.css";

export default function Index() {
  return (
    <section className={`${styles.main__container}`}>
      <section className={`${styles.section__top}`}>
        <img src={icon_thank_you} className={`${styles.icon}`} />
        <h1 className="header__title">Thank You</h1>
        <h5 className={`${styles.paragraph} header__subtitle`}>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </h5>
      </section>
    </section>
  );
}
