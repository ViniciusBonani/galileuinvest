import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Logo01 from '../images/logo01.jpg'
import Image from 'next/image';
import Avatar from '@mui/material/Avatar';

export default function ButtonAppBar() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{ background:'#dfff00', display: 'flex', justifyContent: 'space-between' }}>


            <Image 
              src={Logo01}
              alt="Galileu" 
              width="150"
              height="45"
            />
{/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
            {/* <Button  sx={{ color:'#565458'}}>Login</Button> */}
          </Toolbar>
        </AppBar>
      </Box>
    );
  }