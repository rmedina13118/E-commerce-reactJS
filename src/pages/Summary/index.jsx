import { React, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ProductsContext } from "../../context/ProductContext";
const Summary = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Obtener datos de la compra desde el estado de navegación
  const { orderId, userData, total } = location.state || {};
  const { formatPrice } = useContext(ProductsContext);

  const goToShop = () => {
    navigate("/shop");
  };

  if (!orderId) {
    return (
      <div className=" mt-20 flex flex-col items-center justify-center h-[70vh]">
        <p className="text-center text-black text-[24px] mb-6">
          No se encontraron detalles de la compra.
        </p>
        <button
          className="bg-[#ffb700] text-black/80 text-[20px] font-semibold px-10 py-2 rounded-[40px] hover:bg-[#ffb700]/80 cursor-pointer transition duration-300 ease-in-out"
          onClick={goToShop}
        >
          Ir a la tienda
        </button>
      </div>
    );
  }

  return (
    <div className="mt-32 flex flex-col gap-5 items-center justify-center w-fit p-6 bg-white/20 backdrop-blur-3xl mx-auto  rounded-4xl border self-center">
      <h1 className="text-[#ffb700] text-4xl font-semibold mb-6">
        ¡Gracias por tu compra!
      </h1>
      <table className="table-auto border-collapse border w-full text-left rounded-xl overflow-hidden">
        <thead>
          <tr>
            <th className="border uppercase bg-white/70 px-4 py-2 text-black font-semibold">
              Detalle
            </th>
            <th className="border uppercase bg-white/70 px-4 py-2 text-black font-semibold">
              Información
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border bg-white/70 px-4 py-2 text-black">
              N° de ref.
            </td>
            <td className="border bg-white/70 px-4 py-2 text-black font-bold">
              {orderId}
            </td>
          </tr>
          <tr>
            <td className="border bg-white/70 px-4 py-2 text-black">
              Total Pagado
            </td>
            <td className="border bg-white/70 px-4 py-2 text-black font-bold">
            {formatPrice(total)}
            </td>
          </tr>
          <tr>
            <td className="border bg-white/70 px-4 py-2 text-black">
              Correo Electrónico
            </td>
            <td className="border bg-white/70 px-4 py-2 text-black font-bold">
              {userData?.email}
            </td>
          </tr>
        </tbody>
      </table>
      <button
        className="bg-[#ffb700] text-black/80 text-[20px] font-semibold px-10 py-2 rounded-[40px] hover:bg-[#ffb700]/80 cursor-pointer transition duration-300 ease-in-out"
        onClick={goToShop}
      >
        Volver a la tienda
      </button>
    </div>
  );
};

export default Summary;
