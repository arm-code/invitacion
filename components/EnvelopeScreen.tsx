import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  onOpen: () => void;
}

export default function EnvelopeScreen({ onOpen }: Props) {
  const [isOpening, setIsOpening] = useState(false);
  const [isGone, setIsGone] = useState(false);

  const handleClick = () => {
    if (isOpening) return;
    setIsOpening(true);
    setTimeout(() => {
      setIsGone(true);
      setTimeout(onOpen, 400);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {!isGone && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center"
          style={{ backgroundColor: "#F9F7F2" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4 }}
        >
          {/* Fondo decorativo */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg width="100%" height="100%" className="opacity-10">
              <defs>
                <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.5" fill="#B88F2D" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
          </div>

          {/* Texto superior */}
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center mb-8 tracking-[0.3em] uppercase text-sm"
            style={{ color: "#B88F2D", fontFamily: "'Cormorant Garamond', serif" }}
          >
            Tienes una invitación especial
          </motion.p>

          {/* Sobre */}
          <motion.div
            onClick={handleClick}
            className="relative cursor-pointer select-none"
            animate={
              isOpening
                ? { scale: 1.05, y: -10 }
                : {
                    y: [0, -8, 0],
                    transition: {
                      y: {
                        repeat: Infinity,
                        duration: 3,
                        ease: "easeInOut",
                      },
                    },
                  }
            }
            whileHover={!isOpening ? { scale: 1.03 } : {}}
            style={{ width: 280, height: 190 }}
          >
            <EnvelopeSVG isOpening={isOpening} />

            {/* Sello dorado */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center"
              style={{
                width: 52,
                height: 52,
                background: "radial-gradient(circle, #D4A94A 0%, #B88F2D 60%, #8B6914 100%)",
                boxShadow: "0 2px 12px rgba(184,143,45,0.4)",
                zIndex: 10,
              }}
              animate={isOpening ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <span style={{ fontSize: 22, color: "#F9F7F2" }}>✦</span>
            </motion.div>
          </motion.div>

          {/* Instrucción */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpening ? 0 : 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-10 text-center tracking-widest text-xs uppercase"
            style={{ color: "#6B8EBF" }}
          >
            Toca para abrir
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function EnvelopeSVG({ isOpening }: { isOpening: boolean }) {
  return (
    <svg
      viewBox="0 0 280 190"
      width="280"
      height="190"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: "visible" }}
    >
      <defs>
        <filter id="shadow">
          <feDropShadow dx="0" dy="6" stdDeviation="12" floodColor="#2B5292" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* Cuerpo del sobre */}
      <rect x="0" y="0" width="280" height="190" rx="12" ry="12"
        fill="#FFFFFF" stroke="#E8E0D0" strokeWidth="1.5" filter="url(#shadow)" />

      {/* Solapa trasera (fija) */}
      <path d="M0,0 L140,80 L280,0 Z" fill="#EEE8DC" opacity="0.6" />

      {/* Líneas diagonales del cuerpo */}
      <path d="M0,190 L140,110 L280,190" fill="none" stroke="#E8E0D0" strokeWidth="1" />
      <path d="M0,0 L140,110" fill="none" stroke="#E8E0D0" strokeWidth="1" />
      <path d="M280,0 L140,110" fill="none" stroke="#E8E0D0" strokeWidth="1" />

      {/* Solapa superior — se anima */}
      <motion.path
        d="M0,0 L140,80 L280,0 Z"
        fill="#F0EAE0"
        stroke="#E8E0D0"
        strokeWidth="1.5"
        style={{ transformOrigin: "140px 0px" }}
        animate={isOpening ? { rotateX: -160, opacity: 0 } : { rotateX: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      />

      {/* Borde dorado decorativo */}
      <rect x="8" y="8" width="264" height="174" rx="8" ry="8"
        fill="none" stroke="#B88F2D" strokeWidth="0.8" strokeDasharray="4 3" opacity="0.5" />
    </svg>
  );
}
