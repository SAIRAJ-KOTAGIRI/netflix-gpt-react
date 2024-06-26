import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../constants';
import { addTrailerVideo } from '../store/movieSlice';


const useMovieTrailer = (id) => {
    const dispatch = useDispatch()
    const trailerVideo = useSelector(store => store?.movies?.trailerVideo)
    const getMovieVideos = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+id+'/videos?language=en-US', API_OPTIONS)
        const jsondata = await data.json()
        const filteredTrailers = jsondata.results.filter((video) => video.type === "Trailer")
        const trailer = filteredTrailers?.length ? filteredTrailers[0] : jsondata?.results?.[0]
        dispatch(addTrailerVideo(trailer))
    }
    useEffect(() => {
        (!trailerVideo) && getMovieVideos()
    }, [])
}

export default useMovieTrailer;