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
          <Route path='/categorias' element={<h1>Productos</h1>} />
          <Route path='/contacto' element={<h1>Contacto</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
