import React from 'react'
import { Link } from 'react-router-dom'

const ItemDetailContainer = ({ product }) => {
  if (!product) {
    return <div>Cargando...</div>
  }
  return (
    <div>
      <img className='w-full object-contain ' src={product.img} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <p>{product.stock} Unidad(es) disponibles</p>
      <p>{product.category}</p>
      {/* <Link to={`/shop/${product.name}`}>Ver producto</Link> */}
    </div>
  )
}

export default ItemDetailContainer
