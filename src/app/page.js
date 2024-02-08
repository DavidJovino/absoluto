import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Sobrenos from "./components/Sobrenos";
import Servicos from "./components/Servicos";
import Clientes from "./components/Clientes";
import Contato from "./components/Contato";

export default function Web() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Home />
      <Sobrenos />
      <Servicos />
      <Clientes />
      <Contato />
      <Footer />
    </main>
  );
}