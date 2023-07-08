import { useState, useEffect } from "react";
import {ItvShow} from "../../interfaces/ItvShow";
import TvShowCard from "../components/TvShowCard";

const tvShowsUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;



export default function Home() {

  const [topShows, setTopShows] = useState<ItvShow[]>([]);

  const getTopRatedShows = async (url : string) => {
    const res = await fetch(url)
    const data = await res.json();

    setTopShows(data.results);
    console.log(data)
  }
  
  useEffect(() => {
    const topRatedUrl = `${tvShowsUrl}top_rated?${apiKey}`;
    getTopRatedShows(topRatedUrl);
  }, []);


  return (
    <div>
      <p className="text-2xl text-center font-bold mt-6 mb-3">Top Rated Shows</p>
      <div className=" grid grid-cols-2 lg:grid-cols-3 gap-5 p-5 max-w-[80%] m-auto">
        {topShows.length === 0 && <p>Spinner aqui</p> }
        {topShows && topShows.map((show) => <TvShowCard key={show.id} tvShow={show}/>)}
      </div>
    </div>
  )
}
