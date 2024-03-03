import { createSlice } from "@reduxjs/toolkit";

import data from "../List.json";

const initialState = {
	name : data[0].name,
	instituteName : data[0].instituteName,
	language1 : data[0].language,
	state : data[0].state,
	district : data[0].District,
	profileUrl1 : data[0].profileUrl,
	yoj : data[0].yoj,
	yoe : data[0].yoe,
	grade : data[0].grade,
	specification : data[0].specification,
	activity : data[0].activity,
	skill : data[0].skill
};

const authSlice = createSlice({
	name: "userData",
	initialState,
	reducers: {
       about : temp
	}
});

export default authSlice.reducer;
