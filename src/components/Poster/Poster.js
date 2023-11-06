import React, { useEffect, useState } from 'react'
import './Poster.css'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../constants/constant'
import YouTube from 'react-youtube'


function Poster(props) {
  const [toprated,setToprated]= useState([])
  const [urlId,setUrlId] = useState("")
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
        setToprated(response.data.results)
    })
  })
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }
  }
  
  const handleVideoClick =(id) => {
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      if(response.data.results.length !== 0){
        setUrlId(response.data.results[0])
      }
     
    })
  }
  return (
   
    <div className='row' >
        <h5 className='category-title'>{props.title}</h5>
        
       <div className='posters'>
       {toprated.map((obj)=>
             <img className='poster' onClick={()=> handleVideoClick(obj.id)} src={`${imageUrl+obj.backdrop_path}`}   alt='poster'/> 

            )}

       </div>
   {urlId && <YouTube videoId={urlId.key} opts={opts} /> }

    </div>
   
  )
}

export default Poster
