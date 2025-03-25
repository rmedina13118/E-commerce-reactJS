import React from 'react'
import { Link } from 'react-router-dom'

const ItemDetailContainer = ({ product }) => {
  if (!product) {
    return <div>Cargando...</div>
  }
  return (
    <div className='rounded-lg !bg-white/20 h-[560px] border border-white/30 !backdrop-blur-lg overflow-hidden shadow-lg'>
      <div className='h-96 bg-white overflow-hidden shadow-lg'>
        <img className='object-contain' src={product.img} alt={product.name} />
      </div>
      <div className='p-4'>
        <h2>{product.name}</h2>
        <p>{product.price}</p>
        <p>{product.stock} Unidad(es) disponibles</p>
        <p>{product.category}</p>
        <Link to={`/shop/${product.name.replace(/\s+/g, "-").replace(/-+/g, "-")}`}>Ver producto</Link>
      </div>
    </div>
  )
}

export default ItemDetailContainer
