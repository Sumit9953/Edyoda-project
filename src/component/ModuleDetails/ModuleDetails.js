import React from "react";
import "./style.css";
import Calendar from "../Icons/calendar.svg";
import clock from "../Icons/clock-blue.svg";

const ModuleDetails = ({name}) => {
  return (
    <div>
      <div className="module_details">
        <div>
          <h1>{name}</h1>
          <p className="module_date">20 December 2021</p>
        </div>

        <div
          style={{
            display: "flex",
            marginLeft: "500px",
            justifyContent: "flex-end",
          }}
        >
          <div style={{ marginRight: "20px" }}>
            <h1 style={{ fontSize: "24px", fontWeight: "300" }}>3</h1>
            <p className="module_date">Problem</p>
          </div>
          <div>
            <h1 style={{ fontSize: "24px", fontWeight: "300" }}>100</h1>
            <p className="module_date">Score</p>
          </div>
        </div>
      </div>
      <div className="assignment_detals">
        <h1>Assignment Details</h1>
        <div className="Assignment_card">
          <div className="assignment_score">
            <div style={{ marginRight: "20px" }}>
              <h1 style={{ fontSize: "24px", fontWeight: "300" }}>3</h1>
              <p className="module_date">Problem</p>
            </div>
            <div>
              <h1 style={{ fontSize: "24px", fontWeight: "300" }}>100</h1>
              <p className="module_date">Score</p>
            </div>
          </div>
          <div className="assignment_score2">
            <div style={{ marginRight: "20px" }}>
              <h1 style={{ fontSize: "24px", fontWeight: "300" , marginBottom: "20px" }}>start</h1>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  style={{ width: "20px", height: "20px", marginRight: "20px" }}
                  src={Calendar}
                  alt=""
                />
                <p className="module_date">20 December 2021</p>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  style={{ width: "20px", height: "20px", marginRight: "20px" }}
                  src={clock}
                  alt=""
                />
                <p className="module_date">7 : 30pm</p>
              </div>
            </div>
            <div style={{ marginRight: "20px" }}>
              <h1 style={{ fontSize: "24px", fontWeight: "300" , marginBottom: "20px" }}>Due:</h1>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  style={{ width: "20px", height: "20px", marginRight: "20px" }}
                  src={Calendar}
                  alt=""
                />
                <p className="module_date">20 December 2021</p>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  style={{ width: "20px", height: "20px", marginRight: "20px" }}
                  src={clock}
                  alt=""
                />
                <p className="module_date">7 : 30pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleDetails;
