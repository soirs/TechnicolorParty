import React from 'react';
import Flickity from 'react-flickity-component';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Carousel = ({ data, type }) => {
  const flickityOptions = {
    // groupCells: 20,
    // initialIndex: 5,
    // autoPlay: true,
    draggable: true,
    freeScroll: true,
    imagesLoaded: true,
    // lazyLoad: true,
    pageDots: false,
    prevNextButtons: false,
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
            const imgUrl = `https://image.tmdb.org/t/p/w342/${poster_path}`;
            // const imgUrl = `https://image.tmdb.org/t/p/w1280/${backdrop_path}`;
            return (
              <Link key={id} to={`/movie/${id}`} className=''>
                <img
                  // data-flickity-lazyload={imgUrl}
                  src={imgUrl}
                  alt={`Poster of: ${title}`}
                  className={`${type}-poster`}
                />
                <div className={`${type}-content`}>
                  <h2 className={`${type}-content__title`}>{title}</h2>
                  <p className={`${type}-content__year`}>
                    {new Date(release_date).getFullYear()}
                  </p>
                </div>
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
