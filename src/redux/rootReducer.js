import { combineReducers } from "@reduxjs/toolkit"
import popularMoviesReducer from "./popularMoviesSlice"

const rootReducer = combineReducers({
  popularMovies: popularMoviesReducer,
})

export default rootReducer
