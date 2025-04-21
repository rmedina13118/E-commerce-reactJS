import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ProductsProvider } from "./context/ProductContext";
import Products from "./pages/shop";
import ProductPage from "./pages/shop/productPage";
import Checkout from "./pages/Checkout";
import Summary from "./pages/Summary";
import { uploadProducts } from "./services/uploadProductsService";
import Home from "./pages";

function App() {
  // uploadProducts()

  return (
    <>
      <ProductsProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Products />} />
            <Route path="/contacto" element={<h1>Contacto</h1>} />
            <Route path="/shop/:productId" element={<ProductPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/summary-order" element={<Summary />} />
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </BrowserRouter>
      </ProductsProvider>
    </>
  );
}

export default App;
