import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	userId: null,
	instituteName: "",
	specification: "",
	yoj: "",
	yoe: "",
	grade: "",
	activity: "",
	Name:"",
	state:"",
	district:"",
	skill :"",
	language:""
};

const authSlice = createSlice({
	name: "userData",
	initialState,
	reducers: {
		setUserId(state, action) {
			state.userId = action.payload;
		},
		setUserData(state , action) {
			//eslint-disable-next-line
			 console.log("state.action.payload" , action.payload)
		}
	}
});

export const { setUserId , setUserData } = authSlice.actions;

export default authSlice.reducer;
