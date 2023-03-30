import React from 'react'
import { Link } from 'react-router-dom'
import Topic from "../Icons/topic.svg";
import assignment from "../Icons/activeAssignment.svg";
import moduleQuiz from "../Icons/moduleQuiz.svg";

const ModuleBar = () => {
  return (
    <div className="module_title">
          <Link className="Link_style" to="/modules">
            <div className="module_card">
              <img className="module_img" src={Topic} alt="" />
              <h1
                style={{
                  fontSize: "18px",
                  color: "gray",
                  fontWeight: "100",
                }}
              >
                Python Loops
              </h1>
            </div>
          </Link>
          <Link className="Link_style" to="/modules/quiz">
            <div className="module_card">
              <img className="module_img" src={moduleQuiz} alt="" />
              <h1
                style={{ fontSize: "18px", color: "gray", fontWeight: "100" }}
              >
                Quiz-1: Data Types
              </h1>
            </div>
          </Link>
          <Link className="Link_style" to="/modules/assignment">
            <div className="module_card">
              <img className="module_img" src={assignment} alt="" />
              <h1
                style={{ fontSize: "18px", color: "gray", fontWeight: "100" }}
              >
                Assignment-1: Operators | Loops
              </h1>
            </div>
          </Link>
        </div>
  )
}

export default ModuleBar