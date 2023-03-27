import React from 'react'
import { useNavigate } from 'react-router-dom'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import CheckIcon from '@mui/icons-material/Check';

function SignUp() {

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

            <div className='h-[500px] mt-[100px] flex flex-col items-center'>

                <div className=''>
                    <CheckCircleOutlinedIcon className='my-6' style={{ color: "red", width: "60px", height: "60px" }} />
                </div>

                <div className='w-[330px] mx-auto flex flex-col items-center'>
                    <p className='text-sm'>
                        STEP <span className='font-semibold'>2</span> OF <span className='font-semibold'>3</span>
                    </p>
                    <p className='text-3xl font-semibold mb-3'>
                        Choose your plan.
                    </p>
                    <div>
                        <div className='flex'>
                            <CheckIcon fontSize='large' style={{ color: "red" }} />
                            <p className='mx-1 text-xl'>
                                No commitments, cancel anytime.
                            </p>
                        </div>
                        <div className='flex'>
                            <CheckIcon fontSize='large' style={{ color: "red" }} />
                            <p className='mx-1 text-xl'>
                                Everything on Netflix for one low price.
                            </p>
                        </div>
                        <div className='flex'>
                            <CheckIcon fontSize='large' style={{ color: "red" }} />
                            <p className='mx-1 text-xl'>
                                No ads and no extra fees. Ever.
                            </p>
                        </div>
                    </div>
                    <div className='w-full my-6 py-4 bg-red-600 text-3xl text-white text-center cursor-pointer hover:bg-red-500' onClick={e => navigate('/signup/planform')}>
                        Next
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SignUp