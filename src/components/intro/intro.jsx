import React from 'react'
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs';


const intro = () => {
  const [PlayVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);
    
    if(PlayVideo){
      vidRef.current.pause();
    }else{
      vidRef.current.play();
    }

    
  }

  return (
    <div className='app__video'>
      <video 
      src="/assets/meal.mp4"
      ref={vidRef}
      type="video/mp4"
      loop
      muted
      controls={false}
      />
      <div className='app__video-overlay flex__center'>
        <div
          className='app__video-overlay_circle flex__center'
          onClick={handleVideo}>
          {PlayVideo 
          ? <BsPauseFill  color='#fff' fontSize={30} />
          : <BsFillPlayFill  color='#fff' fontSize={30}/>}
        </div>
      </div>
    </div>
  )
}

export default intro