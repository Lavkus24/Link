import { useMutation } from 'react-query'
import query from './userQuery';

const SignUpMutation = () => {

  // const signUpData = useMutation({
  //   mutationFn: query.signUptData
  // });


  return useMutation(query.signUptData);

  // console.log('signUpData' , signUpData)

  // return signUpData; // Return the mutation hook
};

export default  SignUpMutation
