import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_POPULAR } from '../../../redux/popularMoviesSlice';
import { RootState } from '../../../redux/rootReducer';
import Carousel from '../../utils/hero-carousel';

const Hero = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.popularMovies);

  useEffect(() => {
    dispatch(FETCH_POPULAR());
  }, [dispatch]);

  if (!movies) {
    return <h1>Loading...</h1>;
  }

  const {
    id,
    backdrop_path,
    genres,
    imdb_id,
    overview,
    runtime,
    tagline,
    title,
    poster_path,
    vote_average,
  } = movies;
  const backdropUrl = `https://images.tmdb.org/t/p/w1280/${backdrop_path}`;
  const posterUrl = `https://images.tmdb.org/t/p/w780/${poster_path}`;

  return (
    <section className='hero'>
      <Carousel data={movies} />
    </section>
  );
};

export default Hero;
