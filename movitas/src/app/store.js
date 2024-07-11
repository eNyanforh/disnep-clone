import { configureStore} from "@reduxjs/toolkit";
import userReducer from "../feautures/users/userSlice";
import movieReducer from "../feautures/movie/movieSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import db from "../firebase";
import { setMovies } from "../feautures/movie/movieSlice";
import { selectUserName } from "../feautures/users/userSlice";



export default configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});