import React, { useEffect, useContext, useState } from "react"
import { useParams } from "react-router-dom"
import { ProductsContext } from "../../context/ProductContext"
import ItemDetail from "../../components/itemDetail"

const ProductPage = () => {
    const { productId } = useParams()

    const { products, loading } = useContext(ProductsContext)
    const [product, setProduct] = useState(null)
    const [error, setError] = useState(null)
    const [showSpinner, setShowSpinner] = useState(true)

    useEffect(() => {
        if (!loading) {
            const timer = setTimeout(() =>
                setShowSpinner(false), 200)
            return () => clearTimeout(timer)
        }
    }, [loading])

    useEffect(() => {
        if (!loading && products.length > 0) {
            
            const foundProduct = products.find((product) => product.id === productId)
            
            if (foundProduct) {
                setProduct(foundProduct)
                setError(null) 
            } else {
                setError("Producto no encontrado")
                setProduct(null) 
            }
        }
    }, [productId, products, loading])

    return (
        <div className="py-10 my-20 px-20">
            {showSpinner ? (
                <div className="flex justify-center items-center h-[300px] ">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#ffb700]"></div>
                </div>
            ) : (
                <>
                    {error ? (
                        <h1 className="text-red-500 text-center text-3xl font-bold">{error}</h1>
                    ) : (
                        <ItemDetail product={product} />
                    )}
                </>
            )}
        </div>
    )
}

export default ProductPage
