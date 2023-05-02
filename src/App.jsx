// import './App.css'
import { Estructura } from './components/Estructura'
import { Navbar } from './components/Navbar'
import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='L1'>
        <div>
           <Navbar/>
        </div>
        
        <div>
         <Estructura/>
        </div> 
      </div>
      
    </>
  )
}

export default App
