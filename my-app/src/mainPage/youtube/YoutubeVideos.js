import React, { useState } from 'react';
import YouTube from 'react-youtube';

const YoutubeVideo = ({ videoId}) => {
  const [player, setPlayer] = useState(null);

  const onReady = (event) => {
    setPlayer(event.target);
  };


  return (
    <>

    



      <div className='youtube-1-contain'>

      <YouTube videoId={videoId} onReady={onReady} />
     

      </div>
   
    






    

    </>





   
  );
};

export default YoutubeVideo;
