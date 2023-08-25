import "./style.css";
import Header from "../../Components/Header/index";

export default function Index() {
  return (
    <main className="home">
      <Header />
      <article>
        <section className="text">
          <h3 className="sub-title">So, you want to travel to</h3>
          <h1 className="title">Space</h1>
          <p className="paragraph">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </section>
        <section className="figure">
          <div className="circle">Explore</div>
        </section>
      </article>
    </main>
  );
}
