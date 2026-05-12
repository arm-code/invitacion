import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  onEnded: () => void;
  onSkip: () => void;
}

export default function VideoScreen({ onEnded, onSkip }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showSkip, setShowSkip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSkip(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <motion.div
      className="fixed inset-0 bg-black flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <video
        ref={videoRef}
        src="/video.mp4"
        className="w-full h-full object-cover"
        playsInline
        onEnded={onEnded}
      />

      {/* Botón Skip */}
      <motion.button
        onClick={onSkip}
        className="absolute bottom-8 right-6 flex items-center gap-2 px-4 py-2 rounded-full text-sm tracking-widest uppercase"
        style={{
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(8px)",
          color: "rgba(255,255,255,0.85)",
          border: "1px solid rgba(255,255,255,0.25)",
          fontFamily: "'Cormorant Garamond', serif",
          letterSpacing: "0.15em",
        }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: showSkip ? 1 : 0, y: showSkip ? 0 : 10 }}
        transition={{ duration: 0.5 }}
        whileHover={{ background: "rgba(255,255,255,0.25)" }}
        whileTap={{ scale: 0.97 }}
      >
        Continuar →
      </motion.button>
    </motion.div>
  );
}
