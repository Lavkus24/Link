import { useMutation } from "react-query";

const useMutationWrapper = apiFunction => {
	const mutation = useMutation(apiFunction);

	return {
		mutate: mutation.mutate,
		data: mutation.data?.data,
		message: mutation.data?.message,
		status: mutation.data?.status,
		reset: mutation.reset
	};
};

export default useMutationWrapper;