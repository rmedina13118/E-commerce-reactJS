import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import closeIcon from "../../assets/close.svg";
import { CartContext } from "../../context/CartContext";

import CartItem from "../CartItem";

export const SideCart = ({ CloseCart }) => {
  const { cart, removeFromCart, cartTotal } = useContext(CartContext);
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  // Abrimos el carrito con una pequeña animación
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10);

    document.body.style.overflow = "hidden";

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto"; // Restauramos el scroll
    };
  }, []);

  // Función para cerrar el carrito con animación y desmontarlo
  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      document.body.style.overflow = "auto"; // Restauramos scroll antes de desmontar
      CloseCart(); // Esta función desmonta el componente desde el padre
    }, 300); // Esperamos a que termine la animación de cierre
  };

  // Ir a la tienda después de cerrar el carrito
  const goToShop = () => {
    handleClose();
    setTimeout(() => {
      navigate("/shop");
    }, 350); // Esperamos a que cierre completamente antes de navegar
  };

  return (
    <div
      className={`fixed inset-0 bg-black/50 backdrop-blur-xl shadow-lg z-50 flex justify-end transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={handleClose}
    >
      <div
        className={`w-3/3 md:w-2/5 bg-white/80 h-full p-6 flex flex-col transform transition-transform duration-300 ease-in-out ${
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
                className="bg-[#ffb700] text-black/80 text-[20px] font-semibold px-10 py-2 rounded-[40px] hover:bg-[#ffb700]/80 cursor-pointer transition duration-300 ease-in-out"
                onClick={goToShop}
              >
                Ir a la tienda
              </button>
            </>
          ) : (
            cart.map((item) => (
              <div className="border-b">
                <CartItem
                  key={item.id}
                  item={item}
                  removeFromCart={removeFromCart}
                />
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="flex justify-between mt-4 items-center relative">
            <div className="flex flex-col gap-2 border-black/50 border-2 rounded-lg py-3 px-3">
              <p className=" px-3  text-black text-2xl font-bold uppercase rounded-md ">
                Total
              </p>
              <p className="text-4xl font-bold text-black">{cartTotal}</p>
            </div>
            <NavLink to="/checkout">
              <button
                className="bg-[#ffb700] text-black/80 text-2xl font-semibold px-10 py-2 rounded-[40px] hover:bg-[#ffb700]/80 cursor-pointer transition duration-300 ease-in-out"
                onClick={handleClose}
              >
                Ir a pagar
              </button>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};
