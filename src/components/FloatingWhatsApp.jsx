import { whatsappUrl } from "../data/site.js";

export default function FloatingWhatsApp() {
  return (
    <a
      aria-label="Konsultasi via WhatsApp"
      className="group fixed bottom-5 right-5 z-[60] inline-flex items-center gap-3 rounded-full bg-[#128c4a] px-4 py-3 text-white shadow-2xl shadow-black/25 transition-transform hover:-translate-y-1 hover:bg-[#0f7a3f] focus:outline-none focus:ring-4 focus:ring-[#128c4a]/25 sm:bottom-7 sm:right-7 sm:px-5"
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
    >
      <span className="material-symbols-outlined text-[22px]">chat</span>
      <span className="font-label-md text-label-md group-hover:block hidden sm:block">Konsultasi Keamanan</span>
    </a>
  );
}
