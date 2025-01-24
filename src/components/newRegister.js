import React, { useState } from 'react';
import axiosInstance from '../axios';
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import { useNavigate } from 'react-router-dom';
//MaterialUI
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import makeStyles from "@mui/styles/makeStyles";
import Container from '@mui/material/Container';
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
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin:theme.spacing(3, 0, 2),
	},
}));

export default function SignUp() {
	const nav=useNavigate()
	const initialFormData = Object.freeze({
		email: '',
		username: '',
		password: '',
	});

	const [formData, updateFormData] = useState(initialFormData);

	const handleChange = (e) => {
		updateFormData({
			...formData,
			// Trimming any whitespace
			[e.target.name]: e.target.value.trim(),
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);

		axiosInstance
			.post(`user/register/`, {
				email: formData.email,
				user_name: formData.username,
				password: formData.password,
			})
			.then((res) => {
				nav('/signIn')
				console.log(res);
				console.log(res.data);
			});
	};

	const classes = useStyles();

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}></Avatar>
				<Typography component="h1" variant="h5">
					Sign up
				</Typography>
				<form className={classes.form} noValidate>
					
							<TextField
								variant="outlined"
								required
								fullWidth
								margin='normal'
								id="email"
								label="Email Address"
								name="email"
								autoFocus
								autoComplete="email"
								onChange={handleChange}
							/>
						
							<TextField
								variant="outlined"
								required
								fullWidth
								margin='normal'
								id="username"
								label="Username"
								name="username"
								autoFocus
								autoComplete="username"
								onChange={handleChange}
							/>
						
							<TextField
								variant="outlined"
								required
								fullWidth
								margin='normal'
								name="password"
								label="Password"
								type="password"
								id="password"
								autoFocus
								autoComplete="current-password"
								onChange={handleChange}
							/>
						
							<FormControlLabel
								control={<Checkbox value="allowExtraEmails" color="primary" />}
								label="I want to receive inspiration, marketing promotions and updates via email."
							/>
						
					<Button
						type="submit"
						
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={handleSubmit}
					>
						Sign Up
					</Button>
					
							<Link href="#" variant="body2">
								Already have an account? Sign in
							</Link>
						
				</form>
			</div>
		</Container>
	);
}