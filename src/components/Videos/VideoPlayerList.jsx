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
    return    <div className="row snippet-projects-013">
        <div className="col-xs-12">
            <div className="row">
                <div className="col-xs-12">
                    <h1><b>Videos</b></h1>
                </div>
            </div>


        </div>
        {  videos.map((video=>{
            return <VideoPlayer url={video.url}/>
        }))}
    </div>


}
export default  VideoPlayerList
