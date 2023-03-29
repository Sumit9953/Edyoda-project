import React from "react";
import "./style.css";
import Data from "../Icons/Data.png";



const Learning = () => {
  return (
    <div>
    <h1>Continue Learning</h1>
    <div className="learning">
      <p style={{position: 'absolute',right: 0 , color: 'blue'}}>VIEW MODULE DETAILS</p>
      <div className="learning_dash">
        <div>
          <div className="LEARNING_TITLe">
            <img
              style={{ width: "70px", height: "70px", borderRadius: "100%" }}
              src={Data}
              alt=""
            />
            <div className="learning_type">
              <h1 className="learning_name">DATA WRANGLING & VISUALIZATION</h1>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "100%",
                    margin: "10px 10px 0 0",
                  }}
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  alt=""
                />
                <p style={{ color: "blue" }}>Test Instructor</p>
              </div>
              <div className="range_input">
                <p>Live sessions</p>
                <input className="range" type="range"/>
              </div>
              <div className="range_input">
                <p>Assignment</p>
                <input className="range" type="range"/>
              </div>
              <div className="range_input">
                <p>MCQ Quiz</p>
                <input className="range" type="range"/>
              </div>
            </div>
          </div>
        </div>
        <div className="plan">
          <h1 className="plan_name">Todays Plan</h1>
          <p style={{ color: "gray" }}>21 March 2023</p>

          <h1 className="plan_title">Data Transformation using Pandas-3</h1>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ color: "gray" }}>Daily feedback</p>
            <p style={{ color: "blue" }}>Opens at 7:30pm</p>
          </div>
          <button className="live_btn">Join Live Session</button>
        </div>
      </div>
      <div className="progress">
        <h1 style={{fontSize: "20px"}}>Progress Overview</h1>
        <div className="progress_div">
            <h1>0%</h1>
            <p>Overall Grade</p>
        </div>
        <div className="progress_div">
            <h1>0%</h1>
            <p>Attendance</p>
        </div>
        <p className="anchor">VIEW DETAIL PROGRESS</p>
      </div>
    </div>
    </div>
  );
};

export default Learning;
