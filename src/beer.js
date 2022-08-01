import React from "react";
import LikeButton from "./likeButton";

export function Beer(props) {
  return (
    <li>
      <h3>{props.name}</h3>
      <img className="image" src={props.image} alt={props.name} />
     <LikeButton />
    </li>
  );
}

export default Beer;
