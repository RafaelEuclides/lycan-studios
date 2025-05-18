'use client';

import { useEffect, useState } from 'react';

interface HoverFadeAllProps {
  defaultImage: string;
  hoverImages: string[]; // Somente imagens
  interval?: number;
  className?: string;
}

export default function HoverFadeAll({
  defaultImage,
  hoverImages,
  interval = 1000,
  className = '',
}: HoverFadeAllProps) {
  const [isHovering, setIsHovering] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isHovering && hoverImages.length > 1) {
      timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % hoverImages.length);
      }, interval);
    } else {
      setCurrentIndex(0);
    }

    return () => clearInterval(timer);
  }, [isHovering, hoverImages, interval]);

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Imagem padrão */}
      <img
        src={defaultImage}
        alt="Default"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out"
        style={{ opacity: isHovering ? 0 : 1 }}
      />

      {/* Todas as imagens de hover empilhadas */}
      {hoverImages.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`Hover ${idx}`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-3000 ease-in-out"
          style={{ opacity: isHovering && currentIndex === idx ? 1 : 0 }}
        />
      ))}
    </div>
  );
}
