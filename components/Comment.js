import React from 'react'

function Comment() {
    return (
        <div className='flex flex-row items-center px-5 w-full '>
            <div  className="h-10 w-10 rounded-full">
                <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_3_0.png" alt="man avatar" 
                    className="h-full w-full rounded-full" />
            </div>
            <div className='ml-3'>
                <h1 className='text-[12px] font-medium'>
                    name
                </h1>
                <h1 className='text-[12px] font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            </div>
        </div>
    )
}

export default Comment