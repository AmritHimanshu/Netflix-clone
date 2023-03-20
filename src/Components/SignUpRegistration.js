import React from 'react'
import { useNavigate } from 'react-router-dom'

function SignUpRegistration() {

  const navigate = useNavigate();

  return (
    <div>

      <div className='flex justify-between items-center'>
        <div className='w-[215px] p-5 cursor-pointer' onClick={e => navigate('/')}>
          <img src={process.env.PUBLIC_URL + "/images/netflixLogo.png"} alt="" />
        </div>
        <div className='text-xl font-semibold mx-10 cursor-pointer hover:underline' onClick={e => navigate('/login')} >
          Sign In
        </div>
      </div>

      <hr />

      <div className='h-[500px] mt-[100px] flex flex-col items-center'>

        <div className=''>
          <img src={process.env.PUBLIC_URL + "/images/laptopPcMobile.png"} alt="" />
        </div>

        <div className='w-[330px] mx-auto flex flex-col items-center text-center'>
          <p className='text-sm'>
            STEP <span className='font-semibold'>1</span> OF <span className='font-semibold'>3</span>
          </p>
          <p className='text-3xl font-semibold mb-3'>
            Finish setting up your account
          </p>
          <p className='text-lg'>
            Netflix is personalized for you.
          </p>
          <p className='text-lg'>
            Create a password to watch on any device at any time.
          </p>

          <div className='w-full my-6 py-4 bg-red-600 text-3xl text-white cursor-pointer hover:bg-red-500' onClick={e => navigate('/signup/regform')}>
            Next
          </div>
        </div>

      </div>

    </div>
  )
}

export default SignUpRegistration