import React from "react";
import Certification from "../component/Certification/Certification";
import Learning from "../component/Learning/Learning";
import './style.css'

const Home = () => {
  return (
    <div className="home">
      <Certification />
      <Learning />
    </div>
  );
};

export default Home;
