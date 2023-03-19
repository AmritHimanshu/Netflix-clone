import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function SignInPage() {

    const history = useNavigate();
    const [learnMore, setLearnMore] = useState('');

    return (
        <div className='h-[100vh] bg-black'>
            <div className="h-[90vh] bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/d049a3bd-40ee-411b-9f16-d1def798d43b/d6aeb5a9-b14c-42d4-999e-c2f0d6c60f04/IN-en-20230313-popsignuptwoweeks-perspective_alpha_website_large.jpg')] bg-cover bg-center">
                <div className='h-full bg-black text-white bg-opacity-60'>
                    <div className='w-[220px] p-5 cursor-pointer' onClick={e=>history('/')}>
                        <img src={process.env.PUBLIC_URL + "/images/netflixLogo.png"} alt="" />
                    </div>

                    <div className='m-auto w-[50vw] h-[75vh] py-8 px-14 bg-black bg-opacity-70'>
                        <h1 className='text-3xl font-bold my-6'>Sign In</h1>

                        <form>
                            <div className=''>
                                <input className='my-2 p-4 w-[350px] bg-neutral-800 border border-neutral-800 rounded-md' type="email" placeholder='Email' />
                            </div>

                            <div className=''>
                                <input className='my-2 p-4 w-[350px] bg-neutral-800 border border-neutral-800 rounded-md' type="password" placeholder='Password' />
                            </div>

                            <button className='my-8 p-3 w-[350px] text-center font-bold text-lg rounded-md bg-red-600'>
                                Sign In
                            </button>

                            <div className='flex justify-between text-neutral-400'>
                                <div className='cursor-default flex items-center'>
                                    <input className='w-[15px] h-[15px] mr-2 bg-pink-300 accent-white' id='remember' type="checkbox" /> <label className='text-sm' for="remember">Remember me</label>
                                </div>
                                <div className='text-sm cursor-pointer hover:underline'>
                                    Need help?
                                </div>
                            </div>
                        </form>

                        <div className='mt-20 flex'>
                            <p className='text-neutral-400 mr-1'>New to Netflix?</p>
                            <p className='cursor-pointer hover:underline' onClick={e=>history('/')}>Sign up now</p>
                        </div>
                        <div className='text-sm text-neutral-400 mt-4 mb-3'>
                            This page is protected by Google reCAPTCHA to ensure you're not a bot.
                            {!learnMore && <span className='text-blue-500 ml-1 cursor-pointer hover:underline' onClick={e => setLearnMore('true')}>Learn more.</span>}
                        </div>
                        {learnMore && <div className='text-sm text-neutral-400 '>
                            The information collected by Google reCAPTCHA is subject to the Google <a className='text-blue-500 ml-1 hover:underline' href=""> Privacy Policy</a> and <a className='text-blue-500 ml-1 hover:underline' href="">Terms of Service</a>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalised advertising by Google).
                        </div>}
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default SignInPage