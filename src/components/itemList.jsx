import React from 'react'
import ItemDetailContainer from './itemDetailContainer'

const ItemList = ({ products = [] }) => {
  console.log('📌 ItemList reciio los siguientes porductos: ', products);

  return (
    <div>
      <ul className='grid grid-cols-2 md:grid-cols-3 gap-4'>
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
