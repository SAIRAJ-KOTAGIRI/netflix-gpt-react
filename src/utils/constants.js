export const LOGO = "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
export const BACKGROUND_IMAGE = "https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/03bc4793-4207-4e21-aaec-671f5298b7cd/US-en-20240610-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
export const AVATAR_IMAGE = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY
    }
}
export const IMAGE_TMDB_URL = "https://image.tmdb.org/t/p/w780"

export const SUPPORTED_LANGUAGES = [
    { identifier: "en", name: "English" },
    { identifier: "hindi", name: "Hindi" },
    { identifier: "spanish", name: "Spanish"}
]

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY