import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h2>Name: {localStorage.getItem("name")}</h2>
      <p>Email: {localStorage.getItem("email")}</p>
      <p>User Type: {localStorage.getItem("userType")}</p>
      {localStorage.getItem("userType") === "admin" && (
        <Link to="/signup">Sign Up</Link>
      )}
      <div>
        {localStorage.getItem("userType") === "admin" && (
          <Link to="/add-affiliate">Add New Affiliate</Link>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
