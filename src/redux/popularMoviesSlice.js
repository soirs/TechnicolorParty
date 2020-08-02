import { createSlice } from '@reduxjs/toolkit';
import { AnyAction, Dispatch } from 'redux';
import ApiConnect from '../api/apiConnect';
import { AppThunk } from './store';

const popularMovies = createSlice({
  name: 'FETCH_POPULARMovies',
  initialState: [],
  reducers: {
    // FETCH_START2: startLoading,
    // FETCH_START: (state) => {
    //   state.isLoading = true;
    // },
    // FETCH_END: (state) => {
    //   state.isLoading = false;
    // },
    FETCH_POPULAR_MOVIES: (state, { payload }) => {
      const { results } = payload;
      return {
        ...state,
        isLoading: false,
        payload,
        movies: results,
      };
    },
    // getCommentsStart(state) {
    //   state.loading = true
    //   state.error = null
    // },
    // getCommentsSuccess(state, action: PayloadAction<CommentLoaded>) {
    //   const { comments, issueId } = action.payload
    //   state.commentsByIssue[issueId] = comments
    //   state.loading = false
    //   state.error = null
    // },
    // getCommentsFailure(state, action: PayloadAction<string>) {
    //   state.loading = false
    //   state.error = action.payload
    // }
  },
});
export const { FETCH_POPULAR_MOVIES } = popularMovies.actions;
export default popularMovies.reducer;

export const FETCH_POPULAR = () => async (dispatch) => {
  try {
    // dispatch(FETCH_START());
    const response = await ApiConnect.getPopularMovies();
    dispatch(FETCH_POPULAR_MOVIES(response));
  } catch {
    return;
  }
};
