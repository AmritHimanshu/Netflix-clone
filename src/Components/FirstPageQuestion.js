import React from 'react'
import FirstPageQuestionOption from './FirstPageQuestionOption'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function FirstPageQuestion() {
    return (
        <div className='py-16 text-center bg-black text-white border-b-[7px] border-neutral-600'>
            <h1 className='text-5xl mb-8 font-extrabold'>Frequently Asked Questions</h1>

            <FirstPageQuestionOption title="What is Netflix?"/>
            <FirstPageQuestionOption title="How much does Netflix cost?"/>
            <FirstPageQuestionOption title="Where can I watch?"/>
            <FirstPageQuestionOption title="How do I cancel?"/>
            <FirstPageQuestionOption title="What can I watch on Netflix?"/>
            <FirstPageQuestionOption title="Is Netflix good for kids?" />
            
            <div>
                <p className='text-xl mt-12'>
                    Ready to watch? Enter your email to create or restart your membership.
                </p>
                <form>
                    <input className='my-5 p-4 w-[450px] bg-black bg-opacity-50 border border-gray-600 rounded-md' type="text" placeholder='Email address' />
                    <button className='mx-3 py-[11px] w-[210px] bg-red-600 rounded-md font-semibold text-2xl hover:bg-red-700 duration-300'>
                        Get Started
                        <ArrowForwardIosIcon className='ml-1 mb-2' />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default FirstPageQuestion