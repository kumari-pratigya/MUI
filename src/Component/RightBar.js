import React from 'react'
import { Box,Typography } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

const RightBar = () => {
  return (
    <Box bgcolor={"background.default"} flex={2} 
     p={2}
     sx={{display:{xs:"none",sm:"block"}}}>
      <Box  position="fixed" width={300} >
        <Typography variant="h6" fontWeight={100}>Online Friends</Typography>
        <AvatarGroup max={6}>
      <Avatar alt="Remy Sharp" src="https://ps.w.org/metronet-profile-picture/assets/icon-256x256.png?rev=2464419"/>
      <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" />
      <Avatar alt="Cindy Baker" src="https://qph.cf2.quoracdn.net/main-qimg-217015358349186e0e382cb15c5d7c63-lq"/>
      <Avatar alt="Agnes Walker" src="https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/11/alone-Best-Dp-Profile-Images-For-Instagram-photo.gif" />
      <Avatar alt="Remy Sharp" src="https://ps.w.org/metronet-profile-picture/assets/icon-256x256.png?rev=2464419"/>
      <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" />
      <Avatar alt="Trevor Henderson" src="https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png" />
    </AvatarGroup>
    <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
      Latest Photos
    </Typography>
    <ImageList cols={3} rowHeight={100} gap={5}>
        <ImageListItem>
        <img  src="https://ps.w.org/metronet-profile-picture/assets/icon-256x256.png?rev=2464419"/>
      </ImageListItem>
      <ImageListItem>
        <img  src="https://ps.w.org/metronet-profile-picture/assets/icon-256x256.png?rev=2464419"/>
      </ImageListItem>
      <ImageListItem>
        <img  src="https://ps.w.org/metronet-profile-picture/assets/icon-256x256.png?rev=2464419"/>
      </ImageListItem>
    </ImageList>
    <Typography variant="h6" fontWeight={100} mt={2}>
      Latest Conversation
    </Typography>

    <List >
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://ps.w.org/metronet-profile-picture/assets/icon-256x256.png?rev=2464419" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{display: 'inline'}}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://ps.w.org/metronet-profile-picture/assets/icon-256x256.png?rev=2464419" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline'}}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://ps.w.org/metronet-profile-picture/assets/icon-256x256.png?rev=2464419" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline'}}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  )
}

export default RightBar
