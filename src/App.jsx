import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import { ProductsProvider } from './context/ProductContext'
import Products from './pages/shop'

function App () {

  return (
    <>
      <ProductsProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<h1>Home</h1>} />
            <Route path='/shop' element={<Products />} />
            <Route path='/contacto' element={<h1>Contacto</h1>} />
          </Routes>
        </BrowserRouter>
      </ProductsProvider>
    </>
  )
}

export default App
