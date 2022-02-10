import React from 'react';
import Image from 'next/image';
import sendImg from '../public/send.png'
import storeImg from '../public/store.png'  

function VideoFotter() {
  return (
    <div className='absolute text-white bottom-0 my-10 w-full space-y-3'>
        <div className='flex flex-row w-full px-5'>
            <input type="text" placeholder="Write your comment here" 
                    className='flex-grow px-3 py-3 rounded-md mr-2  bg-[#ffffff25] font-light text-[14px] placeholder-white  text-white outline-none'/>
            <button className='relative h-12 w-12 backdrop-blur-sm bg-white/30 rounded-md'>
                <Image src={sendImg} layout='fill' className='px-3 py-3' />
            </button>
        </div>
        <div className='flex flex-row w-full px-5'>
            <button className='flex-grow px-3 py-2 mr-2 bg-[#FF8319] rounded-md font-medium text-[20px] '>
                Showcase product
            </button>
            <button className='relative h-12 w-12 bg-[#FF8319] rounded-md'>
                <Image src={storeImg} height={26} width={26} className='px-3 py-3' />
            </button>
        </div>
    </div>
  )
}

export default VideoFotter;
