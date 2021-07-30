import React, { useEffect } from "react";
import "./LandingPage.css";
import { Link, Redirect, useHistory } from "react-router-dom";

const LandingPage = () => {
  useEffect(() => {
    if (localStorage.getItem("userType") === null) {
      console.log("type", localStorage.getItem("userType"));
      history.push("/");
    }
  }, []);
  const history = useHistory();
  function handleClick() {
    localStorage.getItem("userType") && localStorage.removeItem("userType");
    history.push("/");
  }

  return (
    <div className="landing-page">
      <h2>Name: {localStorage.getItem("name")}</h2>
      <p>Email: {localStorage.getItem("email")}</p>
      <p>User Type: {localStorage.getItem("userType")}</p>
      {localStorage.getItem("userType") === "admin" && (
        <Link to="/signup" style={{ margin: 8 }}>
          Sign Up
        </Link>
      )}
      <div style={{ margin: 8 }}>
        {localStorage.getItem("userType") === "admin" && (
          <Link to="/add-affiliate">Add New Affiliate</Link>
        )}
      </div>
      <div>
        <button
          style={{ padding: 8, background: "lightblue", margin: 10 }}
          onClick={handleClick}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
