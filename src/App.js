import './App.css';
import React,{useState} from 'react'
import { Button, Typography,Box } from '@mui/material'; 
// import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
// import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
// import styledEngine from '@mui/styled-engine';
import Navbar from './Component/Navbar';
import SideBar from './Component/SideBar';
import RightBar from './Component/RightBar';
import {Stack} from '@mui/system';
import Feed from './Component/Feed';
import Add from './Component/Add';
// import createTheme from '@mui/material';
import { ThemeProvider,createTheme } from '@mui/material';

function App() {
  const [mode,setMode]=useState("light")
  const darkTheme=createTheme({
    palette:{
      mode:mode
    }
  })
  // const ButtonStyle=styledEngine(Button)(({theme})=>({
  //   backgroundColor:theme.palette.otherColor.main,
  //  color:"white",
  //  margin:5,
  //  "&:hover":{
  //   backgroundColor:"blue"
  //  },
  //  "&:disabled":{
  //   backgroundColor:"gray",
  //   color:"white",
  //  },
  // }));
  return (
    <>
     {/* <Button variant="text" color="secondary" size="12px" startIcon={<SettingsOutlinedIcon/>}>click here</Button>
     <Button  variant="outlined">click here</Button>
     <Button   variant="contained" 
     sx={{

     }} size="small" disabled>click here</Button>
     <Typography component="p">hello</Typography>
     <ButtonStyle>click here</ButtonStyle>
     <ButtonStyle>click here</ButtonStyle>  */}
     <ThemeProvider theme={darkTheme}>
     <Box bgColor={"background.default"} color={"text.primary"}>
      <Navbar/>
     <Stack direction="row"
      spacing={2}
      justifyContent="space-between">
     <SideBar setMode={setMode} mode={mode}/>
     <Feed/>
     <RightBar/>
     </Stack>
     <Add/>
    </Box>
     </ThemeProvider>
     
    </>
  );
}

export default App;
