import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { makeStyles } from "@mui/styles";
import { createTheme } from '@mui/material/styles';
import { blue } from "@mui/material/colors";
//creat the theme
const theme = createTheme({
  palette: {
    primary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
      darker: blue[900],
    },
  },
});
const useStyles = makeStyles(() => ({
  appBar: {
    border: `1px solid ${theme.palette.primary.main}`,
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="static"
        color="white"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar>
          <Typography variant="h5" color="blue" noWrap
          component="div" 
          >
            BlogmeUP
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
export default Header;
