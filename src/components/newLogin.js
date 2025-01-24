import React, { useState } from 'react';
import axiosInstance from '../axios';

//MaterialUI
import Avatar from "@mui/material/Avatar";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import makeStyles from "@mui/styles/makeStyles";
import Container from '@mui/material/Container';
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import { useNavigate } from 'react-router-dom';
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
  });
const useStyles = makeStyles(() => ({
	paper: {
		marginTop:theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin:theme.spacing(1),
		backgroundColor: theme.palette.primary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop:theme.spacing(1),
	},
	submit: {
		margin:theme.spacing(3, 0, 2),
	},
}));

export default function SignIn() {
	const nav=useNavigate()
	
	const initialFormData = Object.freeze({
		email: '',
		password: '',
	});

	const [formData, updateFormData] = useState(initialFormData);

	const handleChange = (e) => {
		updateFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);

		axiosInstance
			.post(`token/`, {
				email: formData.email,
				password: formData.password,
			})
			.then((res) => {
				localStorage.setItem('access_token', res.data.access);
				localStorage.setItem('refresh_token', res.data.refresh);
				axiosInstance.defaults.headers['Authorization'] =
					'JWT ' + localStorage.getItem('access_token');
				nav('/')
				//console.log(res);
				//console.log(res.data);
			});
	};

	const classes = useStyles();

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}></Avatar>
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>
				<form className={classes.form} noValidate>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
						onChange={handleChange}
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						onChange={handleChange}
					/>
					<FormControlLabel
						control={<Checkbox value="remember" color="primary" />}
						label="Remember me"
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={handleSubmit}
					>
						Sign In
					</Button>
					
							<Link href="#" variant="body2">
								Forgot password?
							</Link>
						
							<Link href="#" variant="body2">
								{"Don't have an account? Sign Up"}
							</Link>
						
				</form>
			</div>
		</Container>
	);
}