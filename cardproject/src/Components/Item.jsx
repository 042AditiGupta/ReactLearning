import React from 'react'
import "./Item.css"

const Item = (props) => {
  return (
    <div className='user-container' style={props.style}>
      <p id='user-name'>{props.name}</p>
      <img id='user-img' src={props.image} alt=''></img>
      <p id='user-desc'>{props.desc}</p>
    </div>
  )
}

export default Item