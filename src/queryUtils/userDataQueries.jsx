import axios from "axios";

export const createUserData = async userData => {
	const response = await axios.post("signup", userData)
		.then(response => response.data)
		.catch(error => error?.response ? error.response.data : { status: "error", message: error.message });
	return response;
};
export const getUserData = async (userId) => {


	const response = await axios.get(`getData/${userId}`)
		.then(response => response.data)
		.catch(error => error?.response ? error.response.data : { status: "error", message: error.message });
	return response;
};

export const createSignInData = async userData => {
	const response = await axios.post("signin", userData)
		.then(response => response.data)
		.catch(error => error?.response ? error.response.data : { status: "error", message: error.message });
	return response;
};


export const updateUserData = async (educationDetails) => {
	const response = await axios.put("updateData", educationDetails)
		.then(response => response.data)
		.catch(error => error?.response ? error.response.data : { status: "error", message: error.message });
	return response;
};