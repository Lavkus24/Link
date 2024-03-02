import React from "react";
import PropTypes from "prop-types";

import LockOutlined from "@mui/icons-material/LockOutlined";

import {
	Box,
	Grid,
	Avatar,
	Button,
	Container,
	TextField,
	Typography
} from "@mui/material";

import styles from "./styles";

const SignUpPage = ({
	userData,
	showError,
	isValidField,
	handleTextFieldChange,
	handleButtonClick
}) => {
	return (
		<Container component="main" maxWidth="xs">
			<div style={styles.paper}>
				<Avatar style={styles.avatar}>
					<LockOutlined />
				</Avatar>
				<Typography component="h1" variant="h5">
					{"Sign up"}
				</Typography>
				<form style={styles.form} noValidate>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								fullWidth
								autoFocus
								label="First Name"
								variant="outlined"
								autoComplete="fname"
								value={userData.firstName}
								onChange={handleTextFieldChange("firstName")}
								error={showError && !isValidField("firstName")}
								helperText={
									isValidField("firstName") ? "" :
										showError ? "What's your first name?"
											: ""
								}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								fullWidth
								label="Last Name"
								variant="outlined"
								autoComplete="lname"
								value={userData.lastName}
								onChange={handleTextFieldChange("lastName")}
								error={showError && !isValidField("lastName")}
								helperText={
									isValidField("lastName") ? "" :
										showError ? "What's your last name?"
											: ""
								}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								label="Email Address"
								variant="outlined"
								autoComplete="email"
								value={userData.emailAddress}
								onChange={handleTextFieldChange("emailAddress")}
								error={showError && !isValidField("emailAddress")}
								helperText={
									isValidField("emailAddress") ? "" :
										showError ?
											userData.emailAddress.length ?
												"Please enter a valid email address." :
												"You will use this when you sign in and if you ever need to reset your password."
											: ""
								}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								type="password"
								label="Password"
								variant="outlined"
								autoComplete="current-password"
								value={userData.password}
								onChange={handleTextFieldChange("password")}
								error={showError && !isValidField("password")}
								helperText={isValidField("password") ? "" :
									showError ?
										"Enter a combination of at least eight characters, with numbers, lowercase and uppercase letters, and symbols (such as ! and &)."
										: ""
								}
							/>
						</Grid>
					</Grid>
					<Button
						fullWidth
						color="primary"
						variant="contained"
						style={styles.submit}
						onClick={handleButtonClick("submit")}
					>
						{"Sign Up"}
					</Button>
					<Grid container justifyContent="flex-end">
						<Grid item>
							<Button
								variant="text"
								onClick={handleButtonClick("changePage")}
							>
								{"Already have an account? Sign in"}
							</Button>
						</Grid>
					</Grid>
				</form>
			</div>
			<Box mt={5}>
				<Typography variant="body2" color="textSecondary" align="center">
					{"Copyright © 2023"}
				</Typography>
			</Box>
		</Container>
	);
};

SignUpPage.propTypes = {
	userData: PropTypes.object,
	showError: PropTypes.bool,
	isValidField: PropTypes.func,
	handleTextFieldChange: PropTypes.func,
	handleButtonClick: PropTypes.func
};

export default SignUpPage;
