import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import getRandomMovie from '../utils/mockDataForGPTSearch'
import { API_OPTIONS } from '../utils/constants'
import { addGPTMovieResult } from '../utils/store/GPTSlice'

const GPTSearchBar = () => {

    const languageKey = useSelector(store => store.config.lang)
    const searchText = useRef(null)
    const dispatch = useDispatch()

    const searchMovieTMBD = async (moviename) => {
      const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + moviename +'&include_adult=false&language=en-US&page=1', API_OPTIONS)
      const jsondata = await data.json()
      return jsondata.results;
    }

    const handleGPTSearchClick = async () => {
      // console.log(searchText.current.value)
      // const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query" + searchText.current.value + ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gaddar, Sholay, Don, Golmaal, Koi Mil Gaya"
      // make an API Call to GPT and get Movie results
      // const gptResults = await openai.chat.completions.create({
      //   messages: [{ role: 'user', content: gptQuery }],
      //   model: 'gpt-3.5-turbo',
      // });
      // console.log(gptResults.choices)
      // console.log(gptQuery)
      const gptResults = {}
      gptResults["choices"] = [
        {
          finish_reason: "stop",
          index: 0,
          message: {
            content: getRandomMovie(),
            role: "assistant"
          }
        }
      ]
      const gptMoviesList = gptResults?.choices?.[0]?.message?.content.split(", ")

      const promiseDataArray = gptMoviesList.map((eachMovie) => searchMovieTMBD(eachMovie))
      //the above code returns [ Promise, Promise, Promise, Promise, Promise]
      const tmbdResults = await Promise.all(promiseDataArray);
      dispatch(addGPTMovieResult({movieNames: gptMoviesList, movieResults: tmbdResults}))
    }
  return (
    <div className='pt-[35%] md:pt-[10%] flex justify-center'>
        <form className='w-full md:w-3/4 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
            <input ref={searchText} type="text" className='p-4 m-4 col-span-10' placeholder={lang[languageKey].gptSearchPlaceholder} />
            <button className='w-full py-2 px-4 bg-red-700 text-white col-span-2 m-4' onClick={() => handleGPTSearchClick()}>{lang[languageKey].search}</button>
        </form>
    </div>
  )
}

export default GPTSearchBar