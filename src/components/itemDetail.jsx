import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ product }) => {
  const [qty, setQty] = useState(1);
  const { addToCart, cart } = useContext(CartContext);

  if (!product) return null;
  const { img, category, name, price, stock, description, id } = product;
  const [warning, setWarning] = useState("");
  const cartItem = cart.find((item) => item.id === id);
  const cartQty = cartItem?.qty || 0;

  const availableStock = stock - cartQty;

  useEffect(() => {
    if (qty > availableStock) {
      setQty(availableStock > 0 ? availableStock : 1);
    }
  }, [availableStock]);

  const handleIncrease = () => {
    if (qty < availableStock) {
      setQty((prev) => prev + 1);
    } else {
      setWarning("Oops! No hay suficiente stock disponible.");
      setTimeout(() => setWarning(""), 2000);
    }
  };

  const handleDecrease = () => {
    if (qty > 1) {
      setQty((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    if (availableStock > 0) {
      addToCart(product, qty);
      setWarning("");
    }
  };

  return (
    <div className="flex flex-row backdrop-blur-2xl bg-white/20 p-3 mx-auto rounded-3xl gap-8 w-fit justify-center items-center">
      <div className="w-lg">
        <img className="rounded-3xl" src={img} alt={name} />
      </div>
      <div className="flex items-start h-full self-start py-5 flex-col w-lg gap-4">
        <p className="text-2xl">
          Categoría:{" "}
          <span className="text-lg font-medium uppercase">{category}</span>
        </p>
        <h2 className="text-2xl font-semibold">{name}</h2>
        <p className="text-3xl border-2 rounded-[8px] p-8 relative font-medium flex gap-2 flex-col items-start mt-6">
          <span className="absolute bottom-20 bg-[#333] px-2">Precio</span> $
          {price} - IVA Incluido
        </p>
        <div className="flex justify-start flex-row gap-6 w-[70%]">
          <div className="flex flex-row items-center h-[40px] rounded-md overflow-hidden text-black">
            <button
              className="bg-[#ffb700] h-full px-3 font-semibold text-xl"
              onClick={handleDecrease}
            >
              -
            </button>
            <input
              readOnly
              value={qty}
              className="focus:outline-none text-center bg-white h-full w-[40px]"
            />
            <button
              className="bg-[#ffb700] h-full px-3 font-semibold text-xl"
              onClick={handleIncrease}
              disabled={availableStock === 0}
            >
              +
            </button>
          </div>
          <button
            className="bg-[#ffb700] text-black p-[8px_10px] rounded-4xl text-[18px] font-semibold"
            onClick={handleAddToCart}
            disabled={availableStock === 0}
          >
            Agregar al carrito
          </button>
        </div>

        {warning && (
          <p className="text-red-600 font-medium text-md mt-2">{warning}</p>
        )}                                                                    
        <p className="italic text-lg">
          {availableStock > 0
            ? `${availableStock} unidad(es) disponibles`
            : "Sin stock disponible"}
        </p>
        <h4 className="font-medium text-2xl">Descripción:</h4>
        <p className="text-left text-xl w-[90%]">{description}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
