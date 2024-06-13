import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../utils/customhooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../utils/customhooks/usePopularMovies';
import useTopRated from '../utils/customhooks/useTopRated';
import useUpcomingMovies from '../utils/customhooks/useUpcomingMovies';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse