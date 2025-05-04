import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CountdownWidget } from 'widget-hub/widgets/CountdownWidget';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Count Down Widget</h1> 
     <CountdownWidget initialDuration={300} onComplete={() => alert('Countdown finished!')} />
    </>
  )
}

export default App;
