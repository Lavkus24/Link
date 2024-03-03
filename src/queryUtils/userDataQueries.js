import axios from "axios";

export const createUserData = async userData => {
	const response = await axios.post("api/v1/userData/create", userData)
		.then(response => response.data)
		.catch(error => error?.response ? error.response.data : { status: "error", message: error.message });
	return response;
};
