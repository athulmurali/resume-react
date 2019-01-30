import React from "react";
import VideoPlayer from "./VideoPlayer";

const videos = [
    {
        url : "https://youtu.be/d46Azg3Pm4c"
    },
    {
        url : "https://youtu.be/d46Azg3Pm4c"
    },
    {
        url : "https://youtu.be/d46Azg3Pm4c"
    },
]

const VideoPlayerList = ()=>{
    return <div  >
        {  videos.map((video=>{
            return <VideoPlayer url={video.url}/>
        }))}
    </div>


}
export default  VideoPlayerList
