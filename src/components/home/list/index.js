import Mail from "../../../assets/icons/mail";
import Call from "../../../assets/icons/call";
import Avatar from "../../common/avatar";
import ListViewSvg from "../../../assets/icons/listViewSvg";
import "./styles.css";

function List({ user }) {
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
    <div className="list_box">
      <div className="listview-svgs">
        <ListViewSvg fill={color} cn={"list-view-svg"} />
      </div>
      <div className="list-team-content">
        <div className="list-team-basic-content">
          <Avatar medium={true} image={user?.picture?.large} />
          <div className="team-content-text">
            <h1 className="list-team-name">
              {user?.name?.first} {user?.name?.last}
            </h1>
            <p>New York</p>
          </div>
        </div>
        <div className="list-contact-icons">
          <Mail />
          <Call />
        </div>
      </div>
    </div>
  );
}

export default List;
