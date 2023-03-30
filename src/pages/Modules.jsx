import React from "react";
import "./style.css";
import ModuleDetails from "../component/ModuleDetails/ModuleDetails";
import ModuleBar from "../component/ModuleBar/ModuleBar";

const Modules = () => {
    const name = "Assignment-1: Operators | Loops";
  return (
    <div className="modules">
      <ModuleBar />
      <ModuleDetails name={name} />
    </div>
 
  );
};

export default Modules;
