import {
	useMutationWrapper,
	useMutationSignInWrapper,
	useMutationUpdateWrapper
} from "../hooks/useMutationWrapper";

import {
	createUserData,
	getUserData,
	createSignInData,
	updateUserData
} from "./userDataQueries";

import { useQuery } from "react-query";

// userData queries

export const useCreateUserData = () => {
	return useMutationWrapper(createUserData);
};
export const useSignInData = () => {
	return useMutationSignInWrapper(createSignInData);
};

// Corrected export statement
export const useGetUserData = (userId) => {
	return useQuery(["userData", userId], () => getUserData(userId));
};

export const useUpdateUserData = () => {
	return useMutationUpdateWrapper(updateUserData);
};
