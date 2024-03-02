import React, { useCallback, useEffect, useState, useMemo } from "react";

import { useNavigate } from "react-router-dom";

import validator from "validator";

import SignInPage from "../SignInPage";
import SignUpPage from "../SignUpPage";

const Authentication = () => {
	const navigate = useNavigate();

	const [showError, setShowError] = useState(false);
	const [onSignUpPage, setOnSignUpPage] = useState(false);
	const [userData, setUserData] = useState({
		id: "",
		firstName: "",
		lastName: "",
		emailAddress: "",
		password: "",
		token: ""
	});

	const isValidField = useCallback(fieldKey => {
		if (fieldKey === "firstName" || fieldKey === "lastName")
			return /^[a-zA-Z]+$/.test(userData[fieldKey]);
		if (fieldKey === "emailAddress")
			return validator.isEmail(userData[fieldKey]);
		if (fieldKey === "password")
			return validator.isStrongPassword(userData[fieldKey]);
		if (fieldKey === "role")
			return userData[fieldKey] !== "";
		return true;
	}, [userData]);

	const isValidFormData = useMemo(() => {
		if (onSignUpPage) {
			const isValid = Object.keys(userData).map(fieldKey => isValidField(fieldKey));
			return isValid.every(value => value === true);
		}

		return isValidField("emailAddress");
	}, [
		userData,
		onSignUpPage,
		isValidField
	]);

	const handleTextFieldChange = useCallback(fieldKey => event => {
		setUserData({ ...userData, [fieldKey] : event.target.value });
	}, [userData, setUserData]);

	const handleButtonClick = useCallback(fieldKey => () => {
		if (fieldKey === "forgotPassword") {
			navigate("#");
		} else if (fieldKey === "changePage") {
			setShowError(false);
			setOnSignUpPage(oldState => !oldState);
			setUserData({ ...userData, password: "" });
		} else if (fieldKey === "submit") {
			if (isValidFormData) {
				if (onSignUpPage) {
					// call sign up api here
					setUserData({ ...userData, id: 1 }); // change only id temporary for testing
				} else {
					// call login api here
					setUserData({ ...userData, id: 1 }); // change only id temporary for testing
				}
			} else {
				setShowError(true);
			}
		}
	}, [
		navigate,
		isValidFormData,
		onSignUpPage,
		userData,
		setUserData
	]);

	useEffect(() => {
		if (userData?.id) {
			navigate("/profile");
		}
	}, [
		navigate,
		userData?.id
	]);

	return (
		<>
			{onSignUpPage ?
				<SignUpPage
					userData={userData}
					setUserData={setUserData}
					showError={showError}
					isValidField={isValidField}
					handleTextFieldChange={handleTextFieldChange}
					handleButtonClick={handleButtonClick}
				/> :
				<SignInPage
					userData={userData}
					showError={showError}
					isValidField={isValidField}
					handleTextFieldChange={handleTextFieldChange}
					handleButtonClick={handleButtonClick}
				/>}
		</>
	);
};

export default Authentication;
