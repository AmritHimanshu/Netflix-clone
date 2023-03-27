import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentEmail, selectCurrentPassword } from '../features/emailSlice';
import { auth } from '../firebase';
import { login } from '../features/userSlice';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import SignUpPlanformOption from './SignUpPlanformOption';

function SignUpPlanform() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const selectEmail = useSelector(selectCurrentEmail);
    const selectPassword = useSelector(selectCurrentPassword);

    const register = (e) => {
        auth.createUserWithEmailAndPassword(selectEmail, selectPassword)
            .then((userAuth) => {
                console.log(userAuth.user.uid);
                dispatch(login({
                    email: selectEmail,
                    uid: userAuth.user.uid,
                }))
            }).catch(error => alert(error.message));

        navigate('/');
    }

    const signOut = (e) => {
        auth.signOut();
        navigate('/');
    }


    return (
        <div>
            <div className='flex justify-between items-center'>
                <div className='w-[215px] p-5 cursor-pointer' onClick={e => navigate('/')}>
                    <img src={process.env.PUBLIC_URL + "/images/netflixLogo.png"} alt="" />
                </div>
                <div className='text-xl font-normal mx-10 cursor-pointer hover:underline' onClick={signOut}>
                    Sign Out
                </div>
            </div>

            <hr />

            <div>
                <div className='mx-10 my-7 flex flex-col items-start'>
                    <p className='text-sm'>
                        STEP <span className='font-semibold'>2</span> OF <span className='font-semibold'>3</span>
                    </p>
                    <p className='text-4xl font-normal mb-3'>
                        Choose the plan that’s right for you
                    </p>
                    <div>
                        <div className='flex'>
                            <CheckIcon fontSize='large' style={{ color: "red" }} />
                            <p className='mx-1 text-xl'>
                                Watch all you want. Ad-free.
                            </p>
                        </div>
                        <div className='flex'>
                            <CheckIcon fontSize='large' style={{ color: "red" }} />
                            <p className='mx-1 text-xl'>
                                Recommendations just for you.
                            </p>
                        </div>
                        <div className='flex'>
                            <CheckIcon fontSize='large' style={{ color: "red" }} />
                            <p className='mx-1 text-xl'>
                                Change or cancel your plan anytime.
                            </p>
                        </div>
                    </div>
                    <div className='w-full flex justify-between'>
                        <div className='w-full mt-[161.5px]'>
                            <p className='py-5 px-3'>Monthly price</p>
                            <hr className='h-[2px] bg-neutral-300' />
                            <p className='py-5 px-3'>Video quality</p>
                            <hr className='h-[2px] bg-neutral-300' />
                            <p className='py-5 px-3'>Resolution</p>
                            <hr className='h-[2px] bg-neutral-300' />
                            <p className='py-5 px-3'>Spatial audio</p>
                            <hr className='h-[2px] bg-neutral-300' />
                            <p className='py-5 px-3'>Number of devices for downloads</p>
                        </div>
                        <div className='my-8 flex'>

                            <SignUpPlanformOption type="Mobile" cost="₹ 149" feedback="Good" resolution="480p" Icon={<CloseIcon />} number="1" />

                            <SignUpPlanformOption type="Basic" cost="₹ 199" feedback="Good" resolution="720p" Icon={<CloseIcon />} number="1" />

                            <SignUpPlanformOption type="Standard" cost="₹ 499" feedback="Better" resolution="1080p" Icon={<CloseIcon />} number="2" />

                            <SignUpPlanformOption type="Premium" cost="₹ 649" feedback="Best" resolution="4K+HDR" Icon={<CheckIcon />} number="6" />

                        </div>
                    </div>
                    <div className='w-[450px] mt-3 mx-auto py-4 bg-red-600 text-3xl text-white text-center cursor-pointer hover:bg-red-500' onClick={register}>
                        Next
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SignUpPlanform