import "./style.css";
import {
  Box,
  Select,
  FormControl,
  MenuItem,
  AppBar,
  Toolbar,
  Container,
} from "@mui/material";

import React, { useContext,useEffect } from "react";
// import {
//   LayoutContext
// } from "../../../pages/layout/component/Layout";
import {NavBar} from './NavBar';
// import { ILayoutContext } from "../../../pages";
// interface IHeader {
// 	display:string
// }


const Header = (props) => {
//   const { open, filterValue, currentProject, setCurrentProject, setfilterValue,setProjectIdFilterValue } = useContext<ILayoutContext>(LayoutContext);
  
//   useEffect(()=>{
// 	setCurrentProject(1);
// 	setfilterValue("Project/project_id%20eq%20%27MS%20-%20Novartis-%2020oct2022%27");
// 	setProjectIdFilterValue("MS - Novartis- 20oct2022");
// },[])

//   const handleChange = (e: any) => {
// 	setCurrentProject(e.target.value);
// 	if(e.target.value == 1)
// 	{	
// 			setfilterValue("Project/project_id%20eq%20%27MS%20-%20Novartis-%2020oct2022%27");
// 			setProjectIdFilterValue("MS - Novartis- 20oct2022")
// 	}else {
// 			setfilterValue("Project/project_id%20eq%20%27TFS-Nimbus-1150-101%20-%20Advanced%20Solid%20Tumors%2011Oct2022%27");
// 			setProjectIdFilterValue("TFS-Nimbus-1150-101 - Advanced Solid Tumors 11Oct2022")
// 		}
//   }

  return (
    <div style={{display:props.display, height:'64px'}}>
        <AppBar className="header-bar"
            position="fixed"
	        sx={{
	            backgroundColor: "#ffffff",
	            boxShadow: "7px 0px 10px rgba(0, 45, 77, 0.1)",
	        }}>
            <Container sx={{ maxWidth: "70%" }} maxWidth={false}>
                <Toolbar disableGutters>
                	
	                <Box className="navBar" sx={{ flexGrow: 1, paddingRight: "1.85rem" }}>
	                    <NavBar />
	                </Box>
                    {/* <Box className="product-list-select-box">
		                <FormControl className="product-list-select">
		                    <label>Current Project</label>
		                    <Select defaultValue={1} value={currentProject} id="frmProductList" onChange={handleChange}>
			                    <MenuItem value={1}>MS - Novartis- 20oct2022</MenuItem>
			                    <MenuItem value={2}>TFS-Nimbus-1150-101 - Advanced Solid Tumors 11Oct2022</MenuItem>
		                    </Select>
		                </FormControl>
                    </Box> */}
                </Toolbar>
            </Container>
        </AppBar>
      
    </div>
  );
};

export default Header;
