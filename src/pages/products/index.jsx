import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/firebaseConfig'

const products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products")) 
        const productsArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        
        setProducts(productsArray)
      } catch (error) {
        console.error("Error obteniendo productos:", error)
      }
    }

    getProducts()
  }, [])}

  return (
    <div>Shop</div>
  )
