import React from "react";

//componentes
import { Link } from "react-router-dom";
//Styles
import "./cards.style.css";
const Cards = (props) => {
  const {
    userName,
    image,
    cantidadFollowers,
    cantidadFollowing,
    cantidadRepos,
    bio,
  } = props;
  return (
    <div>
      <div className="card">
        <img src={image} alt={`${userName}`} />
        <h2>{userName}</h2>
        <h3> {bio} </h3>
        <ul className="list">
          <Link to={`/users/${userName}/followers`}>
            <li>
              Followers <span> {cantidadFollowers} </span>{" "}
            </li>{" "}
          </Link>
          <Link to={`/users/${userName}/following`}>
            <li>
              {" "}
              Following <span> {cantidadFollowing} </span>{" "}
            </li>{" "}
          </Link>
          <Link to={`/users/${userName}/repos`}>
            {" "}
            <li>
              Repositories <span>{cantidadRepos} </span>{" "}
            </li>{" "}
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Cards;
