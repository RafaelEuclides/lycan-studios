'use client';

import { useState } from "react";
import { Facebook, Instagram, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeInSection from "@/components/FadeInSection";
import HoverFadeAll from '@/components/HoverFadeAllImages';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="bg-black text-gray-200 font-serif"
      style={{
        fontFamily: "Cinzel, serif",
        backgroundImage: "url('/images/logo-yellow-eyes.png')",
        backgroundSize: "600px 600px",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <header className="flex items-center justify-between p-6 bg-black/40 backdrop-blur-sm relative z-50">
        <div className="flex items-center cursor-pointer mx-4 sm:mx-20">
          <img
            src="/images/logo.png"
            alt="Lycan Studios Logo"
            className="h-16 w-16 sm:h-20 sm:w-20"
            style={{
              filter: "drop-shadow(0 0 5px rgba(255, 0, 0, 0.5))",
            }}
          />
        </div>

        <nav className="hidden md:flex space-x-6 mx-4 sm:mx-20">
          <a href="#about" className="text-gray-300 hover:text-red-600">Sobre</a>
          <a href="#products" className="text-gray-300 hover:text-red-600">Produtos</a>
          <a href="#contact" className="text-gray-300 hover:text-red-600">Contato</a>
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-300 hover:text-red-600 focus:outline-none"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 w-full bg-black/90 p-4 md:hidden flex flex-col space-y-4 z-50"
            >
              <a href="#about" className="text-gray-300 hover:text-red-600">Sobre</a>
              <a href="#products" className="text-gray-300 hover:text-red-600">Produtos</a>
              <a href="#contact" className="text-gray-300 hover:text-red-600">Contato</a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <section
        className="h-screen bg-fixed bg-cover flex items-center justify-center"
        style={{
          backgroundImage: "url(/images/icon.png)",
          backgroundSize: "600px 600px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="grid text-center backdrop-blur-sm bg-black/35 p-10 rounded-lg shadow-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-red-800 font-bold dripping-blood">
            Esculturas e artesanatos
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-gray-300">
            Confira...
          </p>
        </div>
      </section>

      <section id="products" className="min-h-screen bg-black/60 px-4 sm:px-8 py-10">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <h2 className="text-3xl sm:text-4xl text-red-800 font-bold mb-6">PRODUTOS</h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Produtos artesanais feitos em porcelana fria, uma massa versátil e delicada, ideal para criar peças únicas e cheias de personalidade...
            </p>
          </FadeInSection>
        </div>

        <div className="flex justify-center mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
            {[{
              name: 'Kratos',
              price: 'R$ 500,00',
              defaultImage: '/images/kratos.jpg',
              hoverImages: ['/images/kratos2.jpg', '/images/kratos3.jpg', '/images/kratos4.jpg'],
            }, {
              name: 'Lycan',
              price: 'R$ 250,00',
              defaultImage: '/images/lycan.jpg',
              hoverImages: ['/images/lycan2.jpg', '/images/lycan3.jpg', '/images/lycan4.jpg'],
            }, {
              name: 'Sísifo',
              price: 'R$ 150,00',
              defaultImage: '/images/sisifo.jpg',
              hoverImages: ['/images/sisifo2.jpg', '/images/sisifo3.jpg', '/images/sisifo4.jpg'],
            }].map((item, index) => (
              <div key={index} className="backdrop-blur-sm bg-red-900/5 rounded-sm shadow-2xl hover:scale-105 transition-transform">
                <div className="flex justify-center p-2 border-b-2 border-red-900/30">
                  <HoverFadeAll
                    defaultImage={item.defaultImage}
                    hoverImages={item.hoverImages}
                    interval={2500}
                    className="w-60 h-60 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="flex justify-between flex-col items-center gap-8 p-2 my-5 mx-6">
                  <p className="text-gray-300 text-sm font-bold">Peça Porcelana Fria {item.name}</p>
                  <p className="text-gray-300 text-sm font-bold">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen bg-black/60 px-4 sm:px-8 py-10">
        <div className="max-w-3xl mx-auto">
          <FadeInSection>
            <h2 className="text-3xl sm:text-4xl text-red-800 font-bold mb-6">SOBRE</h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Guiados apenas pelas estrelas moribundas, os heróis seguem entre ruínas esquecidas...
            </p>
          </FadeInSection>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
          {[
            'logo-yellow-eyes.png',
            'icon.png',
            'logo-white-eyes.png',
            'logo.png',
            'logo.svg',
            'logo-red-eyes.png',
          ].map((img, i) => (
            <img key={i} src={`/images/${img}`} alt={`Logo ${i}`} className="hover:scale-110 transition-transform" />
          ))}
        </div>
      </section>

      <footer id="contact">
        <div className="bg-black/40 backdrop-blur-sm p-6">
          <div className="flex justify-center flex-col items-center gap-2">
            <img
              src="/images/logo.png"
              alt="Lycan Studios Logo"
              className="h-16 w-16 sm:h-20 sm:w-20 hover:scale-150 transition-transform"
              style={{
                filter: "drop-shadow(0 0 5px rgba(255, 0, 0, 0.5))",
              }}
            />
            <p className="text-gray-300 text-sm">© 2025 Lycan Studios.</p>
          </div>
        </div>
        <div className="flex justify-center py-8 gap-4">
          <a className="hover:text-red-800" href="https://www.instagram.com/lycan.studio/" target="_blank" rel="noopener noreferrer">
            <Instagram />
          </a>
          <a className="hover:text-red-800" href="https://www.facebook.com/lycanstudios" target="_blank" rel="noopener noreferrer">
            <Facebook />
          </a>
        </div>
      </footer>
    </main>
  );
}