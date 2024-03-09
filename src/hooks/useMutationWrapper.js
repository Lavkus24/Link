import { useMutation  } from "react-query";

export const useMutationWrapper = (apiFunction) => {
	const mutation = useMutation(apiFunction);

	return {
		mutate: mutation.mutate,
		data: mutation.data?.data,
		message: mutation.data?.message,
		status: mutation.data?.status,
		userId: mutation.data?.userId,
		reset: mutation.reset
	};
};
export const useMutationSignInWrapper = (apiFunction) => {

	const mutation = useMutation(apiFunction);

	return {
		mutate: mutation.mutate,
		signId: mutation.data?.userId,
		status: mutation.isSuccess
	};
};
export const useMutationUpdateWrapper = (apiFunction) => {

	const mutation = useMutation(apiFunction);
	//eslint-disable-next-line
	console.log('apiFunction : ' , apiFunction);
	return {
		mutate: mutation.mutate,
		status: mutation.isSuccess
	};
};

