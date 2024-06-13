import { useDispatch } from "react-redux"
import { addNowPlayingMovies } from "../store/movieSlice"
import { API_OPTIONS } from "../constants"
import { useEffect } from "react"

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()

    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
        const jsondata = await data.json()
        dispatch(addNowPlayingMovies(jsondata.results))
    }

    useEffect(() => {
        getNowPlayingMovies()
    }, [])
}


export default useNowPlayingMovies;