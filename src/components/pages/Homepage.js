import React from 'react';
import Hero from '../organisms/Hero/Hero';
import Upcoming from '../organisms/Upcoming/Upcoming';
// import PopularMovies from '../organisms/popularMovies';

const Home = () => {
  return (
    <>
      <Hero />
      <Upcoming />
      {/*<PopularMovies /> */}
    </>
  );
};

export default Home;
