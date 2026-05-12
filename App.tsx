import { useState, useEffect, useRef } from "react";
import EnvelopeScreen from "./components/EnvelopeScreen";
import VideoScreen from "./components/VideoScreen";
import InvitationContent from "./components/InvitationContent";

type Stage = "envelope" | "video" | "content";

const SESSION_KEY = "sheila_invitation_stage";

export default function App() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [stage, setStage] = useState<Stage>(() => {
    const saved = sessionStorage.getItem(SESSION_KEY);
    if (saved === "content") return "content";
    return "envelope";
  });

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(console.error);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleEnvelopeOpen = () => {
    setStage("video");
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Audio play error:", err));
    }
  };

  const handleVideoEnd = () => {
    sessionStorage.setItem(SESSION_KEY, "content");
    setStage("content");
  };

  const handleSkip = () => {
    sessionStorage.setItem(SESSION_KEY, "content");
    setStage("content");
  };

  return (
    <div
      className="min-h-screen w-full overflow-x-hidden"
      style={{ backgroundColor: "#F9F7F2", fontFamily: "'Cormorant Garamond', serif" }}
    >
      <audio ref={audioRef} src="/song.m4a" loop />

      {/* Botón de Música Flotante */}
      {stage !== "envelope" && (
        <button
          onClick={toggleMusic}
          className="fixed top-6 right-6 z-50 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            background: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(184, 143, 45, 0.3)",
            boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
            color: "#B88F2D",
          }}
        >
          {isPlaying ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      )}

      {stage === "envelope" && (
        <EnvelopeScreen onOpen={handleEnvelopeOpen} />
      )}
      {stage === "video" && (
        <VideoScreen onEnded={handleVideoEnd} onSkip={handleSkip} />
      )}
      {stage === "content" && (
        <InvitationContent />
      )}
    </div>
  );
}
