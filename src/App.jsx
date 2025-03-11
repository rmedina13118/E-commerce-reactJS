import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import { uploadProducts } from './uploadProducts'

function App () {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<h1>Home</h1>} />
          <Route path='/products' element={<h1>Productos</h1>} />
          <Route path='/contact' element={<h1>Contacto</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

uploadProducts()

export default App
