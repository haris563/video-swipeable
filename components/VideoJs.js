import React from 'react';
import videojs from "video.js";
import "video.js/dist/video-js.css";
import VideoFotter from '../components/VideoFotter'
import VideoSidebar from '../components/VideoSidebar'
import VideoHeader from '../components/VideoHeader'

function VideoJs(props) {
    const videoRef = React.useRef(null);
    const playerRef = React.useRef(null);
    const [playing, setPlaying] = React.useState(false);

    
    const onVideoPress = () => {
      console.log("Clicked", videoRef.current)
      // if (playing) {
      //   console.log(videoRef.current)
      //   videoRef.current.pause();
      //   setPlaying(false);
      // } else {
      //   console.log(videoRef.current)
      //   videoRef.current.play();
      //   setPlaying(true);
      // }
    };
    // const { options, onReady } = props;
    // const playerRef = React.useRef(null);

    const options = { // lookup the options in the docs for more options
      autoplay: true,
      
      responsive: true,
      fluid: true,
      sources: [{
        src: "https://vintegavod.s.llnwi.net/video/vintegavod/VOD/1629884896651.mp4",
        type: 'video/mp4'
      }]
    }
  
    const handlePlayerReady = (player) => {
      playerRef.current = player;
  
      // you can handle player events here
      player.on('waiting', () => {
        console.log('player is waiting');
      });
  
      player.on('dispose', () => {
        console.log('player will dispose');
      });
    };

    React.useEffect(() => {
        // make sure Video.js player is only initialized once
        if (!playerRef.current) {
          const videoElement = videoRef.current;
          if (!videoElement) return;
    
          const player = playerRef.current = videojs(videoElement, options, () => {
            console.log("player is ready", player);
            handlePlayerReady && handlePlayerReady(player);
          });
        } else {
          // you can update player here [update player through props]
          // const player = playerRef.current;
          // player.autoplay(options.autoplay);
          // player.src(options.sources);
        }
      }, [options, videoRef]);
    
      // Dispose the Video.js player when the functional component unmounts
    //   React.useEffect(() => {
    //     const player = playerRef.current;
    
    //     return () => {
    //       if (player) {
    //         player.dispose();
    //         playerRef.current = null;
    //       }
    //     };
    //   }, [playerRef]);
    return (
        <div data-vjs-player  className="relative bg-yellow-600 w-screen h-screen snap-start " >
            <video ref={videoRef} onClick={onVideoPress}  className="video-js vjs-big-play-centered w-screen h-screen absolute object-cover" style={{height:"100vh",  width: "100vw", objectFit: "cover", position: "absolute"}} />
            <VideoHeader />
            <VideoFotter />
      {/* <VideoSidebar /> */}
        </div>
    )
}

export default VideoJs;
