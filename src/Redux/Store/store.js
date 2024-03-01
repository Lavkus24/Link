import { configureStore } from '@reduxjs/toolkit';
import userData from '../Reducer/userReducer'; 

const store = configureStore({
  reducer: {
    user: userData,
  },
});

export default store;
