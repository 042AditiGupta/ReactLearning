import React from 'react'
import './Item.css'

function Item(props) {
  return (
    <div>
        <p className='surf'>{props.name}</p>
        {props.children}
    </div>
  )
}

export default Item