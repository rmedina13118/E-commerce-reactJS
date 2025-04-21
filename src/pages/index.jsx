import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../context/ProductContext";
import videoHero from "../assets/videos/video_hero_store.mp4";
import ItemList from "../components/itemList";

const Home = () => {
  const navigate = useNavigate();
  const { products } = useContext(ProductsContext); // Obtén los productos desde el contexto

  const goToShop = () => {
    setTimeout(() => {
      navigate("/shop");
    });
  };

  // Limitar productos destacados (por ejemplo, 4 productos)
  const featuredProducts = products.slice(0, 4);

  return (
    <main className="bg-black">
      {/* Hero Section */}
      <div className="relative hero-store h-[60vh] w-full">
        <video
          className="video-hero absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src={videoHero} type="video/mp4" />
          Tu navegador no soporta este video.
        </video>
        <div className="overlay absolute top-0 left-0 w-full h-full bg-black/50"></div>
        <div className="content-hero absolute top-0 left-0 w-full h-full flex gap-8 flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Siéntete en casa comprando en{" "}
            <span className="text-[#ffb700]">Musical House</span>
          </h1>
        </div>
      </div>

      {/* Paragraph Section */}
      <div className="paragraph-store py-12 px-6 text-left flex flex-col justify-center items-center gap-8">
        <p className="text-lg md:text-xl text-white">
          En Musical House, donde cada nota encuentra su lugar y cada músico su
          inspiración. Descubre un universo de instrumentos, accesorios y equipo
          diseñado para dar vida a tu pasión por la música. Aquí no solo
          vendemos productos,{" "}
          <span className="font-semibold text-[#ffb700]">
            ¡creamos experiencias que resuenan contigo!
          </span>
        </p>
      </div>

      {/* Product Grid Section */}
      <section className="py-12 px-6 flex flex-col justify-center items-center gap-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#ffb700]">
          Nuestros Productos Destacados
        </h2>
        <ItemList products={featuredProducts} />
        <button
          className="w-fit bg-[#ffb700] text-black/80 text-[20px] font-semibold px-10 py-2 rounded-[40px] hover:bg-[#ffb700]/80 cursor-pointer transition duration-300 ease-in-out"
          onClick={goToShop}
        >
          Ir a la tienda
        </button>
      </section>
    </main>
  );
};

export default Home;
