import React from "react";
import Image from "next/image";

const Clientes = () => {
  return (
    // Div externa para o background
    <div className="min-h-screen bg-blue-sobrenos footer-bg flex justify-center items-center">
     {/* Envoltório adicional para garantir centralização em telas amplas */}
      <div className="flex justify-center w-full">
        <section className="max-w-6xl w-full px-4 py-10">
          <h1 className="text-blue-ti text-4xl md:text-6xl font-extrabold mb-10 text-center">
            Clientes
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-10 gap-y-20">
            {/* Primeiro Cliente */}
            <div className="flex justify-center items-center lg:col-span-2 lg:order-1">
              <Image
                src="/images/logo-mercurio.png"
                alt="logo mercurio"
                width={290}
                height={290}
                layout="intrinsic"
              />
            </div>
            <div className="flex items-center text-center md:text-left lg:col-span-2 lg:order-2">
              <p className="text-2xl bg-blue-ti text-white font-semibold rounded-lg p-5">
                Instalação cabeamento estruturado cat6 em dois pavimentos. Montagem de dois racks de rede totalizando 220 pontos de rede. Certificação e identificação dos pontos de rede. Configuração de vlans nas switches.
              </p>
            </div>
            
            {/* Segundo Cliente */}
            <div className="flex justify-center items-center lg:col-span-2 lg:order-4">
              <Image
                src="/images/patiolimeira.png"
                alt="patio limeira"
                width={290}
                height={290}
                layout="intrinsic"
              />
            </div>
            <div className="flex items-center text-center md:text-left lg:col-span-2 lg:order-3">
              <p className="text-2xl bg-blue-ti text-white font-semibold rounded-lg p-5">
                Instalação de cabeamento estruturado cat5e na administração do shopping, montagem de dois racks totalizando 64 pontos de rede. Certificação e identificação dos pontos de rede.
              </p>
            </div>
            
            {/* Terceiro Cliente */}
            <div className="flex justify-center items-center lg:col-span-2 lg:order-5">
              <Image
                src="/images/ParkCity.png"
                alt="Park City"
                width={290}
                height={290}
                layout="intrinsic"
              />
            </div>
            <div className="flex items-center text-center md:text-left lg:col-span-2 lg:order-6">
              <p className="text-2xl bg-blue-ti text-white font-semibold rounded-lg p-5">
                Instalação cabeamento estruturado cat6 em dois pavimentos. Montagem de dois racks de rede totalizando 220 pontos de rede. Certificação e identificação dos pontos de rede. Configuração de vlans nas switches.
              </p>
            </div>
            
            {/* Quarto Cliente */}
            <div className="flex justify-center items-center lg:col-span-2 lg:order-8">
              <Image
                src="/images/Sider.png"
                alt="Sider"
                width={290}
                height={290}
                layout="intrinsic"
              />
            </div>
            <div className="flex items-center text-center md:text-left lg:col-span-2 lg:order-7">
              <p className="text-2xl bg-blue-ti text-white font-semibold rounded-lg p-5">
                Instalação de cabeamento estruturado cat6 dois pavimentos. Montagem de rack, identificação dos pontos, totalizando 140 pontos de rede. Configuração de vlan em switches.
              </p>
            </div>
          </div>
        </section>
      </div>  
    </div>
  );
};

export default Clientes;