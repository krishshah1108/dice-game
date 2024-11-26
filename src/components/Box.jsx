import React from "react";
import "../css/Mainpage.css";

const Box = (props) => {
  const { value, isSelected , onClick } = props;
  return (
    <div className={` ${isSelected ? "selected-box" : ""} box `} onClick={onClick}>{value}</div>
  );
};

export default Box;
