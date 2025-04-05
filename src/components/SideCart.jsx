import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import closeIcon from "../assets/close.svg";

import CartItem from "./CartItem";

const SideCart = ({ CloseCart }) => {
  const { cart, removeFromCart, cartTotal } = useContext(CartContext);
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(CloseCart, 300);
  };

  const goToShop = () => {
    handleClose();
    setTimeout(() => {
      navigate("/shop");
    }, 200);
  };

  return (
    <div
      className={`fixed inset-0 bg-black/50 bg-opacity-30 backdrop-blur-xl shadow-lg z-50 flex justify-end transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      <div
        className={`w-3/3 md:w-2/5 bg-white/60 h-full p-6 flex flex-col transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between flex-row-reverse items-baseline mb-4">
          <button
            onClick={handleClose}
            className="text-xl text-black font-bold mb-4"
          >
            <img
              src={closeIcon}
              alt="Close"
              className="w-[35px] cursor-pointer transform hover:scale-110"
            />
          </button>
          <h2 className="text-2xl font-bold uppercase mb-6 text-black">
            Tu Carrito
          </h2>
        </div>
        <div className="flex-1 overflow-y-auto">
          {cart.length === 0 ? (
            <>
              <p className="text-center text-black text-[18px] mb-4">
                Tu carrito está vacío
              </p>
              <button
                className="bg-[#ffb700] text-black/80 text-[20px] font-semibold  px-10 py-2 rounded-[40px]  hover:bg-[#ffb700]/80 cursor-pointer transition duration-300 ease-in-out"
                onClick={goToShop}
              >
                Ir a la tienda
              </button>
            </>
          ) : (
            cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                removeFromCart={removeFromCart}
              />
            ))
          )}
        </div>
        {cart.length > 0 && (
          <div className="flex justify-between mt-4 items-center relative">
            <div className="flex flex-col gap-2 border-black/50 border-2 rounded-lg py-5 px-3">
              <p className="absolute -top-[15px] left-10 bg-[#a8a5a5] rounded-xl px-2  -translate-x-1/3 px text-black text-2xl font-bold uppercase">
                Total
              </p>
              <p className="text-4xl font-bold text-black">{cartTotal}</p>
            </div>
            <button className="bg-[#ffb700] text-black/80 text-2xl font-semibold  px-10 py-2 rounded-[40px]  hover:bg-[#ffb700]/80 cursor-pointer transition duration-300 ease-in-out">
              Ir a pagar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideCart;
