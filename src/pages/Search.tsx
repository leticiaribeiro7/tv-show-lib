import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import TvShowCard from "../components/TvShowCard"
import { ItvShow } from "../../interfaces/ItvShow"

const searchUrl = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY;

function Search() {

  const [searchParams] = useSearchParams();
  const [shows, setShows] = useState<ItvShow[]>([]);
  const query = searchParams.get("q")

    const getSearchedShows = async (url : string) => {
      const res = await fetch(url)
      const data = await res.json();

      setShows(data.results);
      console.log(data)
  }

  useEffect(() => {
    const searchWithQueryUrl = `${searchUrl}?${apiKey}&query=${query}`;
    getSearchedShows(searchWithQueryUrl);
  }, [query]);  

  return (
    <div>
      <p className="text-2xl text-center font-bold mt-6 mb-3">Resultados para <span className="text-purple-600">{query}</span></p>
      <div className=" grid grid-cols-2 lg:grid-cols-3 gap-5 p-5 max-w-[80%] m-auto">
        {shows.length === 0 && <p>Spinner aqui</p> }
        {shows && shows.map((show) => <TvShowCard key={show.id} tvShow={show} borderStyle="bg-black" />)}
      </div>
    </div>
  )
}

export default Search
