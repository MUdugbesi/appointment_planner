import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ tile, value, onclick }) => {

  return (
    <>
      {value === 'result' && tile.length ? <h2>Filtered by Contact</h2> : ''}

      {tile.map((contact, i) => {
        return (
          <div className="tiles" key={i}>
            <Tile name={contact.name} description={{ ...contact }} key={i} />
            <div className="times" onClick={() => onclick(contact.id)}>&times;</div>
          </div>
        )
      })}
    </>
  );
};
