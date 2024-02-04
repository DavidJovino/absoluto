import React from "react";
import Image from "next/image";

const Sobrenos = () => {
  return (
    <section className="flex container justify-center max-w-screen-2xl h-dvh items-center bg-blue-sobrenos footer-bg mx-auto" id="sobrenos">
      <div className="grid grid-cols-6 items-center flex-wrap justify-center gap-14">
          <div className="col-start-2 col-span-2 items-center w-full h-auto mx-auto">
            <Image
              src="/images/sobrenos.png"
              alt="image"
              width={490}
              height={490}
            />
          </div> 
          <div className="col-span-2 aspect-w-3 aspect-h-2 w-full h-auto items-center">
            <h1 className=" text-4xl h-auto font-bold mb-4 font-sans">
                Conectando Seu Caminho Para O Futuro
            </h1>
            <p className="">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <button class="">
              Contato
            </button> 
            </div>  
      </div>
    </section>
  );
};

export default Sobrenos;