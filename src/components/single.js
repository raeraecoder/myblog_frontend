import React, { useState, useEffect } from "react";
import axiosInstance from "../axios";
import { useParams } from "react-router-dom";
//MaterialUI
import CardMedia from '@mui/material/CardMedia';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import makeStyles from "@mui/styles/makeStyles";
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
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const Single = () => {
  const { slug } = useParams();
  const classes = useStyles();

  const [data, setData] = useState({ posts: [] });

  useEffect(() => {
    axiosInstance.get(slug).then((res) => {
      setData({
        posts: res.data,
      });
      console.log(res.data);
    });
  }, [setData]);

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div className={classes.paper}></div>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography
            component="h3"
            variant="h4"
            align="center"
            color="textPrimary"
            gutterBottom
            mb="2rem"
          >
            {data.posts.title}
          </Typography>
		  <CardMedia
        component="img"
        height="300"
        image={data.posts.img}
        alt={data.posts.title}
       
      />

          <Typography variant="h5"  color="textSecondary" mt='1.5rem'>
           
            {data.posts.content}

          </Typography>
          <Typography variant="h5" color="textSecondary" mt='1rem' >
           Location : {data.posts.excerpt}
          </Typography>
        </Container>
      </div>
    </Container>
  );
};

export default Single;
