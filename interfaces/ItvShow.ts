export interface ItvShow {
  id: number,
  name: string,
  overview: string,
  popularity: number,
  poster_path: string,
  vote_average: number,
  vote_count: number
}


type Genre = {
  id: number,
  name: string
}

type CreatedBy = {
  id: number,
  name: string
}


export interface IUniqueTvShow {
  adult: boolean,
  backdrop_path: string,
  created_by: Array<CreatedBy>,
  episode_run_time: number[],
  first_air_date: string,
  genres: Array<Genre>,
  homepage: string,
  id: number,
  in_production: boolean,
  languages: string[],
  last_air_date: string,
  name: string,
  networks: Array<Object>,
  number_of_seasons: number,
  origin_country: string[],
  original_language: string,
  original_name: string,
  overview: string,
  popularity: number,
  poster_path: string,
  status: string,
  type: string,
  vote_average: number,
  vote_count: number
}