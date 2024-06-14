import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-6 md:px-12 absolute text-white bg-gradient-to-r from-slate-950'>
      <h1 className='font-bold text-2xl md:text-6xl'>{title}</h1>
      <p className='hidden md:inline-block py-4 text-lg w-2/4'>{overview}</p>
      <div className='my-4 md:m-0'>
        <button className='cursor-pointer bg-white text-black md:py-4 px-2 py-1 md:px-12 text-xl rounded-lg hover:bg-opacity-50'>▶️ Play</button>
        <button className='hidden md:inline-block bg-gray-500 cursor-pointer text-white p-4 px-12 text-lg mx-2 bg-opacity-50 rounded-lg hover:bg-opacity-50'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle