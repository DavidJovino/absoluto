import React from "react";
import Image from "next/image";

const Sobrenos = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-blue-sobrenos footer-bg mx-auto px-4 py-8" id="sobrenos">
      <div className="flex-1 flex justify-center md:justify-end md:pr-8 lg:px-8">
        <Image
          src="/images/sobrenos.png"
          alt="Sobre Nós"
          width={490}
          height={490}
          objectFit="cover"
          layout="intrinsic"
        />
      </div>
      <div className="flex-1 px-6 md:px-8 lg:px-12">
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-ti mb-10 text-center md:text-left mt-2">
          Sobre Nós
        </h1>
        <p className="text-xl mt-4">
          Bem-vindo à <b>Absoluto</b>, sua parceira de confiança no universo da Tecnologia da Informação, especializada em soluções de Redes, Routing e Firewall. Fundada em 2023, nossa empresa se destina a prover soluções inovadoras e seguras para otimizar e proteger a infraestrutura de TI de nossos clientes.
        </p>
        <p className="text-xl mt-2">
          <b>Missão:</b> Nossa missão é oferecer soluções de TI personalizadas que garantam a segurança, a eficiência e a escalabilidade dos sistemas de nossos clientes. Entendemos os desafios únicos enfrentados pelas empresas na era digital e estamos dedicados a superá-los, garantindo que suas operações de rede sejam robustas e resilientes.
        </p>
        <p className="text-xl mt-2">
          <b>Visão:</b> Aspiramos ser reconhecidos como líderes no fornecimento de soluções de redes, routing e firewall, estabelecendo padrões de excelência no atendimento ao cliente, inovação e segurança. Estamos empenhados em manter-nos na vanguarda da tecnologia, antecipando as necessidades futuras de nossos clientes e do mercado.
        </p>
      </div>
    </section>
  );
};

export default Sobrenos;
