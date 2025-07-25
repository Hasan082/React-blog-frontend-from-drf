import { Outlet } from 'react-router'
import Nav from './components/shared/Nav'
import Container from './components/shared/Container'

const App = () => {


  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
}

export default App
