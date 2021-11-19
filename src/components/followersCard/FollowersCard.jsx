import React from "react";
import { Link } from "react-router-dom";

//Style
import "./followersCard.style.css";
const FollowersCard = ({ userName, image }) => {
  return (
    <>
    <div id="monda">
      <div className="follow-card">
        <img src={image} alt={` ${userName} `} />
        <h4>{userName}</h4>
        <Link to={`/users/${userName}`}>
          <button className="a-link">See more</button>
        </Link>
      </div>
    </div>
    </>
  );
};

export default FollowersCard;
