import React, { useState, useEffect, useContext } from "react";
import iconDelete from "../assets/delete.svg";
import { CartContext } from "../context/CartContext.jsx";

const CartItem = ({ item, removeFromCart }) => {
  const { formatPrice, updateQty, cart } = useContext(CartContext);
  const { id, title, name, price, qty, img, stock } = item;
  const displayName = title || name;
  const [warning, setWarning] = useState("");

  const handleIncrease = () => {
    if (qty < stock) {
      updateQty(id, qty + 1);
    } else {
      setWarning("Oops! No hay más unidades disponibles.");
      setTimeout(() => setWarning(""), 2000);
    }
  };

  const handleDecrease = () => {
    if (qty > 1) {
      updateQty(id, qty - 1);
    }
  };

  return (
    <div className="flex flex-col gap-2 py-3">
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-row items-center gap-4">
          <div className="flex-shrink-0 w-32 h-auto">
            {img ? (
              <img
                src={img}
                alt={title}
                className="w-full h-full object-cover rounded-md"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 rounded"></div>
            )}
          </div>
          <div className="px-3 gap-2">
            <h3 className="font-semibold text-black text-left text-[20px]">
              {displayName}
            </h3>
            <p className="text-left italic font-medium text-black text-md">
              {qty} Unidad(es) <br />
              <span className="text-[18px] font-semibold not-italic">
                {formatPrice(price * qty)}
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-end gap-2">
          <div className="flex flex-row items-center h-[40px] rounded-md overflow-hidden text-black">
            <button
              className="bg-[#ffb700] hover:bg-[#ffb700]/80 cursor-pointer h-full px-3 font-semibold text-xl"
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
              className="bg-[#ffb700] hover:bg-[#ffb700]/80 cursor-pointer h-full px-3 font-semibold text-xl"
              onClick={handleIncrease}
            >
              +
            </button>
          </div>
          <button
            className="cursor-delete p-2 rounded-md"
            onClick={() => removeFromCart(id)}
          >
            <img className="w-6" src={iconDelete} alt="delete" />
          </button>
        </div>
      </div>

      {warning && (
        <p className="text-red-600 font-medium text-sm ml-36">{warning}</p>
      )}
    </div>
  );
};

export default CartItem;
