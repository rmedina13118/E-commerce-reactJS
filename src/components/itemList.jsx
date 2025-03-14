import React from 'react'
import ItemDetailContainer from './itemDetailContainer'

const ItemList = ({ products = [] }) => {
  return (
    <div>
      {products.map(products => (
        <ItemDetailContainer products={products} />
      ))}
      {console.log('esto es: ' + products)}
    </div>
  )
}

export default ItemList
