import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <section className="flex justify-center max-w-screen-2xl max-w-[1920px] max-h-[1080px] h-dvh" id="home" >
      <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 items-center flex-wrap justify-center">
          <div className="aspect-w-3 aspect-h-2 w-full h-auto">
            <h1 className=" text-6xl h-auto font-bold mb-4 font-sans">
              Conectando Seu Caminho Para O Futuro
            </h1>
            <p className="text-justify aspect-w-3 aspect-h-2  w-full h-auto  mb-4">
              Soluções de Redes Empresariais Inovadoras para o Sucesso Sustentável
            </p>
            <button className="bg-blue-ti text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-150 ease-in-out hover:scale-110">
              Contato
            </button>

          </div>
          <div className="flex justify-center aspect-w-3 aspect-h-2  w-full h-auto">
            <Image
              src="/images/page1.png"
              alt="image"
              width={390}
              height={390}
            />
          </div>
      </div>
    </section>
  );
};

export default Home;