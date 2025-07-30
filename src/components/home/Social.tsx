import Github from "../../assets/images/social/github.jpg";
import Facebook from "../../assets/images/social/facebook.jpg";

const Social = () => {
  return (
    <>
      <div className="home__social">
        <a
          href="https://discord.gg/NCqkGjCUpv"
          className="home__social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Github}
            alt="Github"
            style={{ width: "60px", height: "60px" }}
          />
        </a>

        <a
          href="https://www.facebook.com/profile.php?id=100057703474762"
          className="home__social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Facebook}
            alt="Facebook"
            style={{ width: "60px", height: "60px" }}
          />
        </a>
      </div>
    </>
  );
};

export default Social;
