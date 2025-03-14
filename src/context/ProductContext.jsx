import { createContext, useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/firebaseConfig'

export const ProductsContext = createContext()

export const ProductsProvider = ({ children }) => {
  console.log('📌 ProductProvider en ejecución')

  // Estado para almacenar los productos y categorías
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true) // ✅ Estado de carga

  // ✅ useEffect se ejecuta solo una vez al montar el componente
  useEffect(() => {
    console.log('📌 useEffect se ejecutó en ProductContext')

    const fetchProducts = async () => {
      try {
        console.log('📌 Intentando obtener productos desde Firebase...')
        const querySnapshot = await getDocs(collection(db, 'products'))

        if (querySnapshot.empty) {
          console.log('❌ No hay productos en Firebase')
          setLoading(false)
          return
        }

        const productsArray = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))

        console.log('📌 Productos obtenidos:', productsArray)
        setProducts(productsArray)

        // Extraer categorías únicas
        const uniqueCategories = [
          'Todos los productos',
          ...new Set(productsArray.map(product => product.category))
        ]
        setCategories(uniqueCategories)
      } catch (error) {
        console.error('❌ Error obteniendo productos:', error)
      } finally {
        setLoading(false) // ✅ Marcar la carga como terminada
      }
    }

    fetchProducts()
  }, []) // ✅ Se ejecuta solo al montar el componente

  return (
    <ProductsContext.Provider value={{ products, categories, loading }}>
      {children}
    </ProductsContext.Provider>
  )
}
