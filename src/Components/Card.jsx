import React from 'react'
import { MoveRight } from 'lucide-react'
const Card = (props) => {
  return (
    <div>
        <div className='card'>
  
    <div className='main' style={{ backgroundColor: props.bgColor }}>
    <div className='top'>
      <h1>{props.title}</h1>
      <p>{props.post}</p>

    </div>
    <div className='tags'>
      <h2 style ={{backgroundColor: props.tagColor1}}>{props.tag1} </h2>
      <h2 style ={{backgroundColor: props.tagColor2}}>{props.tag2}</h2>
      <h2 style ={{backgroundColor: props.tagColor3}}>{props.tag3}</h2>

    </div>
    </div>

    <div className='bottom'>
     <h2>Explore Now</h2>
          <button>
       <MoveRight />
    </button>
    </div>
</div>
    </div>
  )
}

export default Card