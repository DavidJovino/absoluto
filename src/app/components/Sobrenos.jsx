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
            <h1 className="h-auto mb-10 flex justify-center mx-auto text-blue-ti text-6xl font-extrabold">
                Sobre Nós
            </h1>
            <p className="text-xl mt-4">
              Bem-vindo à <b>Absoluto</b>, sua parceira de confiança no universo da Tecnologia da Informação, especializada em soluções de Redes, Routing e Firewall. Fundada em 2023, nossa empresa se destina a prover soluções inovadoras e seguras para otimizar e proteger a infraestrutura de TI de nossos clientes. </p>
            <p className="text-xl mt-2">
              <b>Missão:</b> Nossa missão é oferecer soluções de TI personalizadas que garantam a segurança, a eficiência e a escalabilidade dos sistemas de nossos clientes. Entendemos os desafios únicos enfrentados pelas empresas na era digital e estamos dedicados a superá-los, garantindo que suas operações de rede sejam robustas e resilientes. </p>
            <p className="text-xl mt-2">
              <b>Visão:</b> Aspiramos ser reconhecidos como líderes no fornecimento de soluções de redes, routing e firewall, estabelecendo padrões de excelência no atendimento ao cliente, inovação e segurança. Estamos empenhados em manter-nos na vanguarda da tecnologia, antecipando as necessidades futuras de nossos clientes e do mercado.
            </p>
          </div>  
      </div>
    </section>
  );
};

export default Sobrenos;