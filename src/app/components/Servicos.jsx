import React from "react";
import Image from "next/image";

const Servicos = () => {
  return (
    <section className="flex flex-col justify-center items-center max-w-screen-2xl footer-bg mx-auto py-10 px-4" id="servicos">
      <h1 className="text-blue-ti text-4xl md:text-6xl font-extrabold mb-10">Serviços</h1>
      
      {/* Seção de Redes */}
      <h2 className="text-blue-ti text-2xl font-bold mb-4">Redes</h2>
      <p className="text-xl text-center mb-8">
        Conecte dispositivos de forma eficiente, assegurando comunicação instantânea e compartilhamento ágil de recursos em redes, garantindo desempenho, segurança e adaptabilidade.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        {["Mikrotik", "CISCO", "HPE", "Aruba"].map(service => (
          <div className="bg-blue-ti text-white font-semibold rounded-lg py-12 px-4 flex flex-col items-center justify-center">
            <Image 
              src="/images/wifi.png"
              alt={`${service} Routing & Switching`}
              width={100}
              height={100}
              layout="intrinsic"
            />
            <h3 className="text-center text-xl mt-4">{`${service} Routing & Switching`}</h3>
          </div>
        ))}
      </div>
      
      {/* Seção de Segurança e Firewall */}
      <h2 className="text-blue-ti text-2xl font-bold mb-4">Segurança e Firewall:</h2>
      <p className="text-xl text-center mb-8">
        Fortaleça a proteção da sua rede com soluções de segurança e firewall, assegurando a defesa contra ameaças, controle de tráfego e garantindo ambientes online seguros e resilientes.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6 mb-10">
        {["CISCO Asa", "PFsense", "Mikrotik", "Checkpoint", "Sonicwall", "Fortigate"].map(firewall => (
          <div className="bg-blue-300 text-white font-semibold rounded py-8 px-4 flex items-center justify-center">
            <Image 
              src="/images/Frame.png"
              alt={firewall}
              width={60}
              height={60}
              layout="intrinsic"
            />
            <h3 className="text-center text-xl ml-4">{firewall}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Servicos;
