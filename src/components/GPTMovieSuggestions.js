import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GPTMovieSuggestions = () => {
  const {movieResults, movieNames} = useSelector(store => store.gpt)
  if(!movieNames) return null;
  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-90'>
        <div>
          {
            movieNames?.length ? movieNames?.map((eachMovie, index) => (
              <MovieList key={eachMovie} title={eachMovie} movies={movieResults[index]}/>
            )) : <p>No Results Found</p>
          }
        </div>
    </div>
  )
}

export default GPTMovieSuggestions