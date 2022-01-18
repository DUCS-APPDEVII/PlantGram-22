// Footer.js
// Author: S. Sigman  Date: Jan 12, 2022
//
// This component provides a simple footer component for
// pages.
// 
// Modification Log: 
//
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Footer() {
    return (
        <AppBar position="static" color="primary">
            <Toolbar variant="dense">
                <Typography 
                    variant="body1" 
                    color="inherit" 
                    align="center" 
                    component='div'
                >
                    © 2020 S. Sigman
                </Typography>
            </Toolbar>
        </AppBar>
    )
}