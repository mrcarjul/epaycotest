import React from "react";

function NameContainer() {
  const username = "Alexander Ceballos";
  const name = username.toUpperCase().substring(0, 14) + "...";
  return <div className="menu-name-container">{name}</div>;
}

export default NameContainer;