import React from 'react'
import "./ItemDate.css"

function ItemDate(props) {
//   const day=20
//   const month="June"
//   const year=2026

  return (
    <div className='mfg-date'>
        <span>{props.day}</span>
        <span>{props.month}</span>
        <span>{props.year}</span>
    </div>
  )
}

export default ItemDate