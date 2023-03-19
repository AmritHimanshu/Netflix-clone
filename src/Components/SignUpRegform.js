import React from 'react'
import { useNavigate } from 'react-router-dom'

function SignUpRegform() {

    const navigate = useNavigate();

    return (
        <div>
            <div className='flex justify-between items-center'>
                <div className='w-[215px] p-5 cursor-pointer' onClick={e => navigate('/')}>
                    <img src={process.env.PUBLIC_URL + "/images/netflixLogo.png"} alt="" />
                </div>
                <div className='text-xl font-semibold mx-10 cursor-pointer hover:underline' onClick={e => navigate('/login')}>
                    Sign In
                </div>
            </div>

            <hr />

            <div className=''>
                <div className='w-[500px] my-12 mx-auto'>
                    <p className='text-sm'>
                        STEP <span className='font-semibold'>1</span> OF <span className='font-semibold'>3</span>
                    </p>
                    <p className='text-4xl font-semibold mb-3'>
                        Create a password to start your membership
                    </p>
                    <p className='text-xl'>
                        Just a few more steps and you're done!
                    </p>
                    <p className='text-xl'>
                        We hate paperwork, too.
                    </p>
                    <form>
                        <input className='border p-4 my-1 text-lg w-[450px]' type="email" placeholder='Email address' />
                        <input className='border p-4 my-1 text-lg w-[450px]' type="password" placeholder='Add a password' />
                        <div className='w-[450px] my-6 py-4 bg-red-600 text-3xl text-white text-center cursor-pointer hover:bg-red-500'>
                            Next
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUpRegform