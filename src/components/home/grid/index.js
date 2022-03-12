import CurvyRectangle from "../../../assets/icons/curvyRectangle";
import CurvyWhiteRectangle from "../../../assets/icons/curvyWhiteRectangle";
import Rectangle from "../../../assets/icons/rectangle";
import Mail from "../../../assets/icons/mail";
import Call from "../../../assets/icons/call";
import Avatar from "../../common/avatar";
import "./styles.css";

function Grid({ user }) {
  function getRandomInt() {
    return Math.floor(Math.random() * 3) + 1;
  }

  const color =
    getRandomInt() === 1
      ? "#a7b8a8"
      : getRandomInt() === 2
      ? "#E3D5C9"
      : "#E8CDAD";

  return (
    <div className="grid-box" style={{ backgroundColor: color }}>
      <div className="grid-svgs">
        <div className="rectangle-svgs">
          <CurvyRectangle fill={color} cn={"curvy-rectangle"} />
          <Rectangle cn={"simple-rectangle"} />
        </div>
        <div className="second-rectangle-svg">
          <CurvyWhiteRectangle cn={"curvy-white-rectangle"} />
        </div>
      </div>
      <div className="team-content">
        <h1 className="team-name">
          {user?.name?.first} {user?.name?.last}
        </h1>
        <div className="team-image-container">
          <Avatar image={user?.picture?.large} />
        </div>
        <p className="city-name">New York</p>
        <div className="contact-icons">
          <Mail />
          <Call />
        </div>
      </div>
    </div>
  );
}

export default Grid;
