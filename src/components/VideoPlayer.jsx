import YouTubePlayer from 'react-player/lib/players/YouTube'
import React from "react";
import PropTypes from 'prop-types';

const VideoPlayer = (props) => {
    return <div>

        <YouTubePlayer
            url={'https://www.youtube.com/watch?v=d46Azg3Pm4c'}
            playing={true}
            controls
            // Other ReactPlayer props will work here
        />
    </div>
}

VideoPlayer.propTypes ={
     url : PropTypes.string.isRequired
}
export default VideoPlayer
