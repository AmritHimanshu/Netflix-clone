import React from 'react'
import AddIcon from '@mui/icons-material/Add';

function FirstPageQuestionOption({title}) {
    return (
        <div className='p-6 mx-10 my-3 flex justify-between bg-neutral-800 cursor-pointer hover:bg-neutral-600 duration-300'>
            <h1 className='text-2xl'>
                {title}
            </h1>
            <AddIcon fontSize="large"/>
        </div>
    )
}

export default FirstPageQuestionOption