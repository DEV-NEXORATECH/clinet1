import { logoUrl, navItems, whatsappUrl } from "../data/site.js";

export default function Footer({ onNavigate }) {
  return (
    <footer className="w-full bg-tertiary py-20 text-on-tertiary">
      <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <div className="mb-6 inline-flex rounded-xl bg-surface-container-lowest px-4 py-3 shadow-lg shadow-black/20">
            <img alt="SGC Logo" className="h-12 w-auto object-contain" src={logoUrl} />
          </div>
          <p className="font-body-md text-body-md opacity-70 leading-relaxed">
            Penyedia solusi keamanan dan fasilitas terintegrasi yang berkomitmen pada standar keunggulan, profesionalisme, dan kepercayaan nasional.
          </p>
        </div>
        <div>
          <h4 className="font-headline-md text-headline-md mb-6">Menu</h4>
          <ul className="space-y-4">
            {navItems.map(([path, label]) => (
              <li className="flex items-center gap-2" key={path}>
                <span className="material-symbols-outlined text-[16px] text-secondary">fiber_manual_record</span>
                <button className="font-body-md text-body-md hover:text-secondary transition-colors" type="button" onClick={() => onNavigate(path)}>
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-headline-md text-headline-md mb-6">Kontak</h4>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-secondary">location_on</span>
              <span className="font-body-md text-body-md opacity-70">Jl. Raya Bandung No. 123, Bandung, Jawa Barat</span>
            </li>
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-secondary">call</span>
              <span className="font-body-md text-body-md opacity-70">0822-1122-7088</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-headline-md text-headline-md mb-6">Ikuti Kami</h4>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full bg-on-tertiary/10 flex items-center justify-center hover:bg-secondary transition-all" href={whatsappUrl} target="_blank" rel="noreferrer">
              <span className="material-symbols-outlined">chat</span>
            </a>
            <a className="w-10 h-10 rounded-full bg-on-tertiary/10 flex items-center justify-center hover:bg-secondary transition-all" href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <span className="material-symbols-outlined">photo_camera</span>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop mt-20 pt-8 border-t border-white/10 text-center opacity-40 text-sm">
        © 2024 PT Sentra Garuda Cakra Pratama. All rights reserved.
      </div>
    </footer>
  );
}
