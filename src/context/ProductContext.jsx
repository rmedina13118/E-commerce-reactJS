import { createContext, useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  console.log("📌 ProductProvider en ejecución");

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const formatPrice = (amount) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  useEffect(() => {
    console.log("📌 useEffect se ejecutó en ProductContext");

    const unsubscribe = onSnapshot(collection(db, "products"), (snapshot) => {
      if (snapshot.empty) {
        console.log("❌ No hay productos en Firebase");
        setProducts([]);
        setLoading(false);
        return;
      }

      const productsArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      console.log("📌 Productos actualizados:", productsArray);
      setProducts(productsArray);

      // Extraer categorías únicas
      const uniqueCategories = [
        "Todos los productos",
        ...new Set(productsArray.map((product) => product.category)),
      ];
      setCategories(uniqueCategories);
      setLoading(false);
    });

    return () => unsubscribe(); // Limpia el listener cuando se desmonta el componente
  }, []);

  console.log("Estado de:", { products, categories, loading, formatPrice });

  return (
    <ProductsContext.Provider value={{ products, categories, loading, formatPrice }}>
      {children}
    </ProductsContext.Provider>
  );
};
