import Image from 'next/image'
import React from 'react'
import sendImg from '../public/send.png'
import { XIcon } from "@heroicons/react/solid"
import Comment from './Comment'

export default function VideoComments({handleComment}) {
    return ( 
        <div>
            <div class = "absolute inset-x-0 bottom-0 h-[60vh] bg-black/25 text-white" >
                <div className = 'absolute right-0 m-3 bg-black/30 rounded-full p-1' 
                    onClick={handleComment}
                >
                    <XIcon className = 'h-5 w-5 text-white ' />
                </div> 

                <div className='absolute h-4/6 w-full space-y-4 mt-20 overflow-y-auto  '>
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                </div>
        
                <div className = 'flex flex-row w-full px-5 absolute bottom-0 my-5 z-100' >
                    <input type = "text"
                        placeholder = "Write your comment here"
                        className = 'flex-grow px-3 py-3 rounded-md mr-2  bg-[#ffffff25] font-light text-[14px] placeholder-white/50  text-white outline-none' />
                        
                    <button className = 'relative h-12 w-12 backdrop-blur-sm bg-white/30 rounded-md' >
                        <Image src = { sendImg } layout = 'fill'  className = 'px-3 py-3' />
                    </button> 
                </div> 
            </div> 
        </div>
    )
}
