import { useState, useEffect } from 'react'
import { db } from './firebase/firebaseConfig'
import { collection, getDocs, query } from 'firebase/firestore'
import { use } from 'react'

const itemListContainer = () => {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function fetchData () {
      const products = await getProducts()
      setProducts(products)

      const uniqueCategories = getUniqueCategories(products)
      setCategories(uniqueCategories)
    }

    fetchData()
  }, [])

  async function getProducts () {
    try {
      const productsCollection = collection(db, 'products')
      querySnapshot = await getDocs(productsCollection)

      const products = querySnapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        }
      })
    } catch (error) {}
  }

  //   const [selectedCategory, seSelectedCategory] = useState(null)

  //   const filteredProducts = selectedCategory
  //     ? products.filter(product => product.category === selectedCategory)
  //     : products
  return (
    <div>
      <h1>Productos</h1>
      <div className=''>
        <h2>Nuestras Categorias</h2>
        <ul></ul>
      </div>
    </div>
  )
}

export default itemListContainer
