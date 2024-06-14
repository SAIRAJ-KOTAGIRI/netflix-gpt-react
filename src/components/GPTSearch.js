import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import { BACKGROUND_IMAGE } from '../utils/constants'

const GPTSearch = () => {
  return (
    <>
      <div className='fixed -z-10'>
          <img className='h-screen object-cover' src={BACKGROUND_IMAGE} alt='bg-logo'/>
        </div>
        <div className=''>    
          <GPTSearchBar />
          <GPTMovieSuggestions />
        </div>
    </>
    
  )
}

export default GPTSearch