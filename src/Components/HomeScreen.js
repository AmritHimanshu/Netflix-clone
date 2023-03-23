import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { logout } from '../features/userSlice';
import requests from '../Requests';
import HomeScreenBanner from './HomeScreenBanner';
import HomeScreenRow from './HomeScreenRow';

function HomeScreen() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        }
        else handleShow(false);
    }

    const signOut = (e) => {
        dispatch(logout());
        navigate('/login');
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
    },[])

    return (
        <div className='bg-black'>
            <div className={`flex justify-between items-center w-full ${show && 'bg-black'} duration-200 fixed top-0 z-10`}>
                <div className='w-[215px] p-5 cursor-pointer' onClick={e => navigate('/')}>
                    <img className='' src={process.env.PUBLIC_URL + "/images/netflixLogo.png"} alt="" />
                </div>
                <div className='text-xl text-white font-semibold mx-10 cursor-pointer fixed right-0 hover:underline' onClick={signOut}>
                    Sign Out
                </div>
            </div>

            <div className='h-[448px] object-contain relative text-white '>
                <HomeScreenBanner />
            </div>

            <div className='mt-[20px]'>
                <HomeScreenRow title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
                <HomeScreenRow title="Trending Now" fetchUrl={requests.fetchTrending} />
                <HomeScreenRow title="Top Rated" fetchUrl={requests.fetchTopRated} />
                <HomeScreenRow title="Action Movies" fetchUrl={requests.fetchActionMovies} />
                <HomeScreenRow title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
                <HomeScreenRow title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
                <HomeScreenRow title="Romance Movie" fetchUrl={requests.fetchRomanceMovies} />
                <HomeScreenRow title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
            </div>
            
        </div>
    )
}

export default HomeScreen