import { useDispatch, useSelector } from "react-redux"
import { addPopularMovies } from "../store/movieSlice"
import { API_OPTIONS } from "../constants"
import { useEffect } from "react"

const usePopularMovies = () => {
    const dispatch = useDispatch()

    const popularMovie = useSelector(store => store?.movies?.popularMovies)
    const getPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
        const jsondata = await data.json()
        dispatch(addPopularMovies(jsondata.results))
    }

    useEffect(() => {
        (!popularMovie) && getPopularMovies()
    }, [])
}


export default usePopularMovies;