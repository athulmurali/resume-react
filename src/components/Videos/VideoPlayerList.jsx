import React from "react";
import VideoPlayer from "./VideoPlayer";

const videos = [
    {
        //plagiarism detector demo
        url : "https://www.youtube.com/watch?v=jUKjM7mgczE"
    },
    {
        //react native demo
        url : "https://www.youtube.com/watch?v=2OpqWoyN4WM"
    },
    {
        // jamnjam demo
        url : "https://www.youtube.com/watch?v=2vbRGfbdv30"
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
