import { useState, useEffect, useRef } from "react";
import EnvelopeScreen from "./components/EnvelopeScreen";
import VideoScreen from "./components/VideoScreen";
import InvitationContent from "./components/InvitationContent";

type Stage = "envelope" | "video" | "content";

const SESSION_KEY = "sheila_invitation_stage";

export default function App() {
  const [stage, setStage] = useState<Stage>(() => {
    const saved = sessionStorage.getItem(SESSION_KEY);
    if (saved === "content") return "content";
    return "envelope";
  });

  const handleEnvelopeOpen = () => {
    setStage("video");
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
