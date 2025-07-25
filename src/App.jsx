import { Outlet } from 'react-router-dom'
import Nav from './Components/Nav'
import { useState } from 'react'
import './index.css'
import Container from './Components/Container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Container>
      <Nav />
      <Outlet />
    </Container>
    </>
  )
}

export default App
