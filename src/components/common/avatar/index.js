import "./styles.css";

function Avatar({ medium, image }) {
  return (
    <img
      className={`avatar ${medium ? "medium-image" : "large-image"}`}
      src={image}
      alt={"team-member"}
    />
  );
}

export default Avatar;
