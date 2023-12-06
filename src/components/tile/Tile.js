import React from "react";

export const Tile = ({ name, description }) => {
  const Obj = Object.values(description).splice(2);
  
  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      {Obj.map((val, i) => <p className="tile" key={i}>{val}</p>)}
    </div>
  );
};
