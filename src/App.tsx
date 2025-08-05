import { useState, useEffect } from 'react'
import './App.css'
import { Search } from './components/Search'
import { Gif, fetchTrendingGifs } from './components/Gif'
import type { GifType } from './types'

const API_KEY = import.meta.env.VITE_GIPHY_KEY

const searchGifs = async (searchItem: string) : Promise<GifType[]> => {
  const SEARCH_URL = "https://api.giphy.com/v1/gifs/search"
  const response = await fetch(`${SEARCH_URL}?api_key=${API_KEY}&q=${searchItem}&limit=20`)
  const content = await response.json()
  console.log(content.data)
  return content.data
}

function App() {
  const [gifs, setGifs] = useState<GifType[]>([])
  const [searchItem, setSearchItem] = useState<string>('')

  useEffect(() => {
    if(searchItem) {
      searchGifs(searchItem).then((gifs) => setGifs(gifs))
    } else {
      fetchTrendingGifs().then((gifs) => setGifs(gifs))
    }
  },[searchItem])

  return (
    <>
      <Search onSearch = {setSearchItem} searchItem = {searchItem}/>
      {gifs.map((gif, index) => <Gif gif = {gif} key = {index}/>)}
    </>
  )
}

export default App
