import { configureStore} from "@reduxjs/toolkit";
import userReducer from "../feautures/users/userSlice";


export default configureStore({
  reducer: {
    user: userReducer,
    // movie: movieReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});