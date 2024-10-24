const Frontend = () => {
  return (
    <>
      <div className="skills__content">
        <h3 className="skills__title">Minecraft</h3>

        <div className="skills__box">
          <div className="skills__group">
            <div className="skills__data">
              <div>
                <h3 className="skills__name">PVP</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>

            <div className="skills__data">
              <div>
                <h3 className="skills__name">Survival</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>
          </div>

          <div className="skills__group">
            <div className="skills__data">
              <div>
                <h3 className="skills__name">Bridging</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>

            <div className="skills__data">
              <div>
                <h3 className="skills__name">Building</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Frontend;
