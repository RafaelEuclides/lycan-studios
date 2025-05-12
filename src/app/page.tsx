import FadeInSection from "@/components/FadeInSection";

export default function Home() {
  return (
    <main className="bg-black text-gray-200 font-serif"
    style={
      {
        fontFamily: "Cinzel, serif",
        backgroundImage: "url('/images/logo-yellow-eyes.png')",
        backgroundSize: "50%",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }
    }>
      {/* HEADER */}
      <header className="flex items-center justify-between p-6 bg-black/40 backdrop-blur-sm">
        <div className="flex flex-col items-center cursor-pointer">
          <img
            src="/images/logo.svg"
            alt="Lycan Studios Logo"
            className="h-20 w-20 ml-20"
            style={{
              filter: "drop-shadow(0 0 5px rgba(255, 0, 0, 0.5))",
            }}
          />
        </div>
        <nav className="space-x-4 mr-20">
          <a href="#about" className="text-gray-300 hover:text-red-800">
            Sobre
          </a>
          <a href="#products" className="text-gray-300 hover:text-red-800">
            Produtos
          </a>
          <a href="#contact" className="text-gray-300 hover:text-red-800">
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
          backgroundSize: "50%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        
      >
        <div className="grid text-center backdrop-blur-sm bg-black/35 p-10 rounded-lg shadow-2xl">
          <h1 className="text-5xl md:text-6xl text-red-900 font-bold dripping-blood">
            Produtos e artesanatos
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
            <h2 className="text-4xl text-red-900 font-bold mb-6">
              Capítulo I — O Chamado
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              No coração da floresta sombria, ecos de um tempo esquecido sussurram entre as árvores tortuosas. Os ventos carregam promessas antigas, e os que ousam escutar sentem o frio da verdade rasgando suas almas...
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

      <section className="min-h-screen bg-black/60 px-8">
        <div className="max-w-3xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl text-red-900 font-bold mb-6">
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
    </main>
  );
}