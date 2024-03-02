import { configureStore } from "@reduxjs/toolkit";
import userData from "./userReducer";

const useStore = configureStore({
	reducer: {
		user: userData
	}
});

export default useStore;
