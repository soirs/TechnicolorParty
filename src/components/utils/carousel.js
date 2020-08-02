import React from 'react';
import Flickity from 'react-flickity-component';
import { connect } from 'react-redux';
// import MovieCard from "../molecules/movieCard"
import { Link } from 'react-router-dom';

const Carousel = ({ data, isLoading }) => {
  const flickityOptions = {
    // groupCells: 20,
    // initialIndex: 5,
    // autoPlay: true,
    draggable: true,
    // freeScroll: true,
    imagesLoaded: true,
    lazyLoad: true,
    pageDots: true,
    prevNextButtons: true,
    wrapAround: true,
  };

  const renderCarousel = () => {
    if (!data) {
      return <p>Loading posts...</p>;
    }
    return (
      <>
        <Flickity
          className='carousel' // default ''
          elementType='div' // default 'div'
          options={flickityOptions} // takes flickity options {}
          disableImagesLoaded={false} // default false
          reloadOnUpdate // default false
        >
          {/* <MovieCard movies={movies} /> */}
          {data.map((movie) => {
            const {
              id,
              title,
              backdrop_path,
              overview,
              poster_path,
              release_date,
              vote_average,
            } = movie;
            // const imgUrl = `https://image.tmdb.org/t/p/w780/${poster_path}`;
            const imgUrl = `https://image.tmdb.org/t/p/w1280/${backdrop_path}`;
            return (
              <Link key={id} to={`/movie/${id}`} className=''>
                <img
                  // key={id}
                  data-flickity-lazyload={imgUrl}
                  // src={imgUrl}
                  alt={`Backdrop of: ${title}`}
                  className='hero-backdrop'
                />
                <div className='hero-content'>
                  <h1 className='hero-content__title'>{title}</h1>
                  <p className='hero-content__overview'>{overview}</p>
                </div>
                {/* <span className="absolute top-0 left-0 bg-white rounded-full w-1/4 h-auto">
                  {vote_average}
                </span> */}
              </Link>
            );
          })}
        </Flickity>
      </>
    );
  };

  return <>{renderCarousel()}</>;
};

const mapStateToProps = (state) => ({
  isLoading: state.popularMovies.isLoading,
  movies: state.popularMovies.movies,
});

export default connect(mapStateToProps)(Carousel);
