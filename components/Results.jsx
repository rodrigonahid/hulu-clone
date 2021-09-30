import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/solid";

export function Results({ requests }){
  return(
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex 3xl:flex-wrap">
      {requests.map( result => {
        return <Thumbnail key={result.id} result={ result } />
      })}
    </div>
  )
}

function Thumbnail({ result }){
  const BASE_URL = 'https://image.tmdb.org/t/p/w500/';
  
  return(
    <div className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
      <Image src={ 
        `${BASE_URL}${result.backdrop_path || result.poster_path}` || `${BASE_URL}${result.poster_path}`
      } width="1920" height="1080" layout="responsive" />
      <p className="truncate max-w-md">{result.overview}</p>
      <h2 className="mt-1 text-2xl text-white transition-all duration-100 group-hover:font-bold  ease-in-out">{result.title || result.name}</h2>
      <p className="flex items-center opacity-0 group-hover:opacity-100 transition">
        {result.media_type && `${result.media_type}  `} 
        {result.release_date || result.first_air_date}{"  "}
        <ThumbUpIcon className="h-5 mx-2" />
        {result.vote_count}
      </p>
    </div>
  )
}
