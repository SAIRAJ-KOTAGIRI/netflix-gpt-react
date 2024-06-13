import React from 'react'
import { IMAGE_TMDB_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-4'>
        <img src={IMAGE_TMDB_URL + posterPath} alt='Movie Card'/>
    </div>
  )
}

export default MovieCard