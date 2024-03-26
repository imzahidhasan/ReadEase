
import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './component/Navbar/NavBar'

function App() {

  return (
    <>
      <div className='container mx-auto'>
        <NavBar />
        <Outlet />
    </div>
    </>
  )
}

export default App
