import React, { useState } from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';

function FirstPageFirstPortion() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (!email) return;
        navigate('/signup/registration');
        setEmail('');
    }

    return (
        <div>
            <div className="h-[75vh] bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/d049a3bd-40ee-411b-9f16-d1def798d43b/d6aeb5a9-b14c-42d4-999e-c2f0d6c60f04/IN-en-20230313-popsignuptwoweeks-perspective_alpha_website_large.jpg')] bg-cover bg-center border-b-[7px] border-neutral-600">

                <div className='h-full bg-black text-white bg-opacity-70'>

                    <div className='flex justify-between items-center'>
                        <div className='w-[180px] p-4'>
                            <img src={process.env.PUBLIC_URL + "/images/netflixLogo.png"} alt="" />
                        </div>
                        <div className='flex h-[35px]'>
                            <div className='px-2 py-1 flex border border-gray-500 rounded-md'>
                                <LanguageIcon />
                                <p className='mx-2'>English</p>
                                <ArrowDropDownIcon />
                            </div>

                            <button className='px-3 py-1 pb-2 mx-7 font-semibold rounded-md bg-red-600 hover:bg-red-700 duration-300' onClick={e => navigate('/login')}>Sign In</button>
                        </div>
                    </div>

                    <div className='text-center mt-40 px-16 py-3'>

                        <p className='text-5xl font-extrabold my-5'>
                            Unlimited movies, TV shows and more.
                        </p>
                        <p className='text-2xl my-5'>
                            Watch anywhere. Cancel anytime.
                        </p>
                        <p className='text-2xl my-5'>
                            Ready to watch? Enter your email to create or restart your membership.
                        </p>
                        <form onSubmit={handleOnSubmit}>
                            <input className='my-5 p-4 w-[450px] bg-black bg-opacity-50 border border-gray-600 rounded-md' type="email" value={email} placeholder='Email address' onChange={e => setEmail(e.target.value)} />
                            <button className='mx-3 py-[11px] w-[210px] bg-red-600 rounded-md font-semibold text-2xl hover:bg-red-700 duration-300'>
                                Get Started
                                <ArrowForwardIosIcon className='ml-1 mb-2' />
                            </button>
                        </form>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default FirstPageFirstPortion