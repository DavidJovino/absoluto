import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Sobrenos from "./components/Sobrenos";
import Servicos from "./components/Servicos";

export default function Web() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container mt-14 mx-auto px-12 py-4">
        <Home />
      </div>
      <Sobrenos />
      <Servicos />
      <Footer />
    </main>
  );
}