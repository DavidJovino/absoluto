import React from "react";
import Image from "next/image";

const Servicos = () => {
  return (
    <section className="flex container justify-center max-w-screen-2xl items-center footer-bg mx-auto" id="servicos">
      <div className="grid grid-cols-6 grid-row-9 items-center flex-wrap justify-center gap-1">
        <div className="row-start-1 col-span-6 flex justify-center text-blue-ti text-6xl font-extrabold mb-10 mt-10">
            <h1>Serviços</h1>
        </div>
        <div className="row-start-2 col-start-2 col-span-4 flex mb-2">
            <h1 className="text-blue-ti text-2xl font-bold">Redes</h1>
        </div>
        <div className="row-start-3 col-start-2 col-span-4 flex mb-10">
            <p className=" text-2xl ">Conecte dispositivos de forma eficiente, assegurando comunicação instantânea e compartilhamento ágil de recursos em redes, garantindo desempenho, segurança e adaptabilidade.</p>
        </div>
        <div className="row-start-4 col-start-2 col-span-4 row-span-2 grid grid-cols-4 gap-x-12 mb-10">
            <div className="bg-blue-ti text-white font-semibold rounded-lg py-[6rem] px-5">
              <div className=" text-white font-semibold grid grid-rows-2">
                <Image 
                src="/images/wifi.png"
                alt="frame"
                className="object-contain h-full mx-auto"
                width={80}
                height={80}
                />
                <h1 className="text-center text-2xl mt-10">Mikrotik Routing & Switching</h1>
              </div>
            </div>
            <div className="bg-blue-ti text-white font-semibold rounded-lg py-[6rem] px-5">
              <div className=" text-white font-semibold grid grid-rows-2">
                <Image 
                src="/images/wifi.png"
                alt="frame"
                className="object-contain h-full mx-auto"
                width={80}
                height={80}
                />
                <h1 className="text-center text-2xl mt-10">CISCO Routing & Switching</h1>
              </div>
            </div>
            <div className="bg-blue-ti text-white font-semibold rounded-lg py-[6rem] px-5">
              <div className=" text-white font-semibold grid grid-rows-2">
                <Image 
                src="/images/wifi.png"
                alt="frame"
                className="object-contain h-full mx-auto"
                width={80}
                height={80}
                />
                <h1 className="text-center text-2xl mt-10">HPE Routing & Switching</h1>
              </div>
            </div>
            <div className="bg-blue-ti text-white font-semibold rounded-lg py-[6rem] px-5">
              <div className=" text-white font-semibold grid grid-rows-2">
                <Image 
                src="/images/wifi.png"
                alt="frame"
                className="object-contain h-full mx-auto"
                width={80}
                height={80}
                />
                <h1 className="text-center text-2xl mt-10">Aruba Routing & Switching</h1>
              </div>
            </div>
        </div>
        <div className="row-start-6 col-start-2 col-span-4 flex mb-2">
            <h1 className="text-blue-ti text-2xl font-bold">Segurança e Firewall:</h1>
        </div>
        <div className="row-start-7 col-start-2 col-span-4 flex mb-10">
            <p className=" text-2xl ">Fortaleça a proteção da sua rede com soluções de segurança e firewall, assegurando a defesa contra ameaças, controle de tráfego e garantindo ambientes online seguros e resilientes.</p>
        </div>
        <div className="row-start-8 col-start-2 col-span-4 row-span-1 grid grid-cols-3 gap-x-12 mb-10">
            <div className="bg-blue-300 text-white font-semibold rounded py-5 px-10 flex items-center">
              <Image 
              src="/images/Frame.png"
              alt="frame"
              className="object-contain h-full mr-10"
              width={40}
              height={40}
              />
              <h1 className="text-center pl-10">CISCO Asa</h1>
            </div>
            <div className="bg-blue-300 text-white font-semibold rounded py-5 px-10 flex items-center">
              <Image 
              src="/images/Frame.png"
              alt="frame"
              className="object-contain h-full mr-10"
              width={40}
              height={40}
              />
              <h1 className="text-center pl-10">PFsense</h1>
            </div>
            <div className="bg-blue-300 text-white font-semibold rounded py-5 px-10 flex items-center">
              <Image 
              src="/images/Frame.png"
              alt="frame"
              className="object-contain h-full mr-10"
              width={40}
              height={40}
              />
              <h1 className="text-center pl-10">Mikrotik</h1>
            </div>
        </div>            
        <div className="row-start-9 col-start-2 col-span-4 row-span-1 grid grid-cols-3 gap-x-12 mb-10">
            <div className="bg-blue-300 text-white font-semibold rounded py-5 px-10 flex items-center">
              <Image 
              src="/images/Frame.png"
              alt="frame"
              className="object-contain h-full mr-10"
              width={40}
              height={40}
              />
              <h1 className="text-center pl-10">Checkpoint</h1>
            </div>
            <div className="bg-blue-300 text-white font-semibold rounded py-5 px-10 flex items-center">
              <Image 
              src="/images/Frame.png"
              alt="frame"
              className="object-contain h-full mr-10"
              width={40}
              height={40}
              />
              <h1 className="text-center pl-10">Sonicwall</h1>
            </div>
            <div className="bg-blue-300 text-white font-semibold rounded py-5 px-10 flex items-center">
              <Image 
              src="/images/Frame.png"
              alt="frame"
              className="object-contain h-full mr-10"
              width={40}
              height={40}
              />
              <h1 className="text-center pl-10">Fortigate</h1>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Servicos;