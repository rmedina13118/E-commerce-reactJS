import { useContext, useState, useEffect } from 'react'
import { ProductsContext } from '../context/ProductContext'
import '../App.css'
import ItemList from './itemList'
const ItemListContainer = () => {
  const { products, categories, loading } = useContext(ProductsContext)
  const [selectedCategory, setselectedCategory] = useState(
    'Todos los productos'
  )
  const [showSpinner, setShowSpinner] = useState(true)

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() =>
        setShowSpinner(false), 1000)
      return () => clearTimeout(timer)
    }
  }, [loading])

  const handleCategoryChange = category => {
    setShowSpinner(true)
    setselectedCategory(category)
    setTimeout(() => setShowSpinner(false), 500)
  }

  const filteredProducts =
    selectedCategory === 'Todos los productos'
      ? products
      : products.filter(product => product.category === selectedCategory)

  return (
    <div className='py-10 px-20'>
      <h1 className='text-[#ffb700] [text-shadow:inset_3px_2px_3px_rgba(255,255,255,0.2)] text-4xl text-center font-bold'>
        Nuestros Productos
      </h1>
      {showSpinner ? (
        <div className='flex justify-center items-center h-[500px]'>
          <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#ffb700]'></div>
        </div>
      ) : (
        <>
          <div className=' py-12 flex flex-col gap-8'>
            <h2 className='text-[#ffb700] [text-shadow:inset_3px_2px_3px_rgba(255,255,255,0.2)] text-2xl text-left font-bold'>
              Elige la Categoria que desees:
            </h2>
            <ul className='text-left flex flex-row gap-4'>
              {categories.map(category => (
                <li key={category}>
                  <button
                    className='bg-[#ffb700] text-black p-3 text-xl cursor-pointer rounded-2xl font-bold neumorphism'
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <ItemList products={filteredProducts} />
        </>
      )}
    </div>
  )
}

export default ItemListContainer
