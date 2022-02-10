// // import Head from 'next/head'
// // import VideoPlayer from '../components/VideoPlayer'
// // import { useEffect, useState, useRef } from 'react'
// // import axios from 'axios'
// // import InfiniteScroll from 'react-infinite-scroller'

// // export default function Home() {
// //   const [data, setdata] = useState([])
// //   const [limit, setlimit] = useState(12)
// //   const [page, setpage] = useState(0)
// //   const [playing, setPlaying] = useState(false)
// //   const videoRef = useRef()

// //   const onVideoPress = () => {
// //     if (playing) {
// //       console.log(videoRef.current.id)
// //       console.log(videoRef.current.focus.id)
// //       videoRef.current.pause()
// //       setPlaying(false)
// //     } else {
// //       console.log(videoRef.current.id)
// //       videoRef.current.play()
// //       setPlaying(true)
// //     }
// //   }

// //   const style = {
// //     height: 90,
// //     border: '1px solid green',
// //     margin: 6,
// //     padding: 8,
// //   }

// //   const fetchData = async (index) => {
// //     try {
// //       setpage((prevState) => prevState + 1)
// //       let response = await axios.get(
// //         `https://apix-stage.bazaarghar.com/streaming/v1/getrecordedvideo?city=Rawalpindi&page=${page}&limit=${limit}`
// //       )
// //       console.log(response.data.results)
// //       setdata((prevState) => [...prevState, ...response.data.results])
// //     } catch (err) {
// //       console.log(err)
// //     }
// //   }
// //   const videoChange = (index, data) => {
// //     debugger
// //   }
// //   useEffect(() => {
// //     // (async () => {
// //     //       try {
// //     //   let response = await axios.get(`https://apix-stage.bazaarghar.com/streaming/v1/getrecordedvideo?city=Rawalpindi&page=${1}&limit=12`)
// //     //   console.log(response.data.results)
// //     //   setdata(response.data.results)
// //     // }
// //     // catch(err){
// //     //   console.log(err)
// //     // }
// //     // })()
// //     fetchData()
// //   }, [])

// //   // video

// //   return (
// //     <div className="relative h-screen w-screen snap-y snap-mandatory overflow-scroll scroll-smooth">
// //       {data &&
// //         data.map((item, index) => {
// //           return (
            
// //             <div
// //               className="relative h-full w-full snap-start bg-yellow-600 "
// //               key={index}
// //               onChange={()=>console.log('Div')}
// //             >
// //               <input  style={{display:"none"}} onChange={()=>console.log("chnage")}></input>
// //               <video
// //                 className="absolute h-full w-full object-cover"
// //                 onClick={onVideoPress}
// //                 ref={videoRef}`
// //                 id={index}
// //                 src={
// //                   'https://vintegavod.s.llnwi.net/video/vintegavod/VOD/1629884896651.mp4'
// //                 }
// //               ></video>
// //               {/* <VideoHeader />
// //           <VideoFotter />
// //           <VideoSidebar />
// //             */}
// //             </div>
           
// //           )
// //         })}
// //     </div>
// //   )
// // }

import React from "react";
import { render } from "react-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from 'axios'
import Head from 'next/head'
import VideoPlayer from "../components/VideoPlayer"

const style1 = {
  // height: "400px",
  // width: "100vw",
  overflow: "scroll",
  scrollBehavior: "smooth",
  scrollSnapType: "y mandatory",
  position: "relative"

};
const style = {
  height: 90,
  border: "1px solid green",
  margin: 6,
  padding: 8
};

class Home extends React.Component {
  state = {
    page:0,
    limit:12,
    items:[]
  };

  // fetchData = async() => {
  //   try {
  //     this.setState({
  //       page: this.state.page+1
  //     })
  //     let response = await axios.get(`https://apix-stage.bazaarghar.com/streaming/v1/getrecordedvideo?city=Rawalpindi&page=${page}&limit=${limit}`)
  //     console.log(response.data.results)
  //     setdata((prevState)=>[...prevState, ...response.data.results])
  //   }
  //   catch(err){
  //     console.log(err)
  //   }
  // }

  fetchMoreData = async () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    try {
      this.setState({
        page: this.state.page+1
      })
      let response = await axios.get(`https://apix-stage.bazaarghar.com/streaming/v1/getrecordedvideo?city=Rawalpindi&page=${this.state.page}&limit=${this.state.limit}`)
      console.log(response.data.featured)
      this.setState(prevState => ({
        items: [...prevState.items , ...response.data.featured]
        }))
    }
    catch(err){
      console.log(err)
    }
  }

  componentDidMount() {
    this.fetchMoreData()
  }

  //   this.setState({
  //     page: this.state.page+1
  //   })
  //   let response = await axios.get(`https://apix-stage.bazaarghar.com/streaming/v1/getrecordedvideo?city=Rawalpindi&page=${page}&limit=${limit}`)
  //   console.log(response.data.results)
  //   setTimeout(() => {
  //     this.setState({
  //       data: this.state.data.concat(Array.from({ length: 20 }))
  //     });
  //   }, 1500);
  // };

  render() {
    return (
      <div className="sm:block scroll-smooth">

        {this.state.items && this.state.items.length>0 &&
        <InfiniteScroll
          height={"100vh"}
          style={style1}
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {this.state.items && this.state.items.map((item, index) => 
          <VideoPlayer item={item} key={index}  /> 
          )}
        </InfiniteScroll>
  }
      </div>
    );
  }
}

export default Home


// import React from "react";
// import VideoJs from '../components/VideoJs';
// ;
//  // point to where the functional component is stored

// const Home = () => {
//   const playerRef = React.useRef(null);

//   const videoJsOptions = { // lookup the options in the docs for more options
//     autoplay: true,
//     controls: true,
//     responsive: true,
//     fluid: true,
//     sources: [{
//       src: "https://vintegavod.s.llnwi.net/video/vintegavod/VOD/1629884896651.mp4",
//       type: 'video/mp4'
//     }]
//   }

//   const handlePlayerReady = (player) => {
//     playerRef.current = player;

//     // you can handle player events here
//     player.on('waiting', () => {
//       console.log('player is waiting');
//     });

//     player.on('dispose', () => {
//       console.log('player will dispose');
//     });
//   };

//   // const changePlayerOptions = () => {
//   //   // you can update the player through the Video.js player instance
//   //   if (!playerRef.current) {
//   //     return;
//   //   }
//   //   // [update player through instance's api]
//   //   playerRef.current.src([{src: 'http://ex.com/video.mp4', type: 'video/mp4'}]);
//   //   playerRef.current.autoplay(false);
//   // };

//   return (
//     <>
//       <div>Rest of app here</div>

//       <VideoJs />

//       <div>Rest of app here</div>
//     </>
//   );
// }
// export default Home