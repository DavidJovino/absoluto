import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer container flex flex-col border bg-blue footer-bg border-t-[#33353F] border-l-transparent border-r-transparent text-white mx-auto">
      <div className="flex flex-col mx-auto px-12 py-4 sm:flex-row justify-between items-center p-5 bg-blue-ti w-full footer-bg max-w-screen-2xl" >
        <div className="p-12 flex justify-between">
          <a href="#"><Image 
              src="/images/footerAbsoluto-TI.png"
              alt="Absoluto"
              width={190}
              height={69}
            />
          </a>
        </div>
        <div className=" pb-5 pr-10">
          <p>Nos acompanhe nas nossas redes sociais:</p>
          <div className="flex justify-center items-center gap-4 pt-5">
            <a href="#"><Image
              src="/images/twitter.png"
              alt="twitter"
              className="hover:scale-110"
              width={30}
              height={40}
            />
            </a>
            <a href="#"><Image 
              src="/images/instagram.png"
              alt="instagram"
              className="hover:scale-110"
              width={30}
              height={40}
            />
            </a>
            <a href="#"><Image
              src="/images/facebook.png"
              alt="facebook"
              className="hover:scale-110"
              width={30}
              height={40}
            />
            </a>
            <a href="#"><Image 
              src="/images/youtube.png"
              alt="youtube"
              className="hover:scale-110"
              width={30}
              height={40}
            />
            </a>
          </div> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;