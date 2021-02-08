import React from "react";
import "../Card/Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      {props.animated ? (
        <video
          width="320"
          height="240"
          controls
          preload="auto"
          autoplay
          loop
          muted="muted"
        >
          <source src={props.mp4} type="video/mp4" />
        </video>
      ) : (
        <img className="card-img" src={props.img} />
      )}
    </div>
  );
};

export default Card;
