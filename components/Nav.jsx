import requests from "../utils/requests";
import { useRouter } from "next/dist/client/router";

export function Nav(key){
  const router = useRouter(); 

 

  return(
    <nav className="flex px-10 sm:px-20 overflow-x-scroll xl:justify-center">
      {Object.entries(requests).map(([key,{title,url}])=>{
        return <h2 key={key} onClick={() => router.push(`/?genre=${key}`)} className="cursor-pointer transition duration-100 transform whitespace-nowrap text-2xl hover:scale-125 hover:text-white active:text-red-400 m-5 last:pr-4" >{title}</h2>
      })}
    </nav>
  )
}