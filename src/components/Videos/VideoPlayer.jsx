import YouTubePlayer from 'react-player/lib/players/YouTube'
import React from "react";
import PropTypes from 'prop-types';

const VideoPlayer = (props) => (
     <YouTubePlayer
            url= {props.url}
            playing={false}
            controls
            style={{display:'inline-block', maxHeight : 300, maxWidth : 350, margin : 10}}
            // Other ReactPlayer props will work here
        />
)

VideoPlayer.propTypes ={
     url : PropTypes.string.isRequired
}
export default VideoPlayer
