import { combineReducers } from "@reduxjs/toolkit"
import popularMoviesReducer from "./popularMoviesSlice"
import upcomingMoviesReducer from "./upcomingMoviesSlice"

const rootReducer = combineReducers({
  popularMovies: popularMoviesReducer,
  upcomingMovies: upcomingMoviesReducer
})

export default rootReducer
