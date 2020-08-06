import { createSlice } from '@reduxjs/toolkit';
import { AnyAction, Dispatch } from 'redux';
import ApiConnect from '../api/apiConnect';

const upcomingMovies = createSlice({
  name: 'fetchUpcomingMovies',
  initialState: [],
  reducers: {
    FETCH_UPCOMING_MOVIES: (state, { payload }) => {
      const { results } = payload;
      return {
        ...state,
        isLoading: false,
        movies: results,
      };
    },
  },
});

export const { FETCH_UPCOMING_MOVIES } = upcomingMovies.actions;
export default upcomingMovies.reducer;

export const fetchUpcoming = () => async (dispatch) => {
  try {
    const response = await ApiConnect.getUpcomingMovies();
    dispatch(FETCH_UPCOMING_MOVIES(response));
  } catch {
    return;
  }
};
