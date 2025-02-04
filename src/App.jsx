import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

function App () {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<h1>Home</h1>} />
          <Route path='/products' element={<h1>Productos</h1>} />
          <Route path='/' element={<h1>Contact</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
