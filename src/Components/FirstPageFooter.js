import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function FirstPageFooter() {
    return (
        <div className='p-10 bg-black text-neutral-300'>
            <div className='mb-5 flex'>
                <p>Questions? Call</p>
                <p className='ml-2 cursor-pointer underline'>000-800-919-1694</p>
            </div>

            <div className='underline h-[380px] flex flex-col flex-wrap'>
                <p className='cursor-pointer my-3 text-sm w-[300px]'>FAQ</p>
                <p className='cursor-pointer my-3 text-sm w-[300px]'>Help Center</p>
                <p className='cursor-pointer my-3 text-sm w-[300px]'>Media Center</p>
                <p className='cursor-pointer my-3 text-sm w-[300px]'>Jobs</p>
                <p className='cursor-pointer my-3 text-sm w-[300px]'>Terms of Use</p>
                <p className='cursor-pointer my-3 text-sm w-[300px]'>Cookie Preferences</p>
                <p className='cursor-pointer my-3 text-sm w-[300px]'>Contact Us</p>
                <p className='cursor-pointer my-3 text-sm w-[300px]'>Legal Notices</p>
                <p className='cursor-pointer my-3 text-sm w-[300px]'>Gift Card Terms</p>
                <p className='cursor-pointer my-3 text-sm w-[300px]'>Account</p>
                <p className='cursor-pointer my-3 text-sm w-[300px]'>Investor Relations</p>
                <p className='cursor-pointer my-3 text-sm w-[300px]'>Ways to Watch</p>
                <p className='cursor-pointer my-3 text-sm w-[300px]'>Privacy</p>
                <p className='cursor-pointer my-3 text-sm w-[300px]'>Corporate Information</p>
                <p className='cursor-pointer my-3 text-sm w-[300px]'>Speed Test</p>
                <p className='cursor-pointer my-3 text-sm w-[300px]'>Only on Netflix</p>
            </div>

            <div className='px-2 py-1 w-min flex border border-gray-500 rounded-md'>
                <LanguageIcon />
                <p className='mx-2'>English</p>
                <ArrowDropDownIcon />
            </div>

            <p className='mt-6 text-sm'>Netflix India</p>
        </div>
    )
}

export default FirstPageFooter