import React, { useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  BarChartSharp,
  SupervisorAccountSharp,
  FormatListBulletedSharp,
  Biotech
} from "@mui/icons-material";
import {Badge} from '@mui/material';
//import CryptoJS from 'crypto-js';


const NavBar = () => {

  return (
   
    <div className="nav-bar">
        <NavLink className="header-nav-link"  to="/dashboard">
            <BarChartSharp  className="header-nav-icon" />
            <span className="dashboard"> Dashboard</span>
        </NavLink>
        <NavLink className="header-nav-link" id="trials" to="/trials">
            <Biotech  className="header-nav-icon" /> <span className="trials">Trials</span>
        </NavLink>
        <NavLink className="header-nav-link" id="investigatorlist" to="/investigatorlist">
            <SupervisorAccountSharp className="header-nav-icon"/> Investigator List
        </NavLink>
        <NavLink className="header-nav-link" id="saveInvestigatorList" to="/SaveInvestigatorList">
            <FormatListBulletedSharp className="header-nav-icon"/> My List <Badge sx={{marginLeft:'1rem'}} badgeContent={4} showZero></Badge>
        </NavLink>
    </div>
    
  );
};

export  {NavBar};
