import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {IUniqueTvShow} from "../../interfaces/ItvShow";


import {
  BsFillQuestionCircleFill,
  BsFillCalendarCheckFill,
  BsFillCameraReelsFill,
  BsFillFileEarmarkTextFill,
  BsFillPersonFill
} from 'react-icons/bs'

import TvShowCard from "../components/TvShowCard";

const tvShowsUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;



export default function TVShowDetails() {
  const { id } = useParams();
  const [tvShow, setTvShow] = useState<IUniqueTvShow | null>(null);
  
  const getTvShow = async(url: string) => {
    const res = await fetch(url);
    const data = await res.json();

    setTvShow(data);
    console.log(data)
  }

  useEffect(() => {
    const tvShowUrl = `${tvShowsUrl}${id}?${apiKey}`;
    getTvShow(tvShowUrl);
  }, []);

  return (
    <div>
      {tvShow && 
          <div className="flex text-justify">
            <div className="max-w-[30%] p-5"><TvShowCard tvShow={tvShow} showLink={false} borderStyle={"border-2 border-purple-800"}/></div>

            <div className="flex flex-col items-center max-w-[40%] mx-40 info my-5">
              <div className="flex">
                {tvShow.genres.map((genre)=> <span key={genre.id} className="border-2 border-purple-800 rounded-2xl p-[0.3rem] m-1">{genre.name}</span>)}
              </div>
              
              <p className="font-bold text-lg flex gap-2 items-center mt-8 mb-2">
                <BsFillFileEarmarkTextFill/> Sinopse
              </p>
              <p>{tvShow.overview}</p>

              <p className="font-bold text-lg flex gap-2 items-center mt-8 mb-2">
                <BsFillPersonFill/>Created By
              </p>
              
              {tvShow.created_by.map(autor => <p key={autor.id}>{autor.name}</p>)}

              <p className="font-bold text-lg flex gap-2 items-center mt-8 mb-2">
                <BsFillCalendarCheckFill/>Release Date
              </p>
              <p>{new Date(tvShow.first_air_date).toLocaleDateString('pt-BR')}</p>


              <p className="font-bold text-lg flex gap-2 items-center mt-8 mb-2">
                <BsFillCameraReelsFill/>Seasons
              </p>
              <p>{tvShow.number_of_seasons}</p>

              <p className="font-bold text-lg flex gap-2 items-center mt-8 mb-2">
                <BsFillQuestionCircleFill/>In production
              </p>
              <p>{tvShow.in_production ? "Sim" : "Não"}</p>

            </div>

          </div>
      }
    </div>
  )
}

