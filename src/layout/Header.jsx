import React from "react";
import { useNavigate } from "react-router-dom";

//Styles
import "./header.style.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="header-container">
        <h3> GitHub Browser</h3>
      </div>
      <div className="navigation">

      <button onClick={() => navigate(-1)}>Go back</button>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate(+1)}>Next </button>
      </div>
    </>
  );
};

export default Header;
