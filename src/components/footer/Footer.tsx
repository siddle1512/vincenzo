import "./Footer.scss";
import Github from "../../assets/images/social/github.jpg";
import Facebook from "../../assets/images/social/facebook.jpg";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__container container">
          <h1 className="footer__title">VincenzoVN</h1>

          <ul className="footer__list">
            <li>
              <a href="#about" className="footer__link">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="footer__link">
                Skills
              </a>
            </li>
          </ul>

          <div className="footer__social">
            <a
              className="home__social-link"
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
              className="home__social-link"
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

          <span className="footer__copy">
            &#169; VincenzoVN_Lord.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
