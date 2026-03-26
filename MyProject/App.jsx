import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Item from './Components/Item'
import ItemDate from './Components/ItemDate'
import Card from "./Components/Card"

function App() {
  const [count, setCount] = useState(0)
  const name="airel"

  const itemarray=[
    {
      name:"surf01",
      day:"03",
      month:"april",
      year:"2027"
    }
    
  ]

  return (
    <>
      <Card>
      <Item name={name}></Item>
      <p>Item kai props ko kaise print kr skte h</p>
      <Item name="surf_excel"></Item>
      <ItemDate day="08" month="jan" year="2020"></ItemDate>
      <Item name="tide"></Item>
      <ItemDate day="02" month="feb" year="2000"></ItemDate>
      <Item name="nirma"></Item>
      <ItemDate day="18" month="march" year="2024"></ItemDate>
      <Item name={itemarray[0].name}></Item>
      <ItemDate day={itemarray[0].day} month={itemarray[0].month} year={itemarray[0].year}></ItemDate>
      <div>App</div>
      </Card>
      
    </>
  )
}

export default App
