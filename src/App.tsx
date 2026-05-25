/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import Logo from './components/Logo';

const POST_ASSETS = [
  "https://res.cloudinary.com/dla6aihxp/image/upload/v1779708169/Tu_Historia_Mockup_Redes_Sociales_Collage_Marro%CC%81n_Y_Blanco_uhcmwb.jpg",
  "https://res.cloudinary.com/dla6aihxp/image/upload/v1779712003/ChatGPT_Image_25_may_2026_11_51_34_jxhhkh.jpg",
  "https://res.cloudinary.com/dla6aihxp/image/upload/v1779708164/5_pdkk9q.jpg",
  "https://res.cloudinary.com/dla6aihxp/image/upload/v1779708168/Feed_1_hjidux.jpg",
  "https://res.cloudinary.com/dla6aihxp/image/upload/v1779708167/Feed_5_n3vszh.jpg",
  "https://res.cloudinary.com/dla6aihxp/image/upload/v1779708166/Feed_3_reajbt.jpg",
  "https://res.cloudinary.com/dla6aihxp/image/upload/v1779708165/Feed_4_hylvq5.jpg",
  "https://res.cloudinary.com/dla6aihxp/image/upload/v1779708165/10_sfeuyj.jpg",
  "https://res.cloudinary.com/dla6aihxp/image/upload/v1779708165/8_mexevq.jpg",
  "https://res.cloudinary.com/dla6aihxp/image/upload/v1779708165/9_xakhax.jpg",
  "https://res.cloudinary.com/dla6aihxp/image/upload/v1779708164/7_uy0bvz.jpg",
  "https://res.cloudinary.com/dla6aihxp/image/upload/v1779708164/6_xnojqa.jpg"
];

export default function App() {
  const [index, setIndex] = useState(0);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/34665609787", "_blank");
  };

  const next = () => setIndex((prev) => (prev + 1) % POST_ASSETS.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + POST_ASSETS.length) % POST_ASSETS.length);

  return (
    <div className="min-h-screen bg-[#090a0c] text-zinc-150 flex flex-col items-center overflow-x-hidden">
      {/* Header */}
      <header className="w-full pt-12 pb-6 px-6 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 filter invert-[0.1] brightness-[1.2]"
        >
          <Logo />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-2xl text-center mb-8 px-4"
        >
          <p className="text-zinc-500 text-[11px] font-bold uppercase tracking-[0.3em] leading-relaxed">
            Propuesta de Identidad Visual y Contenido Digital <br className="hidden md:block" /> 
            Despliegue inmediato tras validación comercial.
          </p>
        </motion.div>
      </header>

      {/* Real 3D Cover Flow Implementation - FULL WIDTH */}
      <main className="w-full flex flex-col items-center py-10 relative">
        <div className="relative w-full h-[450px] md:h-[600px] flex items-center justify-center [perspective:2000px]">
          <div className="relative w-full h-full flex items-center justify-center [transform-style:preserve-3d]">
            {POST_ASSETS.map((url, i) => {
              const offset = i - index;
              const isActive = i === index;
              const absOffset = Math.abs(offset);
              const direction = offset > 0 ? 1 : -1;
              
              let x = 0;
              let z = 0;
              let rotateY = 0;
              let opacity = 1;

              if (isActive) {
                x = 0;
                z = 180; // Reduced peak z for smaller feel
                rotateY = 0;
                opacity = 1;
              } else {
                // Increased spacing for a more airy feel
                x = direction * (220 + (absOffset * 140));
                z = -absOffset * 250;
                rotateY = direction * -55;
                opacity = Math.max(0, 1 - absOffset * 0.2);
              }

              // Keep more items partially visible to fill the width
              if (absOffset > 5) opacity = 0;

              return (
                <motion.div
                  key={url}
                  initial={false}
                  animate={{
                    x,
                    z,
                    rotateY,
                    opacity,
                    scale: isActive ? 1 : 0.8
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 25
                  }}
                  onClick={() => setIndex(i)}
                  className="absolute cursor-pointer [transform-style:preserve-3d]"
                  style={{
                    zIndex: isActive ? 100 : 100 - absOffset,
                  }}
                >
                  <div className={`relative bg-zinc-900 p-1 rounded-2xl overflow-hidden group border transition-all duration-500 ${
                    isActive 
                      ? 'shadow-[0_0_35px_rgba(255,255,255,0.18)] border-[#AF804D]/60' 
                      : 'shadow-[0_0_15px_rgba(255,255,255,0.03)] border-zinc-800/80 hover:border-zinc-700/80'
                  }`}>
                    <img
                      src={url}
                      alt={`Post ${i + 1}`}
                      className="w-[200px] md:w-[320px] aspect-[4/5] object-cover rounded-xl"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <div 
                    className="absolute -bottom-[35%] left-0 w-full h-[30%] opacity-20 blur-md pointer-events-none scale-y-[-1] overflow-hidden"
                    style={{ maskImage: 'linear-gradient(to bottom, transparent, black)' }}
                  >
                     <img
                      src={url}
                      alt={`Reflection ${i + 1}`}
                      className="w-full h-full object-cover rounded-xl"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Navigation Arrows vertically between slides and control dots */}
        <div className="mt-8 flex gap-4 z-10">
          <button 
            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
            className="w-14 h-14 rounded-full bg-zinc-900/80 backdrop-blur-md shadow-2xl flex items-center justify-center text-zinc-400 hover:text-[#AF804D] hover:border-[#AF804D]/40 transition-all active:scale-90 border border-zinc-800 cursor-pointer"
          >
            <ChevronLeft size={28} strokeWidth={2.5} />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="w-14 h-14 rounded-full bg-zinc-900/80 backdrop-blur-md shadow-2xl flex items-center justify-center text-zinc-400 hover:text-[#AF804D] hover:border-[#AF804D]/40 transition-all active:scale-90 border border-zinc-800 cursor-pointer"
          >
            <ChevronRight size={28} strokeWidth={2.5} />
          </button>
        </div>

        <div className="mt-8 flex gap-2 z-10 px-4 overflow-x-auto no-scrollbar max-w-full">
          {POST_ASSETS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-500 flex-shrink-0 ${i === index ? 'w-12 bg-[#AF804D]' : 'w-2 bg-zinc-800 hover:bg-zinc-700'}`}
            />
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 1 }}
           className="mt-20 flex flex-col items-center w-full px-6"
        >
          <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 p-8 md:p-12 rounded-[3.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-zinc-800/80 flex flex-col items-center text-center max-w-xl w-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#AF804D]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <h3 className="text-3xl font-serif font-bold text-white mb-4 relative z-10">Revisión de Identidad</h3>
            <p className="text-zinc-400 text-sm mb-10 leading-relaxed relative z-10">
              Esta propuesta visual ha sido diseñada específicamente para <strong>Financia Motor</strong>. <br/>
              Si el diseño es correcto, iniciaremos el traspaso a producción.
            </p>
            
            <button
              onClick={handleWhatsAppClick}
              className="group flex items-center gap-4 px-12 py-5 rounded-full font-bold text-lg bg-[#25D366] text-white hover:bg-[#128C7E] shadow-2xl shadow-[#25D366]/30 transition-all active:scale-95 relative z-10"
            >
              <MessageCircle size={28} fill="currentColor" className="group-hover:rotate-12 transition-transform" />
              Validar por WhatsApp
            </button>
            
            <p className="mt-10 text-zinc-500 font-bold tracking-[0.3em] text-[10px] uppercase relative z-10">
              Línea directa: 665 609 787
            </p>
          </div>
        </motion.div>
      </main>

      <footer className="mt-auto py-12 text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-650">
        © 2026 FINANCIA MOTOR · BRAND KIT VALIDATION
      </footer>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        main { overflow-x: clip; }
      `}</style>
    </div>
  );
}


