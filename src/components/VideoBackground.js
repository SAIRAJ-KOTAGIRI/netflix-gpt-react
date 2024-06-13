import React from 'react'
import useMovieTrailer from '../utils/customhooks/useMovieTrailer'
import { useSelector } from 'react-redux'

const VideoBackground = ({id}) => {
  const trailerData = useSelector((store) => store?.movies?.trailerVideo)
  useMovieTrailer(id)
  return (
    <div className='w-screen'>
      <iframe 
      className='w-screen aspect-video'
        src={"https://www.youtube.com/embed/" + trailerData?.key + "?autoplay=1&&mute=1"} 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin">
      </iframe>
    </div>
  )
}

export default VideoBackground