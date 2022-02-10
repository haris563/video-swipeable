import Image from 'next/image';
import React from 'react';
import eslImg from '../public/esl.png'
import chatImg from '../public/chat.png'
import likeImg from '../public/like.png'
import shareImg from '../public/share.png'
import {VolumeUpIcon, VolumeOffIcon} from "@heroicons/react/solid"



function VideoSidebar({muted, mutedHandler, handleComment}) {
  return (
    <div className="absolute text-white right-0 bottom-44 space-y-2 px-5 mr-2 ">
      <div className='relative h-7 w-7'>
        <Image src={eslImg} layout='fill' />
       
      </div>
      <div className='flex flex-col items-center'>
        <Image src={shareImg} height='28' width='28' />
        <h1 className='text-[10px]'>3k</h1>
      </div>
      <div className='flex flex-col items-center' >
        <Image src={likeImg} height='28' width='28' />
        <h1 className='text-[10px]'>3k</h1>
      </div>
      <div className='flex flex-col items-center' onClick={handleComment}>
        <Image src={chatImg} height='28' width='28' />
        <h1 className='text-[10px]'>3k</h1>
      </div>
      <>
        {muted ?  
          <div className='bg-white/25 px-1 py-1 rounded-full' onClick={mutedHandler}>
            <VolumeOffIcon className='h-5 w-5' />
          </div> :
          <div className='bg-white/25 px-1 py-1 rounded-full' onClick={mutedHandler}>
            <VolumeUpIcon className='h-5 w-5' />
          </div>
        }
      </>
   
     
  
    </div>
    )
}

export default VideoSidebar;
