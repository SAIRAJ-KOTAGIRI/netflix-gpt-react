import { useDispatch, useSelector } from "react-redux"
import { addUpcomingMovies } from "../store/movieSlice"
import { API_OPTIONS } from "../constants"
import { useEffect } from "react"

const useUpcomingMovies = () => {
    const dispatch = useDispatch()
    const upcomingMovies = useSelector(store => store?.movies?.upcomingMovies)
    const getUpcomingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)
        const jsondata = await data.json()
        dispatch(addUpcomingMovies(jsondata.results))
    }

    useEffect(() => {
        (!upcomingMovies) && getUpcomingMovies()
    }, [])
}


export default useUpcomingMovies;