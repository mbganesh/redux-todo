import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";

const FooterComponent = () => {
  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        margin:0,
        padding: "10px",
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="button"
            textAlign="center"
            component="div"
            sx={{ flexGrow: 1, '&:hover':{cursor:'pointer'} , textTransform:'none'}}
            onClick={() => window.open('https://mbganesh.netlify.app/' , '_blank')}
          >
            @mbganesh
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default FooterComponent;
