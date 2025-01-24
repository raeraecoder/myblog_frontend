import * as React from 'react';
import Container from '@mui/material/Container';
import makeStyles from '@mui/styles/makeStyles';
import { Grid2, Typography } from "@mui/material";
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
const theme = createTheme({
    spacing: 4,
    palette: {
        primary: {
          light: grey[300],
          main: grey[500],
          dark: grey[700],
          darker: grey[900],
        },

      },
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536,
        },
      },
   
      

  });
  
const useStyles=makeStyles(()=>({
    footer:{
        borderTop:`1px solid ${theme.palette.primary.main}`,
        marginTop:theme.spacing(8),
        paddingTop:theme.spacing(3),
        paddingBottom:theme.spacing(3),
         [theme.breakpoints.up('md')]:{
             paddingTop:theme.spacing(6),
             paddingBottom:theme.spacing(6),
        }
    },
    btn:{
        color:'black',
        background:'pink',
        border:'none'
    }
}))


function Copyright(){
    return(
        <Typography
        variant='body2' color='textSecondary' align='center'
        >
            {'Coptright @'}
            <Link underline="none">
            MyWebsite
            </Link>
            {" "}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

const footers=[
    {
        title:'About us',
        description:['Provide information','Contact','Locations']
    },
    {
        title:'Blogs',
        description:['Foods',
            'Accessories',
            'Famous places',
            'Eletric products',
            
        ]
    },
    {
        title:'Resources',
        description:[
            
            'CentralWorld ',
           
        ]

    },
    {
        title:'Legal',
        description:[
            'Privacy policy','Terms of use'
        ]

    }
]
function Footer() {  
    const classes=useStyles(); 
  return (
    <React.Fragment>
        <Container maxWidth='md'   className={classes.footer}>
           <Grid2 container spacing={4} justifyContent='space-evenly'>
            {footers.map((footer)=>(
                <Grid2 item xs={6} sm={3} key={footer.title} >
                    <Typography variant='h6' color='textPrimary' align='center'>
                        {footer.title}
                    </Typography>
                    <ul>
                        {footer.description.map((item)=>(
                            <li key={item} style={{listStyle:'none'}}>
                                <Link href="#" variant='subtitle1' color='textSecondary' underline="none">
                                {item}
                                </Link>

                            </li>
                        ))}
                    </ul>
                </Grid2>
            ))}
           </Grid2>
           <Box mt={5}> 
            <Copyright/>
           </Box>
        </Container>

    </React.Fragment>
  );
}

export default Footer;
