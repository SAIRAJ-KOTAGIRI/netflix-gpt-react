import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='font=bold text-6xl'>{title}</h1>
      <p className='py-4 text-lg w-2/4'>{overview}</p>
      <div className=''>
        <button className='cursor-pointer bg-white text-black p-4 px-12 text-xl rounded-lg hover:bg-opacity-50'>▶️ Play</button>
        <button className='bg-gray-500 cursor-pointer text-white p-4 px-12 text-lg mx-2 bg-opacity-50 rounded-lg hover:bg-opacity-50'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle