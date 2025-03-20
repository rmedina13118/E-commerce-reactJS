import { useContext, useState, useEffect } from 'react'
import { ProductsContext } from '../context/ProductContext'
import '../App.css'
import ItemList from './itemList'
const ItemListContainer = () => {
  const { products, categories, loading } = useContext(ProductsContext)
  const [selectedCategory, setselectedCategory] = useState(
    'Todos los productos'
  )

  console.log("esto es:" ,products )

  const filteredProducts =
    selectedCategory === 'Todos los productos'
      ? products
      : products.filter(product => product.category === selectedCategory)

  return (
    <div className='py-10 px-20'>
      <h1 className='text-[#ffb700] [text-shadow:inset_3px_2px_3px_rgba(255,255,255,0.2)] text-4xl text-center font-bold'>
        Nuestros Productos
      </h1>
      <div className=' py-12 flex flex-col gap-8'>
        <h2 className='text-[#ffb700] [text-shadow:inset_3px_2px_3px_rgba(255,255,255,0.2)] text-2xl text-left font-bold'>
          Elige la Categoria que desees:
        </h2>
        <ul className='text-left flex flex-row gap-4'>
          {categories.map(category => (
            <li key={category}>
              <button
                className='bg-[#ffb700] text-black p-3 text-xl rounded-2xl font-bold neumorphism'
                onClick={() => setselectedCategory(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <ItemList products={filteredProducts} />
    </div>
  )
}

export default ItemListContainer
