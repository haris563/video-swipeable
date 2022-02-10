import React from 'react';
import { EyeIcon} from "@heroicons/react/solid"
import {ChevronLeftIcon} from "@heroicons/react/outline"
function VideoHeader() {
  return (
        <div className="w-full flex flex-row justify-between absolute text-white px-5 top-10">
            <div className="flex flex-row align-middle items-center">
                <ChevronLeftIcon className='h-[21px]' />
                <h1 className=''>Back</h1>
            </div>
            <div className="flex flex-row">
                {/* <div className="bg-[#FE1803] rounded-md px-3 py-0.7 -mr-1 flex flex-row align-middle items-center justify-between space-x-1 z-40 ">
                    <div className="rounded-full bg-white h-1 w-1"></div>
                    <h1 className="text-[12px] ">Live</h1>
                </div> */}
                
                <div className="flex flex-row bg-white/25 px-2 py-0.7 rounded-md align-middle items-center justify-between space-x-1 ">
                    <EyeIcon className='h-3'/>
                    <h1 className="text-[12px]">9.1k</h1>
                </div>
                
            </div>
            
        </div>
    )
}

export default VideoHeader;
