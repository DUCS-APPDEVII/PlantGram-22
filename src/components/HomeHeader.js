// HomeHeader.js
// Author: S. Sigman    Date: Jan 7, 2022
// The HomeHeader component provides a header bar for, 
// the home (landing) page, providing sign in and 
// sign up dialogs. 
//
// Note: This component needs to be refactored by converting
// the two dialog components to standalone components. S. 
// Sigman Jan 13, 2021
// 
// Modification Log:
// 1. SignUp button and dialog refactored into a new
//    component, <SignUp />. S. Sigman Jan 17, 2022

// App imports
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

// Dialog imports
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import SignUp from './SignUp';

export default function HomeHeader() {
  // state of the SignIn dialog, setSignInOpen modifies the signInOpen state
  // default signInOpen=false
  const [signInOpen, setSignInOpen] = React.useState(false);

  // methods to manipulate the SignIn dialog
  const handleClickSignInOpen = () => {
    setSignInOpen(true);
  };

  const handleSignInClose = () => {
    setSignInOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            PlantGram
          </Typography>
          <Button color="inherit" onClick={handleClickSignInOpen}>Sign In</Button>
          <Dialog open={signInOpen} onClose={handleSignInClose}>
            <DialogTitle>
              <Typography align="center" variant="h6" >
                Sign In
              </Typography>
            </DialogTitle>
            <DialogContent dividers={true}>
              <TextField
                autoFocus
                margin="dense"
                id="userId"
                label="User Id"
                type="email"
                fullWidth
                required
                variant="standard"
              />
              <TextField 
              margin="dense"
              id="password"
              label="Password"
              type="password"
              fullWidth
              required
              variant="standard"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleSignInClose}>Cancel</Button>
              <Button onClick={handleSignInClose}>Sign In</Button>
            </DialogActions>
          </Dialog>
          <SignUp />
        </Toolbar>
      </AppBar>
    </Box>
  );
}