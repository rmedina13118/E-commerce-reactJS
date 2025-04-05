import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../context/ProductContext";

const ItemDetailContainer = ({ product }) => {
  const { formatPrice } = useContext(ProductsContext);
  if (!product) {
    return <div>Cargando...</div>;
  }

  const productUrl = `/shop/${product.id}`;
  return (
    <div className="rounded-lg !bg-white/20 h-[620px] border border-white/30 !backdrop-blur-lg overflow-hidden shadow-lg">
      <div className="h-96 bg-white overflow-hidden shadow-lg">
        <img className="object-contain" src={product.img} alt={product.name} />
      </div>
      <div className="p-4 flex flex-col gap-8 justify-center items-center">
        <div className="flex items-center flex-col gap-2">
          <h2 className="text-[20px] font-medium">{product.name}</h2>
          <p className="text-[22px] font-semibold">
            $ {formatPrice(product.price)}
          </p>
          <p className="italic">{product.stock} Unidad(es) disponibles</p>
          <p className="uppercase">{product.category}</p>
        </div>
        <Link
          className="bg-[#ffb700] text-black p-[5px_10px] w-1/2 rounded-4xl text-[18px] font-semibold"
          to={productUrl}
        >
          Ver producto
        </Link>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
