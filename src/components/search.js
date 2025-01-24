import React,{useState,useEffect} from 'react';
import axiosInstance from '../axios';
// from material ui component
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid2 from '@mui/material/Grid2';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import ButtonAppBar from './Navbar';
import Footer from "./Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: grey[500],
    },
    secondary: {
      main: grey[700],
    },
    spacing: 4,
  },
});


const useStyles = makeStyles(() => ({
	footer:{
        marginTop:theme.spacing(3),
        paddingTop:theme.spacing(3),
         [theme.breakpoints.up('md')]:{
             paddingTop:theme.spacing(3),     
        }
    },
	cardMedia: {
		paddingTop: '56.25%', // 16:9
	},
	link: {
		margin: theme.spacing(1, 1.5),
	},
	cardHeader: {
		backgroundColor:theme.palette.primary.main
			
	},
	postTitle: {
		fontSize: '16px',
		textAlign: 'left',
	},
	postText: {
		display: 'flex',
		justifyContent: 'left',
		alignItems: 'baseline',
		fontSize: '12px',
		textAlign: 'left',
		marginBottom: theme.spacing(2),
	},
}));
const Search = () => {
  const classes = useStyles();
	const search = 'search';
	const [appState, setAppState] = useState({
		search: '',
		posts: [],
	});

	useEffect(() => {
		axiosInstance.get(search + '/' + window.location.search).then((res) => {
			const allPosts = res.data;
			setAppState({ posts: allPosts });
			console.log(res.data);
		});
	}, [setAppState]);

  return (
	<>
	<ButtonAppBar/>
    <React.Fragment>
			<Container maxWidth="md" className={classes.footer}>
				<Grid2 container spacing={5} alignItems="flex-end" columns={{ xs: 4, sm: 8, md: 12 }}>
					{appState.posts.map((post) => {
						return (
							// Enterprise card is full width at sm breakpoint
							<Grid2 item key={post.id} size={{ xs: 2, sm: 4, md: 4 }}>
								<Card sx={{ maxWidth: 345, maxHeight:265}} variant="outlined">
									<Link
										color="textPrimary"
										href={'/post/' + post.slug}
										className={classes.link}
									>
										<CardMedia
											className={classes.cardMedia}
											image={post.img}
											title="Image title"
										/>
									</Link>
									<CardContent className={classes.cardContent}>
										<Typography
											gutterBottom
											variant="h6"
											component="h2"
											className={classes.postTitle}
										>
											{post.title.substr(0, 50)}...
										</Typography>
										<div className={classes.postText}>
											<Typography color="textSecondary">
												{post.excerpt.substr(0, 40)}...
											</Typography>
										</div>
									</CardContent>
								</Card>
							</Grid2>
						);
					})}
				</Grid2>
			</Container>
		</React.Fragment>
		<Footer/>
		</>
  )
}

export default Search
