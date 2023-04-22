import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import FullScreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined"
import NotificationsNoneOutlined from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutLinedIcon from "@mui/icons-material/ListOutlined";
import { Mail, Code, Notifications, Message } from "@mui/icons-material"
import {
  styled,
  Typography,
  Box,
  InputBase,
  Badge,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  menuItemClasses,
} from "@mui/material"
import { green } from '@mui/material/colors';

// import { useContext} from "react";
// import { DarkModeContext} from "../../context/darkModeContext";

const SearchBar = styled("div")(({ theme }) => ({
      backgroundColor: "rgba(0,0,0,0.2)",
      padding: "0 10px",
      borderRadius: theme.shape.borderRadius,
      width: "40%",
    }))

const Actions = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "0.2px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}))

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}))

const Navbar = () => {

  //const {dispatch} = useContext(DarkModeContext)

  return (
    <div  className="navbar">
      <div style={{backgroundColor: green}} className="wrapper">
      <Typography></Typography>

      <Typography
          variant='h6'
          fontWeight={600}
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          {"Primary Header"}
        </Typography>
        <Code sx={{ display: { xs: "block", sm: "none" } }} />
      <SearchBar>
           <InputBase placeholder='Search...' />
         </SearchBar>
         <Actions>
           <IconButton>
             <Badge badgeContent={76} color='error'>
               <Mail />
             </Badge>
           </IconButton>
           <IconButton>
             <Badge badgeContent={"4"} color='error'>
               <Notifications color='inherit' />
             </Badge>
           </IconButton>
           <IconButton>
             <Badge badgeContent={"15"} color='error'>
              <Message color='inherit' />
             </Badge>
           </IconButton>
           <Avatar
             sx={{ width: 30, height: 30, marginLeft: "13px" }}
             src="https://images.pexels.com/photos/1967902/pexels-photo-1967902.jpeg?auto=compress&cs=tinysrgb&w=600"
             alt='JD'
           />
         </Actions>
               {/* mobile actions (hidden for desktop)*/}
        <UserBox>
          <Avatar
            sx={{ width: 30, height: 30, marginLeft: "13px" }}
          />
          <Typography variant='span'>John</Typography>

          <Menu
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </UserBox>

        {/* <div className="items">
          <div className="item">
            <Mail className="icon" />
          </div>
          <div className="item">
            <DarkModeOutlined className="icon" />
          </div>
          <div className="item">
            <FullScreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlined className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ListOutLinedIcon className="icon" />
          </div>
          <div className="item">
           <img src="https://images.pexels.com/photos/1967902/pexels-photo-1967902.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="avatar"/>
          </div> 
        </div>*/}
      </div>
    </div>
  )
}

export default Navbar



// import React, { useState } from "react"

// import { Mail, Code, Notifications, Message } from "@mui/icons-material"
// import {
//   AppBar,
//   Toolbar,
//   styled,
//   Typography,
//   Box,
//   InputBase,
//   Badge,
//   IconButton,
//   Avatar,
//   Menu,
//   MenuItem,
//   menuItemClasses,
// } from "@mui/material"

// const StyledToolbar = styled(Toolbar)({
//   display: "flex",
//   justifyContent: "space-between",
// })

// const SearchBar = styled("div")(({ theme }) => ({
//   backgroundColor: "rgba(0,0,0,0.2)",
//   padding: "0 10px",
//   borderRadius: theme.shape.borderRadius,
//   width: "40%",
// }))

// const Actions = styled(Box)(({ theme }) => ({
//   display: "none",
//   alignItems: "center",
//   gap: "0.2px",
//   [theme.breakpoints.up("sm")]: {
//     display: "flex",
//   },
// }))

// const UserBox = styled(Box)(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   gap: "10px",
//   [theme.breakpoints.up("sm")]: {
//     display: "none",
//   },
// }))

// const Headerbar = () => {
//   const [open, setOpen] = useState(false)

//   const openMenu = () => setOpen(true)
//   const closeMenu = () => setOpen(false)

//   return (
//     <AppBar position='sticky'>
//       <StyledToolbar>
//         {/* brandname */}
//         <Typography
//           variant='h6'
//           fontWeight={600}
//           sx={{ display: { xs: "none", sm: "block" } }}
//         >
//           {"Primary Header"}
//         </Typography>
//         <Code sx={{ display: { xs: "block", sm: "none" } }} />

//         {/* searchbar */}
//         <SearchBar>
//           <InputBase placeholder='Search...' />
//         </SearchBar>

//         {/* actions */}
//         <Actions>
//           <IconButton>
//             <Badge badgeContent={4} color='error'>
//               <Mail />
//             </Badge>
//           </IconButton>
//           <IconButton>
//             <Badge badgeContent={"10+"} color='error'>
//               <Notifications color='inherit' />
//             </Badge>
//           </IconButton>
//           <IconButton>
//             <Badge badgeContent={"10+"} color='error'>
//               <Message color='inherit' />
//             </Badge>
//           </IconButton>


//           <Avatar
//             sx={{ width: 30, height: 30, marginLeft: "13px" }}
//             src='/logo.png'
//             alt='JD'
//           />
//         </Actions>

//         {/* mobile actions (hidden for desktop) */}
//         <UserBox>
//           <Avatar
//             sx={{ width: 30, height: 30, marginLeft: "13px" }}
//             onClick={openMenu}
//           />
//           <Typography variant='span'>John</Typography>

//           <Menu
//             open={open}
//             onClose={closeMenu}
//             anchorOrigin={{
//               vertical: "top",
//               horizontal: "right",
//             }}
//             transformOrigin={{
//               vertical: "top",
//               horizontal: "right",
//             }}
//           >
//             <MenuItem>Profile</MenuItem>
//             <MenuItem>My account</MenuItem>
//             <MenuItem>Logout</MenuItem>
//           </Menu>
//         </UserBox>
//       </StyledToolbar>
//     </AppBar>
//   )
// }

// export default Headerbar