import { useState } from 'react'
import './App.css'
import Item from './Components/Item'
import me from './assets/me.jpg'
import sofw from './assets/softw.jpg'
import frontend from './assets/frontend.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Item name="Software Engineer" desc="level1" image={me} style={{"border-radius":"10px"}}/>
      <Item name="Web Developer" desc="L-2" image={sofw} style={{"border-radius":"10px"}}/>
      <Item name="Frontend Engineer" desc="L-1" image={frontend} style={{"border-radius":"10px"}}/>
    </div>
  )
}

export default App
