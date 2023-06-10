import {useState } from "react";
import React from 'react';
import { NavLink } from 'react-router-dom';
import {AppBar, Toolbar, IconButton, Stack, Button, Typography, createTheme, ThemeProvider, Hidden, Drawer, List, ListItem, ListItemText} from '@mui/material';
import logo from './logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const theme = createTheme({
components: {
MuiButton: {
styleOverrides: {
root: {
fontSize: '16px',
},
},
},
MuiAppBar: {
styleOverrides: {
root: {
color: 'white',
paddingTop: '20px',
paddingBottom: '20px',
},
},
},
},
});

function Navbar(){
const [isOpen, setIsOpen] = useState(false);
const [width, setWidth] = useState(window.innerWidth);

window.onresize = () => {
setWidth(window.innerWidth);
}

return (
<ThemeProvider theme={theme}>
<AppBar position="static" sx={{bgcolor:"#450d7d"}} >
<Toolbar>
<IconButton size='medium' edge='start' aria-label='logo' component={NavLink} to='/'>
<img src={logo}alt='logo' width="25%" height="25%"/>
</IconButton>

<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}></Typography>
<Stack direction='row' spacing={2}>
<Hidden smDown>
  <Button color='inherit' component={NavLink} to='/' style={{display: width < 800 ? 'none' : 'block'}}>Home</Button>
  <Button color='inherit' component={NavLink} to='/dashboard' style={{display: width < 800 ? 'none' : 'block'}}>Dashboard</Button>
  <Button color='inherit' component={NavLink} to='' style={{display: width < 800 ? 'none' : 'block'}}></Button>
  <ConnectButton style={{display: width < 800 ? 'none' : 'block'}} showBalance={false}/>
</Hidden>

<Hidden mdUp>
<IconButton onClick={() => setIsOpen(!isOpen)} style={{display: width >= 800 ? 'none' : 'block'}}>
<MenuIcon style={{color:'white'}} />
</IconButton>
</Hidden>
</Stack>
</Toolbar>
<Drawer anchor='top' open={isOpen} onClose={() => setIsOpen(false)}>
  <List>
    <ListItem button component={NavLink} to='/' onClick={() => setIsOpen(false)}>
      <ListItemText primary='Home'/>
    </ListItem>
    <ListItem button component={NavLink} to='/dashboard' onClick={() => setIsOpen(false)}>
      <ListItemText primary='Dashboard'/>
    </ListItem>
    <ListItem button component={NavLink} to='' onClick={() => setIsOpen(false)}>
      <ConnectButton showBalance={false} />
    </ListItem>
    
  </List>
</Drawer>
</AppBar>
</ThemeProvider>
)
}

export default Navbar;