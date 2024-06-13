import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GPTSearchBar = () => {
    const languageKey = useSelector(store => store.config.lang)
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='w-3/4 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
            <input type="text" className='p-4 m-4 col-span-10' placeholder={lang[languageKey].gptSearchPlaceholder} />
            <button className='py-2 px-4 bg-red-700 text-white col-span-2 m-4'>{lang[languageKey].search}</button>
        </form>
    </div>
  )
}

export default GPTSearchBar