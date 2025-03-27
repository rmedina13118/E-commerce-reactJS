import React from 'react'
import ItemDetailContainer from './itemDetailContainer'

const ItemList = ({ products = [] }) => {
  console.log('📌 ItemList recbió los siguientes productos: ', products);

  return (
    <div>
      <ul className='grid grid-cols-2 md:grid-cols-3 md:gap-8 gap-4'>
        {products.map(product => (
          <li>
            <ItemDetailContainer key={product.id} product={product} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ItemList
