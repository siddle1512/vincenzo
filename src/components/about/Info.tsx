const Info = () => {
  return (
    <>
      <div className="about__info grid">
        <div className="about__box">
          <i className="bx bx-award about__icon"></i>
          <h3 className="about_title">Minecraft</h3>
          <span className="about__subtitle">4 Years</span>
        </div>

        <div className="about__box">
        <i className="bx bx-award about__icon"></i>
          <h3 className="about_title">Valorant</h3>
          <span className="about__subtitle">3 Months</span>
        </div>

        <div className="about__box">
        <i className="bx bx-award about__icon"></i>
          <h3 className="about_title">Youtube</h3>
          <span className="about__subtitle">1.5 Years</span>
        </div>
      </div>
    </>
  );
};

export default Info;
