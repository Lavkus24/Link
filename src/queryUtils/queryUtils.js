import useMutationWrapper from "../hooks/useMutationWrapper";

import {
	createUserData
} from "./userDataQueries";


// userData queries

export const useCreateUserData = () => {
	return useMutationWrapper(createUserData);
};
