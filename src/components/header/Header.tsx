import { useEffect, useState } from "react";
import "./Header.scss";

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  const [ActiveLink, setActiveLink] = useState("#home");

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const target = e.target as HTMLAnchorElement;
    setActiveLink(target.getAttribute("href") ?? "");
  };

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.7) {
          setActiveLink("#" + entry.target.id);
        }
      });
    },
    { threshold: 0.7 }
  );

  const observeSections = () => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  };

  setTimeout(observeSections, 100); 
}, []);
  return (
    <>
      <header className="header">
        <nav className="nav container">
          <a href="" className="nav__logo">
            VincenzoVN
          </a>

          <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
            <ul className="nav__list grid">
              <li className="nav__item">
                <a
                  href="#home"
                  className={`nav__link ${
                    ActiveLink === "#home" ? "active-link" : ""
                  }`}
                  onClick={handleClick}
                >
                  <i className="uil uil-estate nav__icon"></i> Home
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="#about"
                  className={`nav__link ${
                    ActiveLink === "#about" ? "active-link" : ""
                  }`}
                  onClick={handleClick}
                >
                  <i className="uil uil-user nav__icon"></i> About
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="#skills"
                  className={`nav__link ${
                    ActiveLink === "#skills" ? "active-link" : ""
                  }`}
                  onClick={handleClick}
                >
                  <i className="uil uil-file-alt nav__icon"></i> Skills
                </a>
              </li>
            </ul>

            <i
              className="uil uil-times nav__close"
              onClick={() => showMenu(!Toggle)}
            ></i>
          </div>
          <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
            <i className="uil uil-apps"></i>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
