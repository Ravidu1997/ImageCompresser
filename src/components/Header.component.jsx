import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
let style = {
  fontSize: "100",
  color: "#2ec1ac",
  padding: "10",
  paddingTop: 10,
};
const Header = () => {
  return (
    <div
      className="text-center justify-content-center align-items-center"
      style={style}
    >
      <h1>Image Compressor</h1>
    </div>
  );
};
export default Header;
