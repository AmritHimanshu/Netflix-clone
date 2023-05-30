import React from 'react'

function FirstPageRightAds({title,paragraph,image}) {
    return (
        <div className='px-6 h-[470px] bg-black text-white border-b-[7px] border-neutral-600 flex items-center justify-between'>
            <div className='w-[510px]'>
                <h1 className='text-6xl font-extrabold'>
                    {title}
                </h1>
                <p className='text-2xl mt-5'>
                    {paragraph}
                </p>
            </div>
            <div className='w-[400px] relative'>
                <img className='w-[300px] my-10 mx-10' src={process.env.PUBLIC_URL + `/images/bgImage.jpg`} alt="" />
                <img className='w-[400px] absolute top-0' src={process.env.PUBLIC_URL + `/images/${image}`} alt="" />
            </div>
        </div>
    )
}

export default FirstPageRightAds