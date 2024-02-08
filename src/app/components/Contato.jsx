import React from "react";
import Image from "next/image";

const Contato = () => {
  const mapIframeHtml = {
    __html: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.1052121152024!2d-46.684181723852575!3d-23.600559363035025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce574d0c7543df%3A0xa904cdd58746da2c!2sR.%20Nova%20Cidade%2C%20520%20-%20Vila%20Ol%C3%ADmpia%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004547-071!5e0!3m2!1sen!2sbr!4v1707356524158!5m2!1sen!2sbr" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <section className="max-w-6xl w-full mx-auto px-4 py-10" id="contatos" >
        <h1 className="text-blue-ti text-4xl md:text-6xl font-extrabold mb-10 text-center">
          Contato
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-stretch gap-10 lg:gap-20">
          <div className="flex flex-col items-center gap-6 md:w-1/2 lg:p-10">
            {/* Bloco de Endereço */}
            <div className="bg-blue-ti text-white font-semibold rounded-lg p-10 flex items-center w-full">
              <Image src="/images/localizacao.png" alt="localizacao" width={60} height={60} layout="intrinsic" />
              <h3 className="text-xl ml-4">Rua Nova Cidade 520, Vila Olímpia - SP</h3>
            </div>
            {/* Bloco de Email */}
            <div className="bg-blue-ti text-white font-semibold rounded-lg p-10 flex items-center w-full">
              <Image src="/images/email.png" alt="email" width={60} height={60} layout="intrinsic" />
              <h3 className="text-xl ml-4">victor@operanetwork.com.br</h3>
            </div>
            {/* Bloco de Telefone */}
            <div className="bg-blue-ti text-white font-semibold rounded-lg p-10 flex items-center w-full">
              <Image src="/images/telefone.png" alt="telefone" width={60} height={60} layout="intrinsic" />
              <h3 className="text-xl ml-4">(11) 93215-8284</h3>
            </div>
          </div>
          {/* Mapa */}
          <div className="md:w-1/2 w-full md:h-full self-center" dangerouslySetInnerHTML={mapIframeHtml} />
        </div>
      </section>
    </div>
  );
};

export default Contato;
