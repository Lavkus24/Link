import React, { useCallback, useEffect, useState, useMemo } from "react";

import { useNavigate } from "react-router-dom";

import validator from "validator";
import axios from "axios";

import SignInPage from "../SignInPage";
import SignUpPage from "../SignUpPage";

import { useCreateUserData , useSignInData } from "../../queryUtils/queryUtils";

import { useDispatch } from "react-redux";

import { setUserId } from "../../Redux/userReducer";

const Authentication = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

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

	const {
		mutate: createUserData,
		data: createdUserData,
		status: createUserDataStatus,
		message: createUserDataMessage,
		userId:userId,
		reset: createUserDataReset
	} = useCreateUserData();


	const {
		mutate : crateSignInData,
		signId : signId,
		status: signInStatus
	} = useSignInData();

	const Id = signId ? signId : userId;

	if(Id) {
		//eslint-disable-next-line
		console.log('Id : ' , Id);
		dispatch(setUserId(Id));

	}

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
					createUserData(userData);
				} else {
					const temp = { emailAddress : userData.emailAddress , password : userData.password };
					const tempData = crateSignInData(temp);
					//eslint-disable-next-line
			console.log('tempData : ' , tempData)
				}
			} else {
				//eslint-disable-next-line
				console.log('error in error error  : ')
				setShowError(true);
			}
		}
	}, [
		navigate,
		isValidFormData,
		onSignUpPage,
		userData,
		setUserData,
		createUserData,
		crateSignInData
	]);

	if(userData.id === 1) {
		createUserData(userData);
	}
	useEffect(() => {

		if (signInStatus) {
			navigate("/profile");
		}
	}, [
		navigate,
		signInStatus
	]);

	useEffect(() => {
		if (createUserDataStatus === "success") {
			createUserDataReset();

			setUserData(createdUserData);
			axios.defaults.headers.common["Authorization"] = `Bearer ${createdUserData.token}`;

			// show success message here
		} else if (createUserDataStatus === "error") {
			createUserDataReset();

			// show error message here
		}
	}, [
		setUserData,
		createdUserData,
		createUserDataStatus,
		createUserDataMessage,
		createUserDataReset
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
