import React from "react";
import "./style.css";
import HomeIcon from "@mui/icons-material/Home";
import BurstModeIcon from '@mui/icons-material/BurstMode';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const Sidebar = () => {
  return (
    <div className="side_bar">
      <div className="side_bar_icon">
        <HomeIcon sx={{ fontSize: 30 }} />
        <p className="icon-name">HOME</p>
      </div>
      <div className="side_bar_icon">
        <BurstModeIcon sx={{ fontSize: 30 }} />
        <p className="icon-name">MODULES</p>
      </div>
      <div className="side_bar_icon">
        <AccountBoxIcon sx={{ fontSize: 30 }} />
        <p className="icon-name">INSTRUCTORS</p>
      </div>
    </div>
  );
};

export default Sidebar;
