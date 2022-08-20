import React,{useState} from 'react'
import {Add as AddIcon} from '@mui/icons-material';
import Fab from '@mui/material/Fab'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Tooltip from '@mui/material/Tooltip';
import DateRangeIcon from '@mui/icons-material/DateRange';
import {Box,styled,TextField,Stack,ButtonGroup,Button} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import VideocamIcon from '@mui/icons-material/Videocam';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
const StyledModal=styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})
const UserBox=styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    marginBottom:"20px",
})


const Add = () => {
    const [open,setOpen]=useState(false)
  return (
    <Box>
        <Tooltip onClick={e=>setOpen(true)}
         title="Add"
        sx={{position:"fixed",
        bottom:20,
        left:{xs:"calc(50% -25px)",md:30},}}>
        <Fab color="primary" aria-label="add">
            <AddIcon />
        </Fab>
        </Tooltip>
        <StyledModal
  open={open}
  onClose={e=>setOpen(true)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={280} bgcolor={"background.default"}
   color={"text.primary"} p={3} borderRadius={5}>
    <Typography fontWeight={500} variant="span">
        Create Post
    </Typography>
    <UserBox>
        <Avatar src="https://ps.w.org/metronet-profile-picture/assets/icon-256x256.png?rev=2464419" sx={{width:30,height:30}}></Avatar>
        <Typography fontWeight={500} variant="span">Joh Doe</Typography>
    </UserBox>
    <TextField
     sx={{width:"100%"}}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="what on your mind"
          variant="standard"
        />
        <Stack direction="row" gap={1} mt={2} mb={3}>
        <EmojiEmotionsIcon color="primary"/>
        <InsertPhotoIcon color="secondary"/>
        <VideocamIcon color="success"/>
        <PersonAddIcon color="error"/>
        </Stack>
        <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
  <Button>Post</Button>
  <Button sx={{width:"100px"}}><DateRangeIcon/></Button>
    </ButtonGroup>
  </Box>
</StyledModal>
    </Box>
  )
}

export default Add
