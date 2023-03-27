import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectCost, setCost, unsetCost } from '../features/rememberSlice';

function SignUpPlanformOption({ type, cost, feedback, resolution, Icon, number }) {

    const dispatch = useDispatch();
    const selectedCost = useSelector(selectCost);
    const [selectedSubs, setSelectedSubs] = useState(false);

    const selectSubs = () => {
        if (!selectedSubs) {
            setSelectedSubs(true);
            if (selectedCost == cost) {
                dispatch(unsetCost());
            }
            else {
                dispatch(setCost({
                    cost: cost,
                }))
            }
        }
        else {
            setSelectedSubs(false);
        }
    }

    // console.log(selectedCost);

    return (
        <div>

            <div className='text-center' onClick={selectSubs} >
                <div className='mx-3 cursor-pointer'>
                    <p className={`border bg-red-500/75 ${selectedSubs && 'bg-red-600'} text-white text-lg py-[50px] px-[30px] `}>
                        <p className="">{type}</p>
                    </p>
                </div>
                <p className={`py-5 ${selectedSubs && 'text-red-600'}`}>{cost}</p>
                <hr className='h-[2px] bg-neutral-300' />
                <p className={`py-5 ${selectedSubs && 'text-red-600'}`}>{feedback}</p>
                <hr className='h-[2px] bg-neutral-300' />
                <p className={`py-5 ${selectedSubs && 'text-red-600'}`}>{resolution}</p>
                <hr className='h-[2px] bg-neutral-300' />
                <p className={`py-[19px] ${selectedSubs && 'text-red-600'}`}>{Icon}</p>
                <hr className='h-[2px] bg-neutral-300' />
                <p className={`py-5 ${selectedSubs && 'text-red-600'}`}>{number}</p>
            </div>

        </div >
    )
}

export default SignUpPlanformOption