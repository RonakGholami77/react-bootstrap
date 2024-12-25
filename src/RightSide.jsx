import { Image } from "react-bootstrap";

function RightSide() {
  return (
    <Image
      className="image"
      src="images/jihon.jpeg"
      thumbnail
      style={{
        border: "none",
        width: "100%",
        borderRadius: 0,
      }}
    />
  );
}

export default RightSide;
