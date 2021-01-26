import React from "react"
import useWindowDimensions from '../utils/getDimensions'


const Video = ({ videoSrcURL, videoTitle, ...props }) => {
  const { width } = useWindowDimensions();
  const videoWidth = width < 700 ? width : "700"
  const videoHeight = width < 700 ? width * 0.57 : "400"
  return (
  <div className="video">
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      width={videoWidth}
      height={videoHeight}
    />
  </div>
)
}
export default Video