
import { makeStyles } from '@mui/styles'
import {Card} from '@mui/material'
import {CardContent} from '@mui/material'
import {CardMedia} from '@mui/material'
import Grid2 from '@mui/material/Grid2';
import {Typography} from '@mui/material'
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme } from '@mui/material/styles';
import React  from 'react'
const theme = createTheme({
  spacing: 4,})
const useStyles=makeStyles(()=>({
  cardMedia: {
    paddingTop:'56.25%',
  },
  link:{
    margin:theme.spacing(1,1.5)
  },
  cardHeader:{
    backgroundColor:
      theme.palette.type ==='light'?
      theme.palette.grey[200] :
      theme.palette.grey[700],
  },
  postTitle:{
    fontSize:'16px',
    textAlign:'left'
  },
  postText:{
    display:'flex',
    justifyContent:'left',
    alignItems:'baseline',
    fontSize:'12px',
    textAlign:'left',
    marginBottom:theme.spacing(2),
  }
  }))
const Posts = (props) => { 
  const {posts}=props;
  console.log(posts)
  const classes=useStyles();
  if (!posts || posts.length ===0)return<p>Cannot find any post</p>
  return (
    <React.Fragment>
    <Container maxWidth="md" >
     <Grid2 container spacing={{ xs: 2, md: 3 }} alignItems="flex-end"  columns={{ xs: 4, sm: 8, md: 12 }}>
					{posts.map((post) => {
						return (
							// Enterprise card is full width at sm breakpoint
							<Grid2 item key={post.id} size={{ xs: 2, sm: 4, md: 4 }} >
								<Card  variant="outlined">
								<Link
										color="textPrimary"
										href={'post/'+post.slug}
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

  )
}

export default Posts
