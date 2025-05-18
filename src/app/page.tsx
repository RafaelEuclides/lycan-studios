import FadeInSection from "@/components/FadeInSection";
import HoverFadeAll from '@/components/HoverFadeAllImages';
import { Facebook, Instagram } from 'lucide-react';

export default function Home() {
  return (
    <main className="bg-black text-gray-200 font-serif"
    style={
      {
        fontFamily: "Cinzel, serif",
        backgroundImage: "url('/images/logo-yellow-eyes.png')",
        backgroundSize: "600px 600px",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }
    }>
      {/* HEADER */}
      <header className="flex items-center justify-between p-6 bg-black/40 backdrop-blur-sm">
        <div className="flex flex-col items-center cursor-pointer mx-20">
          <img
            src="/images/logo.png"
            alt="Lycan Studios Logo"
            className="h-20 w-20"
            style={{
              filter: "drop-shadow(0 0 5px rgba(255, 0, 0, 0.5))",
            }}
          />
        </div>
        <nav className="space-x-4 mx-20">
          <a href="#about" className="text-gray-300 hover:text-red-600">
            Sobre
          </a>
          <a href="#products" className="text-gray-300 hover:text-red-600">
            Produtos
          </a>
          <a href="#contact" className="text-gray-300 hover:text-red-600">
            Contato
          </a>
        </nav>
      </header>
      {/* PARALLAX */}
      <section
        className="h-screen bg-fixed bg-cover flex items-center justify-center"
        style={{
          backgroundImage:
            "url(/images/icon.png)",
          backgroundAttachment: "fixed",
          backgroundSize: "600px 600px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}  
      >
        <div className="grid text-center backdrop-blur-sm bg-black/35 p-10 rounded-lg shadow-2xl">
          <h1 className="flex flex-col text-5xl md:text-6xl text-red-800 font-bold dripping-blood mx-100">
            Esculturas e artesanatos
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-300">
            Confira...
          </p>
        </div>
      </section>
      {/* CAPÍTULOS */}
      <section className="min-h-screen bg-black/60 px-8 py-10">
        <div className="max-w-3xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl text-red-800 font-bold mb-6">
              Produtos
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Produtos artesanais feitos em porcelana fria, uma massa versátil e delicada, ideal para criar peças únicas e cheias de personalidade. Cada item é modelado à mão com cuidado e criatividade, resultando em lembranças, enfeites e acessórios exclusivos para todas as ocasiões. Perfeitos para presentear ou decorar, nossos artesanatos em porcelana fria combinam beleza, originalidade e um toque especial de carinho em cada detalhe.
            </p>
          </FadeInSection>
        </div>
        <div className="flex justify-center mx-30 my-30">
          <div className="grid grid-cols-3 grid-rows-1 cursor-pointer">
            <div className="backdrop-blur-sm bg-red-900/5 rounded-sm shadow-2xl hover:scale-105">
              <div className="justify-center items-center flex align-center p-2 border-b-2 border-red-900/30">
                <HoverFadeAll
                  defaultImage="/images/kratos.jpg"
                  hoverImages={[
                    '/images/kratos2.jpg',
                    '/images/kratos3.jpg',
                    '/images/kratos4.jpg',
                  ]}
                  interval={2500}
                  className="w-60 h-90 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="flex justify-between items-center gap-8 p-2 my-5 mx-10">
                <p className="flex justify-center align-top text-gray-300 text-sm font-bold">
                  Peça Porcelana Fria Kratos
                </p>
                <p className="flex justify-center align-top text-gray-300 text-sm font-bold">
                  R$ 500,00
                </p> 
              </div>
            </div>
            <div className="backdrop-blur-sm bg-red-900/5 rounded-sm shadow-2xl hover:scale-105">
              <div className="justify-center items-center flex align-center p-2 border-b-2 border-red-900/30">
                <HoverFadeAll
                  defaultImage="/images/lycan.jpg"
                  hoverImages={[
                    '/images/lycan2.jpg',
                    '/images/lycan3.jpg',
                    '/images/lycan4.jpg',
                  ]}
                  interval={2500}
                  className="w-60 h-90 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="flex justify-between items-center gap-8 p-2 my-5 mx-10">
                <p className="flex justify-center align-top text-gray-300 text-sm font-bold">
                  Peça Porcelana Fria Lycan
                </p>
                <p className="flex justify-center align-top text-gray-300 text-sm font-bold">
                  R$ 250,00
                </p> 
              </div>
            </div>
            <div className="backdrop-blur-sm bg-red-900/5 rounded-sm shadow-2xl hover:scale-105">
              <div className="justify-center items-center flex align-center p-2 border-b-2 border-red-900/30">
                <HoverFadeAll
                  defaultImage="/images/sisifo.jpg"
                  hoverImages={[
                    '/images/sisifo2.jpg',
                    '/images/sisifo3.jpg',
                    '/images/sisifo4.jpg',
                  ]}
                  interval={2500}
                  className="w-90 h-90 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="flex justify-between items-center gap-8 p-2 my-5 mx-10">
                <p className="flex justify-center align-top text-gray-300 text-sm font-bold">
                  Peça Porcelana Fria Sísifo
                </p>
                <p className="flex justify-center align-top text-gray-300 text-sm font-bold">
                  R$ 150,00
                </p> 
              </div>
            </div>
            <img src="/images/logo.png" alt="Logo" className=" hover:scale-110" />
            <img src="/images/logo.svg" alt="Logo" className=" hover:scale-110" />
            <img src="/images/logo-red-eyes.png" alt="Logo" className=" hover:scale-110" />
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-black/60 px-8">
        <div className="max-w-3xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl text-red-800 font-bold mb-6">
              Capítulo II — A Jornada
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Guiados apenas pelas estrelas moribundas, os heróis seguem entre ruínas esquecidas e criaturas famintas por lembranças. Cada passo é uma oferenda à escuridão que espreita além do véu.
            </p>
          </FadeInSection>
        </div>
        <div className="grid grid-cols-6">
          <img src="/images/logo-yellow-eyes.png" alt="Logo" className="col-span-2" />
          <img src="/images/icon.png" alt="Logo" className="col-span-2" />
          <img src="/images/logo-white-eyes.png" alt="Logo" className="col-span-2" />
          <img src="/images/logo.png" alt="Logo" className="col-span-2" />
          <img src="/images/logo.svg" alt="Logo" className="col-span-2" />
          <img src="/images/logo-red-eyes.png" alt="Logo" className="col-span-2" />
        </div>
      </section>
      <footer>
        <div className="bg-black/40 backdrop-blur-sm p-6">
          <div className="flex justify-center">
            <p className="text-gray-300 text-sm">
              © 2025 Lycan Studios.
            </p>
          </div>
        </div>
        <div className="flex justify-center py-8 gap-4">
          <a className="hover:text-red-800" href="https://www.instagram.com/lycan.studio/" target="_blank" rel="noopener noreferrer">
            <Instagram/>
          </a>
          <a className="hover:text-red-800" href="https://www.facebook.com/lycanstudios" target="_blank" rel="noopener noreferrer">
            <Facebook/>
          </a>
        </div>
      </footer>
    </main>
  );
}