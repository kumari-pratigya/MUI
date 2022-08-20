import React, { useState } from 'react'
import MailIcon from '@mui/icons-material/Mail';
import Notification from '@mui/icons-material/Notifications';
import { InputBase,Badge, Avatar ,Box,Menu,MenuItem} from '@mui/material';
// import {MailIcon} from '@mui/icons-material/MailIcon';
import PetsIcon from '@mui/icons-material/Pets';
import { AppBar, styled, Toolbar, Typography} from '@mui/material'
const StyledToolbar=styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
})
const Search=styled("div")(({theme})=>({
  backgroundColor:"white",
  padding:"0 10px",
  borderRadius:theme.shape.borderRadius,
  width:"40%"
}));
const Icons=styled(Box)(({theme})=>({
  display:"none",
  alignItems:"center",
  gap:"20px",
  [theme.breakpoints.up("sm")]:{
    display:"flex"
  }
}))
const UserBox=styled(Box)(({theme})=>({
  display:"flex",
  alignItems:"center",
  gap:"20px",
  [theme.breakpoints.up("sm")]:{
    display:"none"
  }
}))
const Navbar = () => {
  const [open,setOpen]=useState(false)
  return (
    <AppBar position="sticky">
     <StyledToolbar> 
     <Typography sx={{display:{xs:"none",sm:"block"}}}
     variant="h6">    Navbar
     </Typography>
      <PetsIcon sx={{display:{xs:"block",sm:"none"}}}></PetsIcon>
      <Search><InputBase placeholder="search...."/></Search>
      <Icons>
      <Badge badgeContent={4} color="error">
        <MailIcon/>
    </Badge>
    <Badge badgeContent={2} color="error">
        <Notification/>
    </Badge>
    <Avatar sx={{width:30,height:30}} 
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbXGsL1KrGy8Tm9E71EDPwQHtjfaC9Z-78d5MABM0&s"
    onClick={e=>setOpen(true)}
  />
      </Icons>
      <UserBox  onClick={e=>setOpen(true)}>
        <Avatar sx={{width:30,height:30}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbXGsL1KrGy8Tm9E71EDPwQHtjfaC9Z-78d5MABM0&s"/>
        <Typography>John</Typography>
      </UserBox>
     </StyledToolbar>
     <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar
