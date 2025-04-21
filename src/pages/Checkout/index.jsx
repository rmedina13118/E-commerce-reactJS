import { React, useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "../../components/CartItem";
import { CartContext } from "../../context/CartContext";
import { saveOrder } from "../../services/orderService";

const Checkout = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const goToShop = () => {
    setTimeout(() => {
      navigate("/shop");
    }, 350); //
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const userData = {
      name: formData.get("name"),
      email: formData.get("email"),
      address: formData.get("address"),
      city: formData.get("city"),
      zip: formData.get("zip"),
      payment: {
        cardNumber: formData.get("cardNumber"),
        expiryDate: formData.get("expiryDate"),
        cvv: formData.get("cvv"),
      },
    };

    const total = cart.reduce((acc, item) => {
      const cleanPrice =
        typeof item.price === "string"
          ? Number(item.price.replace(/[^\d.-]+/g, ""))
          : item.price;

      const quantity = item.qty ?? item.quantity ?? 1;
      return acc + cleanPrice * quantity;
    }, 0);

    try {
      const orderId = await saveOrder(userData, cart, total);
      alert(`¡Gracias por tu compra! Tu número de pedido es: ${orderId}`);
      clearCart();
      navigate(`/summary-order`, { state: { orderId, userData, total } });
    } catch (error) {
      alert("Hubo un error al procesar tu pedido. Intenta de nuevo.");
      console.error(error);
    }
  };

  return (
    <div>
      <h1 className="text-[#ffb700] py-14 px-20 text-left font-semibold text-4xl text-shadow-neumorphic">
        Checkout
      </h1>
      {cart.length === 0 ? (
        // Mostrar mensaje de carrito vacío en toda la página
        <div className="flex flex-col items-center justify-center">
          <p className="text-center text-white text-[24px] mb-6">
            Tu carrito está vacío
          </p>
          <button
            className="bg-[#ffb700] text-black/80 text-[20px] font-semibold px-10 py-2 rounded-[40px] hover:bg-[#ffb700]/80 cursor-pointer transition duration-300 ease-in-out"
            onClick={goToShop}
          >
            Ir a la tienda
          </button>
        </div>
      ) : (
        // Mostrar formulario y resumen de compra si el carrito tiene productos
        <div className="flex flex-row justify-center mx-auto gap-8 w-[95%]">
          <div className="w-[50%]">
            <form
              onSubmit={handleSubmit}
              className="space-y-4 bg-white/40 backdrop-blur-3xl p-8 mb-8 rounded-4xl border"
            >
              <h2 className="text-white text-2xl uppercase font-semibold mb-4">
                Información del Cliente
              </h2>
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="text-black font-medium"
                ></label>
                <input
                  placeholder="Nombre Completo"
                  type="text"
                  id="name"
                  name="name"
                  className="p-2 text-black bg-white/70 rounded-2xl focus:outline-none border-black border placeholder:text-black/50 placeholder:font-medium"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-black font-medium"
                ></label>
                <input
                  placeholder="Correo Electrónico"
                  type="email"
                  id="email"
                  name="email"
                  className="p-2 text-black bg-white/70 rounded-2xl focus:outline-none border-black border placeholder:text-black/50 placeholder:font-medium "
                  required
                />
              </div>
              <h2 className="text-white text-2xl uppercase font-semibold mb-4">
                Dirección de Envío
              </h2>
              <div className="flex flex-col">
                <label
                  htmlFor="address"
                  className="text-black font-medium"
                ></label>
                <input
                  placeholder="Dirección"
                  type="text"
                  id="address"
                  name="address"
                  className="p-2 text-black bg-white/70 rounded-2xl focus:outline-none border-black border placeholder:text-black/50 placeholder:font-medium"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="city"
                  className="text-black font-medium"
                ></label>
                <input
                  placeholder="Ciudad"
                  type="text"
                  id="city"
                  name="city"
                  className="p-2 text-black bg-white/70 rounded-2xl focus:outline-none border-black border placeholder:text-black/50 placeholder:font-medium"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="zip" className="text-black font-medium"></label>
                <input
                  placeholder="Código Postal"
                  type="text"
                  id="zip"
                  name="zip"
                  className="p-2 text-black bg-white/70 rounded-2xl focus:outline-none border-black border placeholder:text-black/50 placeholder:font-medium"
                  required
                />
              </div>
              <h2 className="text-white text-2xl uppercase font-semibold mb-4">
                Método de Pago
              </h2>
              <div className="flex flex-col">
                <label
                  htmlFor="cardNumber"
                  className="text-black font-medium"
                ></label>
                <input
                  placeholder="Número de Tarjeta"
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  className="p-2 text-black bg-white/70 rounded-2xl focus:outline-none border-black border placeholder:text-black/50 placeholder:font-medium"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="expiryDate"
                  className="text-black font-medium"
                ></label>
                <input
                  type="text"
                  id="expiryDate"
                  name="expiryDate"
                  placeholder="MM/AA"
                  className="p-2 text-black bg-white/70 rounded-2xl focus:outline-none border-black border placeholder:text-black/50 placeholder:font-medium"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="cvv" className="text-black font-medium"></label>
                <input
                  placeholder="CVV"
                  type="text"
                  id="cvv"
                  name="cvv"
                  className="p-2 text-black bg-white/70 rounded-2xl focus:outline-none border-black border placeholder:text-black/50 placeholder:font-medium"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-[#ffb700] text-black/80 text-[20px] font-semibold px-10 py-2 rounded-[40px] hover:bg-[#ffb700]/80 cursor-pointer transition duration-300 ease-in-out"
              >
                Finalizar Compra
              </button>
            </form>
          </div>
          <div className="bg-white/40 p-4 backdrop:blur-3xl rounded-4xl w-[45%] border h-fit sticky top-10">
            <div className="flex-1 overflow-y-auto">
              <h2 className="text-white text-2xl uppercase font-semibold mb-4">
                Resumen de compra
              </h2>
              {cart.map((item) => (
                <div
                  key={item.id}
                  item={item}
                  className="bg-white/60 flex flex-col rounded-2xl backdrop:blur-lg border-1 p-3 m-3"
                >
                  <CartItem
                    key={item.id}
                    item={item}
                    removeFromCart={removeFromCart}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
