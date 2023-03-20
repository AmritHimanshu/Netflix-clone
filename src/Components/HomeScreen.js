import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import HomeScreenBanner from './HomeScreenBanner';

function HomeScreen() {

    const navigate = useNavigate();

    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        }
        else handleShow(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
    },[])

    return (
        <div>
            <div className={`flex justify-between items-center w-full ${show && 'bg-black'} fixed top-0 z-10`}>
                <div className='w-[215px] p-5 cursor-pointer' onClick={e => navigate('/')}>
                    <img className='' src={process.env.PUBLIC_URL + "/images/netflixLogo.png"} alt="" />
                </div>
                <div className='text-xl text-white font-semibold mx-10 cursor-pointer fixed right-0 hover:underline' onClick={e => navigate('/')}>
                    Sign Out
                </div>
            </div>

            <div className='h-[448px] object-contain relative text-white '>
                <HomeScreenBanner />
            </div>
            
        </div>
    )
}

export default HomeScreen