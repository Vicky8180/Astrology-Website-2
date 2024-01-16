import React from 'react';
import "./YT.css"
import YoutubeVideo from './YoutubeVideos';

const YoutubeStater = () => {

    function getVideoIdFromUrl(url) {
        const regex = /[?&]([^=#]+)=([^&#]*)/g;
        let match;
        while ((match = regex.exec(url))) {
          if (match[1] === 'v') {
            return match[2];
          }
        }
        return null;
      }
      
      const videoUrl = 'https://www.youtube.com/watch?v=REVcnY1C14U';
      const videoId = getVideoIdFromUrl(videoUrl);
      


  return (
    <div className='youtube-main'>
    <div className='youtube-1'><YoutubeVideo videoId={videoId} /></div>
    <div className='youtube-1'><YoutubeVideo videoId={videoId} /></div>
  

</div>

    
  );
};

export default YoutubeStater;
