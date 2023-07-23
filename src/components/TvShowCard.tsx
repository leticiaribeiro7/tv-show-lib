import { Link } from 'react-router-dom';
import {FaStar} from "react-icons/fa";
import {IUniqueTvShow, ItvShow} from "../../interfaces/ItvShow";

type propsType = {
    tvShow: ItvShow | IUniqueTvShow,
    showLink?: boolean,
    borderStyle: string
}

const imageUrl = import.meta.env.VITE_IMG;

const TvShowCard = ({tvShow, showLink = true, borderStyle}: propsType) => {

  const divStyle = `flex flex-col justify-between items-center text-center p-3 gap-3 rounded-md ${borderStyle}`;

  return (
    <div className={divStyle}>
        <img className="max-w-[100%]" src={imageUrl+tvShow.poster_path} alt={tvShow.name}/>
        <p className="text-xl font-bold ">{tvShow.name}</p>
        <p className="flex items-center gap-1">
            <FaStar className="text-yellow-500"/>
            {tvShow.vote_average}
        </p>
        {showLink &&
            <Link 
              to={"/tv/"+tvShow.id} 
              className='items-center w-[100%] font-bold text-black bg-purple-600 rounded-md p-1 transition-[.4s] hover:bg-transparent hover:text-purple-600 border-2 border-purple-600'>
              Detalhes
            </Link>
        }
    </div>
  )
}

export default TvShowCard