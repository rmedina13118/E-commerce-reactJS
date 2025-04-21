import React from "react";
import { useNavigate } from "react-router-dom";

export const NoFound = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold text-[#ffb700] mb-4">404</h1>
      <p className="text-xl text-white mb-6">
        Lo sentimos, la página que buscas no existe.
      </p>
      <button
        onClick={goToHome}
        className="bg-[#ffb700] cursor-pointer text-black/80 text-lg font-semibold px-6 py-3 rounded-full hover:bg-[#ffb700]/80 transition duration-300 ease-in-out"
      >
        Volver al inicio
      </button>
    </div>
  );
};
