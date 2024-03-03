import React from "react";
import PropTypes from "prop-types";
import LockOutlined from "@mui/icons-material/LockOutlined";

import {
	Box,
	Grid,
	Paper,
	Avatar,
	Button,
	TextField,
	Typography
} from "@mui/material";

import styles from "./styles";

const SignInPage = ({
	userData,
	showError,
	isValidField,
	handleTextFieldChange,
	handleButtonClick
}) => {

	return (
		<Grid container component="main" style={styles.root}>
			<Grid item xs={false} sm={4} md={7} style={styles.image} />
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
				<div style={styles.paper}>
					<Avatar style={styles.avatar}>
						<LockOutlined />
					</Avatar>
					<Typography component="h1" variant="h5">
						{"Sign in"}
					</Typography>
					<form style={styles.form} noValidate>
						<TextField
							required
							fullWidth
							autoFocus
							margin="normal"
							label="Email Address"
							variant="outlined"
							autoComplete="email"
							value={userData.emailAddress}
							onChange={handleTextFieldChange("emailAddress")}
							error={showError && !isValidField("emailAddress")}
							helperText={
								isValidField("emailAddress") ? "" :
									showError ?
										"Please enter a valid email address."
										: ""
							}
						/>
						<TextField
							required
							fullWidth
							margin="normal"
							type="password"
							label="Password"
							variant="outlined"
							autoComplete="current-password"
							value={userData.password}
							onChange={handleTextFieldChange("password")}
						/>
						<Button
							fullWidth
							color="primary"
							variant="contained"
							style={styles.submit}
							onClick={handleButtonClick("submit")}
						>
							{"Sign In"}
						</Button>
						<Grid container>
							<Grid item xs>
								<Button
									variant="text"
									onClick={handleButtonClick("forgotPassword")}
								>
									{"Forgot password?"}
								</Button>
							</Grid>
							<Grid item>
								<Button
									variant="text"
									onClick={handleButtonClick("changePage")}
								>
									{"Don't have an account? Sign Up"}
								</Button>
							</Grid>
						</Grid>
						<Box mt={5}>
							<Typography variant="body2" color="textSecondary" align="center">
								{"Copyright © 2023"}
							</Typography>
						</Box>
					</form>
				</div>
			</Grid>
		</Grid>
	);
};

SignInPage.propTypes = {
	userData: PropTypes.object,
	showError: PropTypes.bool,
	isValidField: PropTypes.func,
	handleTextFieldChange: PropTypes.func,
	handleButtonClick: PropTypes.func
};

export default SignInPage;
