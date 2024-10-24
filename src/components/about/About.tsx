import AboutImg from "../../assets/info/baka.jpg";
import Info from "./Info";
import "./About.scss";

const About = () => {
  return (
    <>
      <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>

        <div className="about__container container grid">
          <img src={AboutImg} alt="" className="about__img" />

          <div className="about__data">
            <Info />

            <p className="about__description">
              I am a minecraft player. Passionate about bedwars minigame, I am committed to make high-quality
              videos.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
