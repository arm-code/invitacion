import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "526561234567"; // ← Reemplaza con el número real
const WHATSAPP_MESSAGE = encodeURIComponent(
  "¡Hola! Confirmo mi asistencia a la celebración de Sheila Nicole el 30 de mayo. 🎉"
);
const MAPS_URL =
  "https://maps.app.goo.gl/17qZjJqiJF1V36pD8";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.18, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function InvitationContent() {
  return (
    <div
      className="min-h-screen w-full max-w-md mx-auto px-6 pb-16"
      style={{ backgroundColor: "#F9F7F2" }}
    >
      {/* ── HERO ── */}
      <section className="flex flex-col items-center text-center pt-16 pb-12">
        {/* Ornamento superior */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-3 mb-8"
        >
          <div style={{ height: 1, width: 40, background: "#B88F2D", opacity: 0.6 }} />
          <span style={{ color: "#B88F2D", fontSize: 18 }}>✦</span>
          <div style={{ height: 1, width: 40, background: "#B88F2D", opacity: 0.6 }} />
        </motion.div>

        <motion.p
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="tracking-[0.3em] uppercase text-xs mb-4"
          style={{ color: "#6B8EBF" }}
        >
          Te invitamos a celebrar
        </motion.p>

        <motion.h1
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.8rem, 12vw, 4rem)",
            fontWeight: 300,
            color: "#2B5292",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
          }}
        >
          Sheila
          <br />
          <em style={{ fontStyle: "italic", color: "#B88F2D" }}>Nicole</em>
        </motion.h1>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-6"
        >
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.15rem",
              color: "#6B8EBF",
              fontStyle: "italic",
              lineHeight: 1.7,
            }}
          >
            Acompáñanos en este momento especial<br />
            lleno de alegría y celebración
          </p>
        </motion.div>

        {/* Divider floral */}
        <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible" className="mt-8">
          <DividerOrnament />
        </motion.div>
      </section>

      {/* ── DETALLES ── */}
      <motion.section
        custom={5}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="mb-10"
      >
        <div
          className="rounded-3xl px-8 py-8"
          style={{
            background: "#FFFFFF",
            border: "1px solid rgba(107,142,191,0.15)",
            boxShadow: "0 8px 40px rgba(43,82,146,0.07)",
          }}
        >
          <div className="flex flex-col gap-8">
            {/* Fecha */}
            <DetailRow
              icon={<CalendarIcon />}
              label="Fecha"
              value="Viernes 30 de Mayo"
              sub="2025"
            />
            {/* Hora */}
            <DetailRow
              icon={<ClockIcon />}
              label="Hora"
              value="20:00 hrs"
              sub="Puntualmente"
            />
            {/* Lugar */}
            <DetailRow
              icon={<PinIcon />}
              label="Lugar"
              value="Rivera de Buenaventura"
              sub="Calle Rivera de Buenaventura 2255"
            />
          </div>
        </div>
      </motion.section>

      {/* ── CÓDIGO DE VESTIMENTA ── */}
      <motion.section
        custom={6}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="mb-10 text-center"
      >
        <p className="tracking-[0.25em] uppercase text-xs mb-2" style={{ color: "#B88F2D" }}>
          Código de vestimenta
        </p>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", color: "#2B5292", fontWeight: 300 }}>
          Formal · Elegante
        </p>
      </motion.section>

      {/* ── UBICACIÓN ── */}
      <motion.section
        custom={7}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="mb-10"
      >
        <SectionLabel>Ubicación</SectionLabel>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between w-full rounded-2xl px-6 py-5 transition-all"
          style={{
            background: "#2B5292",
            color: "#F9F7F2",
            textDecoration: "none",
            boxShadow: "0 8px 30px rgba(43,82,146,0.25)",
          }}
        >
          <div>
            <p className="font-medium text-base" style={{ color: "#F9F7F2", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem" }}>
              Rivera de Buenaventura 2255
            </p>
            <p className="text-sm mt-0.5" style={{ color: "#A5C4E7" }}>
              Toca para abrir en Google Maps
            </p>
          </div>
          <div
            className="ml-4 flex items-center justify-center rounded-full flex-shrink-0"
            style={{ width: 42, height: 42, background: "rgba(165,196,231,0.2)" }}
          >
            <MapArrowIcon />
          </div>
        </a>
      </motion.section>

      {/* ── CONFIRMACIÓN ── */}
      <motion.section
        custom={8}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="mb-4"
      >
        <SectionLabel>Confirmar Asistencia</SectionLabel>
        <p className="text-center text-sm mb-5" style={{ color: "#6B8EBF", fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", fontStyle: "italic" }}>
          Por favor confirma antes del 25 de mayo
        </p>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full rounded-2xl py-4 px-6 transition-all"
          style={{
            background: "#25D366",
            color: "#FFFFFF",
            textDecoration: "none",
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.15rem",
            letterSpacing: "0.02em",
            boxShadow: "0 8px 30px rgba(37,211,102,0.3)",
          }}
        >
          <WhatsAppIcon />
          <span>Confirmar por WhatsApp</span>
        </a>
      </motion.section>

      {/* ── FOOTER ── */}
      <motion.div
        custom={9}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-center pt-8 pb-4"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div style={{ height: 1, width: 30, background: "#B88F2D", opacity: 0.4 }} />
          <span style={{ color: "#B88F2D", fontSize: 14, opacity: 0.7 }}>✦</span>
          <div style={{ height: 1, width: 30, background: "#B88F2D", opacity: 0.4 }} />
        </div>
        <p
          className="text-xs tracking-widest uppercase"
          style={{ color: "#6B8EBF", opacity: 0.6 }}
        >
          Con amor · Familia Nicole
        </p>
      </motion.div>
    </div>
  );
}

/* ── Sub-components ── */

function DetailRow({
  icon,
  label,
  value,
  sub,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div
        className="flex items-center justify-center rounded-xl flex-shrink-0"
        style={{ width: 44, height: 44, background: "#F0F4FB" }}
      >
        {icon}
      </div>
      <div>
        <p className="text-xs tracking-widest uppercase mb-0.5" style={{ color: "#B88F2D" }}>
          {label}
        </p>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.2rem",
            color: "#2B5292",
            fontWeight: 500,
            lineHeight: 1.2,
          }}
        >
          {value}
        </p>
        <p className="text-sm" style={{ color: "#6B8EBF" }}>
          {sub}
        </p>
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-center tracking-[0.25em] uppercase text-xs mb-4"
      style={{ color: "#6B8EBF" }}
    >
      {children}
    </p>
  );
}

function DividerOrnament() {
  return (
    <svg width="160" height="24" viewBox="0 0 160 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="0" y1="12" x2="60" y2="12" stroke="#B88F2D" strokeWidth="0.8" strokeOpacity="0.5" />
      <circle cx="72" cy="12" r="3" fill="#B88F2D" fillOpacity="0.4" />
      <circle cx="80" cy="12" r="5" fill="#B88F2D" fillOpacity="0.6" />
      <circle cx="88" cy="12" r="3" fill="#B88F2D" fillOpacity="0.4" />
      <line x1="100" y1="12" x2="160" y2="12" stroke="#B88F2D" strokeWidth="0.8" strokeOpacity="0.5" />
    </svg>
  );
}

/* ── Icons ── */
function CalendarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2B5292" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="3" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2B5292" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15 15" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2B5292" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21C12 21 5 14.5 5 9a7 7 0 1 1 14 0c0 5.5-7 12-7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}
function MapArrowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A5C4E7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}
