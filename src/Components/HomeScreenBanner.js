import React, { useEffect, useState } from 'react'
import axios from '../axios';
import requests from '../Requests';

function HomeScreenBanner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }

        fetchData();
    }, [])

    // console.log(movie);

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "....." : string;
    }

    return (
        <div className={`bg-cover bg-center h-[448px]`} style={{ backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`}}>

            <div className='pl-[30px] pt-[140px] h-full bg-black bg-opacity-50'>

                <h1 className='text-[3rem] font-[800] pb-[0.3rem]'>
                    {movie?.name || movie?.title || movie?.original_name}
                </h1>
                <div className=''>
                    <button className='text-white bg-gray-700/[0.4] cursor-pointer outline-none border-0 font-[700] rounded-md px-[2rem] py-[0.5rem] mr-[1rem] hover:bg-white hover:text-black transition-all duration-200 '>Play</button>
                    <button className='text-white bg-gray-700/[0.4] cursor-pointer outline-none border-0 font-[700] rounded-md px-[2rem] py-[0.5rem] mr-[1rem] hover:bg-white hover:text-black transition-all duration-200 '>My List</button>
                </div>
                <h1 className='w-[45rem] pt-[1rem] text-[0.9rem] max-w-sm h-[80px] leading-snug'>
                    {truncate(movie?.overview, 150)}
                </h1>

            </div>

            {/* <div className='h-[3.2rem] bg-gradient-to-t from-black '></div> */}

        </div>
    )
}

export default HomeScreenBanner