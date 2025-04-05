import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import iconCart from "../assets/cartIcon.svg";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import SideCart from "./sideCart";

function Navbar() {
  const { cartQty } = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <>
      <nav className="flex justify-between px-20 items-center max-w-[100vw] bg-[#ffb700] text-black font-bold text-2xl ">
        <img src={Logo} width={100} height={100} className="w-20" />
        <ul className="flex flex-row gap-8">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/shop"}>Productos</NavLink>
          </li>
          <li>
            <NavLink to={"/contacto"}>Contacto</NavLink>
          </li>
          <li>
            <button onClick={openCart} className="relative">
              <div>
                <img className="cursor-pointer" src={iconCart} />
                {cartQty > 0 && (
                  <span className="absolute bg-[#000] text-[#ffb700] rounded-full w-6 h-6 flex justify-center items-center text-sm font-bold top-[-10px] right-[-10px]">
                    {cartQty}
                  </span>
                )}
              </div>
            </button>
          </li>
        </ul>
      </nav>
      {isCartOpen && <SideCart CloseCart={closeCart} />}
    </>
  );
}

export default Navbar;
