import Head from 'next/head'
import {useRef, useState, useEffect} from "react"
import VideoFotter from '../components/VideoFotter'
import VideoSidebar from '../components/VideoSidebar'
import VideoHeader from '../components/VideoHeader'
import VideoComments from './VideoComments'
import { InView } from 'react-intersection-observer';
import { useInView } from 'react-intersection-observer';


export default function VideoPlayer({item}) {
  const [inView, setInView] = useState(false)
  const [muted, setmuted] = useState(true)
  const [showComments, setshowComments] = useState(false)


  const videoRef = useRef()
  
  const onVideoPress = () => {
    if (inView) {
      console.log(videoRef.current)
      videoRef.current.pause();
      setInView(false);
    } else {
      console.log(videoRef.current)
      videoRef.current.play();
      setInView(true);
    }
  };


  const mutedHandler = () => {
    setmuted(!muted);
  }

  const handleComment = () => {
    setshowComments(!showComments)
  }

 useEffect(() => {
    if(inView) {
      console.log(videoRef.current)
      videoRef.current.play();
      
      console.log(videoRef.current.attributes)
      console.log("played")
    }
    else{
      videoRef.current.pause();
      console.log("paused")
      
    }
 }, [inView]);
 
  
  return (
    <InView  onChange={setInView} threshold={0.7}>
    {({ inView, ref, entry }) => (
   <div className="relative bg-gray-900 w-full h-full snap-start  " ref={ref} 
  
   style={{position: 'relative', backgroundColor:'black', width:'100%', height:'100%',scrollSnapAlign: 'start'}}  
 >
   <video
      muted={muted}
      loop
      className="w-full h-full object-contain absolute"
      style={{position: 'absolute',  width:'100%', height:'100%',objectFit: "contain"}}
      onClick={onVideoPress}
      ref={videoRef}
      src={item.streamingUrl}
   ></video>
   <VideoHeader />
   {showComments ? 
      <VideoComments handleComment={handleComment} /> 
    : 
    <>
      
      <VideoFotter />
      <VideoSidebar muted={muted} mutedHandler={mutedHandler} handleComment={handleComment} />
    </>
  }

    
   
 </div>
   )}
</InView>
   
  )
}
