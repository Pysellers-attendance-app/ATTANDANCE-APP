import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="overlay">
        <img src="/assets/pylogo.jpeg" alt="Pysellers Logo" className="logo" />
        <h1 className="title">Welcome to Pysellers Private Limited</h1>
        <p className="subtitle">Smart Attendance Solution for Software Teams</p>
        <div className="button-group">
          <button
            className="login-btn admin"
            onClick={() => navigate("/admin")}
          >
            Admin Login
          </button>
          <button
            className="login-btn employer"
            onClick={() => navigate("/employer")}
          >
            Employer Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
