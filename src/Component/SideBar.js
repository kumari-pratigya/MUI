import React from 'react'
import InboxIcon from '@mui/icons-material/Inbox';
import GroupsIcon from '@mui/icons-material/Groups';
import {AccountBox,ModeNight,Storefront } from '@mui/icons-material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LayersClearIcon from '@mui/icons-material/LayersClear';
import Settings from '@mui/icons-material/Settings';
// import AccountBox from '@mui/icons-material/AccountBox';
import {Box,List,ListItem,ListItemButton,ListItemIcon,ListItemText, Switch} from '@mui/material'
const SideBar = ({mode,setMode}) => {
  return (
    <Box bgcolor={"background.default"}
     flex={1} 
     p={2}
     sx={{display:{xs:"none",sm:"block"}}}>
     <Box position="fixed">
      <List>
      <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-lest"> 
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="HomePage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-lest"> 
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary="MarketPlace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-lest"> 
              <ListItemIcon>
                <LayersClearIcon/>
              </ListItemIcon>
              <ListItemText primary="pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-lest"> 
              <ListItemIcon>
                <GroupsIcon/>
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-lest"> 
              <ListItemIcon>
                <PeopleAltIcon/>
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-lest"> 
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-lest"> 
              <ListItemIcon>
                <AccountBox/>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-lest"> 
              <ListItemIcon>
                <ModeNight/>
              </ListItemIcon>
                <Switch onChange={e=>setMode(mode==='light'?"dark":"light")}/>
            </ListItemButton>
          </ListItem>
          </List>
          </Box>
    </Box>
  )
}

export default SideBar
