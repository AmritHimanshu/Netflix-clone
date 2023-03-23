import React, { useEffect, useState } from 'react'
import axios from '../axios';

function HomeScreenRow({ title, fetchUrl, isLargeRow = false }) {

    const base_url = "https://image.tmdb.org/t/p/original/";

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchUrl])

    // console.log(movies)

    return (
        <div className='text-white ml-[20px] '>
            <h1 className='text-xl font-semibold'>
                {title}
            </h1>

            <div className='p-[20px] flex overflow-y-hidden overflow-x-scroll scrollbar-hide'>
                {movies.map(movie => (
                    (isLargeRow && movie.poster_path ||
                    !isLargeRow && movie.backdrop_path) && (
                        <img className={`max-h-[100px] object-contain mr-[20px] w-full hover:scale-[1.08] duration-200 cursor-pointer ${isLargeRow && 'max-h-[250px] hover:scale-[1.09] '}`}
                            key={movie.id}
                            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
                                }`} alt={movie.name} />
                    )
                ))}
            </div>
        </div>
    )
}

export default HomeScreenRow