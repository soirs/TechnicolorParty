import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PosterCarousel from '../../utils/poster-carousel';
import { fetchUpcoming } from '../../../redux/upcomingMoviesSlice';

const Upcoming = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.upcomingMovies);

  useEffect(() => {
    dispatch(fetchUpcoming());
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

  return (
    <section className='upcoming'>
      <h3>Upcoming movies</h3>
      <PosterCarousel data={movies} type='upcoming' />
    </section>
  );
};

export default Upcoming;
