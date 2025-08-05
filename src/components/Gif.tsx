import type { GifType } from '../types'

const API_KEY = import.meta.env.VITE_GIPHY_KEY

export const fetchTrendingGifs = async () : Promise<GifType[]> => {
    const TRENDING_URL = "https://api.giphy.com/v1/gifs/trending"
    const response = await fetch(`${TRENDING_URL}?api_key=${API_KEY}&limit=20`)
    const content = await response.json()
    console.log(content.data)
    return content.data
}


export const Gif = ({gif}: {gif: GifType}) => {
    return (
        <div>
            <img src = {gif.images.original.url} alt = {gif.title}/>
        </div>
)}