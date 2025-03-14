import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/firebaseConfig'
import ItemListContainer from '../../components/itemListContainer'

const Products = () => {
  return (
    <div className=''>
      <ItemListContainer />
    </div>
  )
}
export default Products
