import React from "react";
import "./style.css";
import ModuleDetails from "../component/ModuleDetails/ModuleDetails";
import ModuleBar from "../component/ModuleBar/ModuleBar";

const QuizModules = () => {
    const name = "Quiz-1: Data Type";
  return (
    <div className="modules">
      <ModuleBar />
      <ModuleDetails name={name} />
    </div>
 
  );
};

export default QuizModules;