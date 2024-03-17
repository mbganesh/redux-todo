import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const HeaderComponent = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" textAlign='center' component="div" sx={{ flexGrow: 1 }}>
            Todos
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default HeaderComponent



