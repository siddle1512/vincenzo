import hand from "../../assets/action/hand.svg";
import send from "../../assets/action/send.svg";

const Data = () => {
  return (
    <>
      <div className="home__data">
        <h1 className="home__title">
          VincenzoVN <img src={hand} className="home__hand" alt="Hand" />
        </h1>
        <h3 className="home__subtitle">Shadow</h3>
        <p className="home__description">
          🐈 I'm VincenzoVN.
          <br />
          🔥 I’m currently making videos about bedwars minigame.
          <br />
          ✨ Discord: minhquang0803.
        </p>

        <div className="button__container">
          <a href="#about" className="button button--flex">
            Info{" "}
            <img src={send} alt="Send" style={{ marginLeft: "0.3rem" }} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Data;
