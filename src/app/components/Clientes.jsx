import React from "react";
import Image from "next/image";

const Clientes = () => {
  return (
    <section className="flex container justify-center max-w-screen-2xl h-dvh items-center bg-blue-sobrenos footer-bg mx-auto" id="clientes">
      <div className="grid grid-cols-8 grid-row-8 gap-5">
          <div className="row-start-2 col-span-8 items-center">
            <h1 className="flex justify-center text-blue-ti text-6xl font-extrabold">
                Clientes
            </h1>
          </div>
          <div className="row-start-3 col-start-2 flex justify-center items-center relative">
                <Image
                src="/images/logo-mercurio.png"
                alt="image"
                width={290}
                height={290}
                />
                <h1 className=" text-2xl ml-10 bg-blue-ti text-white font-semibold rounded-lg row-start-3 col-start-3 col-span-6 flex">Instalação cabeamento estruturado cat6 em dois pavimentos. Montagem de dois racks de rede totalizando 220 pontos de rede. Certificação e identificação dos pontos de rede. Configuração de vlans nas switches.</h1>
          </div>
          <div className="row-start-4 col-span-8 w-full items-center">
            <h1 className="flex justify-center text-blue-ti text-6xl font-extrabold">
                Clientes
            </h1>
          </div>
          <div className="row-start-5 col-span-8 w-full items-center">
            <h1 className="flex justify-center text-blue-ti text-6xl font-extrabold">
                Clientes
            </h1>
          </div>
      </div>
    </section>
  );
};

export default Clientes;