import React from 'react'

function SignInPage() {
    return (
        <div className='h-[100vh] bg-black'>
            <div className="h-[90vh] bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/d049a3bd-40ee-411b-9f16-d1def798d43b/d6aeb5a9-b14c-42d4-999e-c2f0d6c60f04/IN-en-20230313-popsignuptwoweeks-perspective_alpha_website_large.jpg')] bg-cover bg-center">
                <div className='h-full bg-black text-white bg-opacity-60'>
                    <div className='w-[220px] p-5'>
                        <img src={process.env.PUBLIC_URL + "/images/netflixLogo.png"} alt="" />
                    </div>

                    <div className='m-auto w-[50vw] py-8 px-14 bg-black bg-opacity-70'>
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
                        </form>

                        
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SignInPage