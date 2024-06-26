import { useDispatch, useSelector } from "react-redux"
import { addTopRatedMovies } from "../store/movieSlice"
import { API_OPTIONS } from "../constants"
import { useEffect } from "react"

const useTopRated = () => {
    const dispatch = useDispatch()
    const topRatedMovies = useSelector(store => store?.movies?.topRatedMovies)
    const getTopRatedMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)
        const jsondata = await data.json()
        dispatch(addTopRatedMovies(jsondata.results))
    }

    useEffect(() => {
        (!topRatedMovies) && getTopRatedMovies()
    }, [])
}


export default useTopRated;