import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    // Usa 'min-h-screen' para garantir que a seção ocupe no mínimo a altura total da tela.
    // O 'pt-[60px]' compensa a altura da Navbar.
    <section className="min-h-screen pt-[130px] flex flex-col md:flex-row items-center justify-center gap-8 px-4" id="home">
      <div className="flex-1 flex justify-center md:justify-start max-w-md">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Conectando Seu Caminho Para O Futuro
          </h1>
          <p className="text-justify mb-4">
            Soluções de Redes Empresariais Inovadoras para o Sucesso Sustentável
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-150 ease-in-out">
            Contato
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-center md:max-w-md">
        <Image
          src="/images/page1full.png"
          alt="image"
          width={749}
          height={507}
          objectFit="cover"
          // Essencial para garantir que a imagem seja responsiva e se ajuste dentro do seu container.
          layout="intrinsic"
        />
      </div>
    </section>
  );
};

export default Home;
