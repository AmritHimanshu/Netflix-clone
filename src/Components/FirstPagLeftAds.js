import React from 'react'

function FirstPageLeftAds({title,paragraph,image}) {
    return (
        <div className='px-6 h-[470px] bg-black text-white border-b-[7px] border-neutral-600 flex items-center'>
            <div className='w-[400px]'>
                <img src={process.env.PUBLIC_URL + `/images/${image}`} alt="" />
            </div>
            <div className='w-[510px]'>
                <h1 className='text-6xl font-extrabold'>
                    {title}
                </h1>
                <p className='text-2xl mt-5'>
                    {paragraph}
                </p>
            </div>
        </div>
    )
}

export default FirstPageLeftAds