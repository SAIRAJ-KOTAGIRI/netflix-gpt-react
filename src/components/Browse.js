import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../utils/customhooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../utils/customhooks/usePopularMovies';
import useTopRated from '../utils/customhooks/useTopRated';
import useUpcomingMovies from '../utils/customhooks/useUpcomingMovies';
import GPTSearch from './GPTSearch';
import { useSelector } from 'react-redux';

const Browse = () => {

  const showGPTSearch = useSelector(store => store.gpt.showGPTSearch)

  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      {
        showGPTSearch ? <GPTSearch /> : <><MainContainer /><SecondaryContainer /></>
      }
    </div>
  )
}

export default Browse