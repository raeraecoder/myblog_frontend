import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import makeStyles from "@mui/styles/makeStyles";
// import Searchbar from './searchBar';
// for search bar
import SearchBar from 'material-ui-search-bar';
const theme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      light: grey[200],
      main: grey[500],
      dark: grey[700],
      darker: grey[900],
    },
  },
});
const useStyles = makeStyles(() => ({
	newColor: {
		backgroundColor: theme.palette.primary.light,
    
	},
  newBtn:{
    color:theme.palette.primary.dark
  }
	

}));
export default function ButtonAppBar() {
  const nav = useNavigate();
  
  const handleRegistration = () => {
    console.log('hello');
    nav('signUp');
  };
  const classes = useStyles();
 
  
  //for search
	const [data, setData] = useState({ search: '' });

	const goSearch = (e) => {
		 nav({
			pathname: '/search/',
			search: '?search=' + data.search,
		});
		window.location.reload();
	};
// search bar component from google


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar className={classes.newColor}>
          <IconButton
            size="large"
            edge="start"
           
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography color="text.primary" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            centralwOrld Foods
          </Typography>

          <SearchBar
						value={data.search}
						onChange={(newValue) => setData({ search: newValue })}
						onRequestSearch={() => goSearch(data.search)}
					/>
 
        </Toolbar>
        

      </AppBar>
    </Box>
  );
}
