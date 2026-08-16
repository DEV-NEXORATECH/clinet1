import { useState } from "react";
import { whatsappUrl } from "../data/site.js";

export default function ContactPage() {
  const [isSending, setIsSending] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSending(true);

    setTimeout(() => {
      event.target.reset();
      setIsSending(false);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 5000);
    }, 900);
  };

  return (
    <div className="flex flex-col w-full">
    
    <section className="relative py-24 px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto w-full overflow-hidden">
    <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
    <div className="max-w-2xl">
    <div className="flex items-center gap-3 mb-6">
    <div className="h-[1px] w-12 bg-secondary"></div>
    <span className="font-label-md text-label-md text-secondary uppercase tracking-widest">Hubungi Kami</span>
    </div>
    <h1 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-primary mb-6">
              Kemitraan Strategis Dimulai Dengan <span className="text-secondary italic">Dialog.</span>
    </h1>
    <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Konsultasikan kebutuhan keamanan dan manajemen fasilitas Anda dengan tim ahli PT Sentra Garuda Cakra Pratama (SGC). Kami siap merancang solusi yang presisi untuk aset berharga Anda.
            </p>
    </div>
    <div className="hidden lg:block">
    <div className="p-8 bg-surface-container rounded-2xl shadow-sm border-l-4 border-secondary max-w-xs">
    <span className="material-symbols-outlined text-secondary text-4xl mb-4">verified_user</span>
    <p className="font-headline-md text-headline-md text-primary mb-2">Respon Cepat</p>
    <p className="font-body-md text-body-md text-on-surface-variant">Tim representatif kami akan menghubungi Anda dalam waktu kurang dari 24 jam kerja.</p>
    </div>
    </div>
    </div>
    
    <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] opacity-5 pointer-events-none">
    <svg aria-hidden="true" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <path d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.7,-31.3,87,-15.7,85.8,-0.7C84.6,14.2,78.9,28.5,70.5,40.8C62.1,53.1,51,63.5,38,71.2C25,78.9,10.1,84,-4.3,91.4C-18.7,98.8,-32.7,108.6,-45.5,106.1C-58.3,103.6,-69.9,88.8,-77.9,73.8C-85.9,58.8,-90.3,43.6,-92.3,28.5C-94.3,13.4,-93.9,-1.6,-89.8,-15.5C-85.7,-29.4,-77.9,-42.2,-67.2,-52.4C-56.5,-62.6,-42.9,-70.2,-29.4,-77.3C-15.9,-84.4,-2.5,-91,10.6,-89.6C23.7,-88.2,31.3,-83.6,44.7,-76.4Z" fill="currentColor" transform="translate(100 100)"></path>
    </svg>
    </div>
    </section>
    
    <section className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto w-full pb-24">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
    
    <div className="lg:col-span-7 bg-surface-container-lowest p-8 lg:p-12 rounded-3xl shadow-xl shadow-primary/5">
    <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6" id="contactForm" onSubmit={handleSubmit}>
    <div className="md:col-span-1 flex flex-col gap-2">
    <label className="font-label-md text-label-md text-on-surface-variant px-1">Nama Lengkap</label>
    <input className="bg-surface-container rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-secondary/20 border border-transparent focus:border-secondary transition-all font-body-md text-on-surface" placeholder="John Doe" required type="text"/>
    </div>
    <div className="md:col-span-1 flex flex-col gap-2">
    <label className="font-label-md text-label-md text-on-surface-variant px-1">Nama Perusahaan</label>
    <input className="bg-surface-container rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-secondary/20 border border-transparent focus:border-secondary transition-all font-body-md text-on-surface" placeholder="PT. Inovasi Bangsa" type="text"/>
    </div>
    <div className="md:col-span-1 flex flex-col gap-2">
    <label className="font-label-md text-label-md text-on-surface-variant px-1">WhatsApp</label>
    <input className="bg-surface-container rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-secondary/20 border border-transparent focus:border-secondary transition-all font-body-md text-on-surface" placeholder="0812-xxxx-xxxx" required type="tel"/>
    </div>
    <div className="md:col-span-1 flex flex-col gap-2">
    <label className="font-label-md text-label-md text-on-surface-variant px-1">Alamat Email</label>
    <input className="bg-surface-container rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-secondary/20 border border-transparent focus:border-secondary transition-all font-body-md text-on-surface" placeholder="john@company.com" required type="email"/>
    </div>
    <div className="md:col-span-1 flex flex-col gap-2">
    <label className="font-label-md text-label-md text-on-surface-variant px-1">Jenis Layanan</label>
    <select className="bg-surface-container rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-secondary/20 border border-transparent focus:border-secondary transition-all font-body-md text-on-surface appearance-none cursor-pointer">
    <option>Keamanan Fisik (Guard)</option>
    <option>Manajemen Fasilitas</option>
    <option>Sistem Keamanan Elektronik</option>
    <option>Konsultasi Risiko</option>
    <option>Layanan Kebersihan</option>
    </select>
    </div>
    <div className="md:col-span-1 flex flex-col gap-2">
    <label className="font-label-md text-label-md text-on-surface-variant px-1">Jumlah Personel Dibutuhkan</label>
    <input className="bg-surface-container rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-secondary/20 border border-transparent focus:border-secondary transition-all font-body-md text-on-surface" placeholder="Contoh: 10" type="number"/>
    </div>
    <div className="md:col-span-2 flex flex-col gap-2">
    <label className="font-label-md text-label-md text-on-surface-variant px-1">Lokasi Penugasan</label>
    <input className="bg-surface-container rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-secondary/20 border border-transparent focus:border-secondary transition-all font-body-md text-on-surface" placeholder="Kota atau Alamat Spesifik" type="text"/>
    </div>
    <div className="md:col-span-2 flex flex-col gap-2">
    <label className="font-label-md text-label-md text-on-surface-variant px-1">Pesan / Detail Kebutuhan</label>
    <textarea className="bg-surface-container rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-secondary/20 border border-transparent focus:border-secondary transition-all font-body-md text-on-surface resize-none" placeholder="Ceritakan lebih lanjut mengenai kebutuhan spesifik Anda..." rows="4"></textarea>
    </div>
    <div className="md:col-span-2 mt-4">
    <button className="w-full bg-primary text-on-primary py-4 rounded-xl font-headline-md text-headline-md hover:bg-secondary transition-all shadow-lg flex items-center justify-center gap-3 disabled:opacity-70" type="submit" disabled={isSending}>
                  {isSending ? "Mengirim..." : "Kirim Permintaan Konsultasi"}
                  <span className={`material-symbols-outlined ${isSending ? "animate-spin" : ""}`}>{isSending ? "progress_activity" : "arrow_forward"}</span>
    </button>
    </div>
    </form>
    </div>
    
    <div className="lg:col-span-5 flex flex-col gap-12">
    
    <div className="flex flex-col gap-6">
    <h3 className="font-headline-xl text-headline-xl text-primary">Kantor Pusat</h3>
    <div className="flex gap-4">
    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
    <span className="material-symbols-outlined text-secondary">location_on</span>
    </div>
    <div>
    <p className="font-headline-md text-headline-md text-primary mb-1">Bandung, Jawa Barat</p>
    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Gedung SGC Pratama, Lantai 4<br/>
                    Jl. Asia Afrika No. 123, Braga, Kec. Sumur Bandung<br/>
                    Kota Bandung, Jawa Barat 40111
                  </p>
    </div>
    </div>
    </div>
    
    <div className="relative group">
    <div className="w-full h-80 bg-surface-container-high rounded-3xl overflow-hidden shadow-inner grayscale group-hover:grayscale-0 transition-all duration-700" data-location="Jl. Asia Afrika, Bandung, Indonesia">
    
    </div>
    <div className="absolute bottom-4 left-4 bg-surface/90 backdrop-blur-md px-4 py-2 rounded-lg border border-outline-variant shadow-sm flex items-center gap-2">
    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
    <span className="font-label-md text-[12px] text-primary uppercase">Live Location</span>
    </div>
    </div>
    
    <div className="bg-tertiary text-on-tertiary p-8 rounded-3xl relative overflow-hidden">
    <div className="relative z-10">
    <h4 className="font-headline-md text-headline-md mb-6">Jam Operasional</h4>
    <ul className="space-y-4 mb-8">
    <li className="flex justify-between items-center border-b border-white/10 pb-2">
    <span className="font-body-md opacity-70">Senin - Jumat</span>
    <span className="font-label-md">08:00 - 17:00</span>
    </li>
    <li className="flex justify-between items-center border-b border-white/10 pb-2">
    <span className="font-body-md opacity-70">Sabtu</span>
    <span className="font-label-md">09:00 - 13:00</span>
    </li>
    <li className="flex justify-between items-center">
    <span className="font-body-md opacity-70">Minggu & Hari Libur</span>
    <span className="font-label-md text-secondary-fixed">Emergency Only</span>
    </li>
    </ul>
    <a className="flex items-center justify-center gap-3 w-full bg-secondary text-on-secondary py-4 rounded-xl font-headline-md text-headline-md hover:brightness-110 transition-all shadow-xl" href={whatsappUrl} target="_blank" rel="noreferrer">
    <span className="material-symbols-outlined">chat</span>
                  WhatsApp Fast Response
                </a>
    </div>
    
    <span className="material-symbols-outlined absolute -bottom-8 -right-8 text-[200px] opacity-5 rotate-12 pointer-events-none">support_agent</span>
    </div>
    
    <div className="flex flex-wrap items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all">
    <img className="h-12 w-auto object-contain" data-alt="ISO 9001:2015 Quality Management System Certification Logo in minimalist black and white" src="/images/PT. SENTRA GARUDA CAKRA PRATAMA 001 (1).jpg"/>
    <img className="h-12 w-auto object-contain" data-alt="ISO 45001:2018 Occupational Health and Safety Certification Logo in minimalist black and white" src="/images/IMG-20260704-WA0622.jpg"/>
    <img className="h-12 w-auto object-contain" data-alt="Official Indonesian Police (POLRI) security service permit badge in professional monochrome" src="/images/IMG-20260704-WA0594.jpg"/>
    </div>
    </div>
    </div>
    </section>
    
    <div className={`fixed bottom-8 right-8 z-[100] transform transition-all duration-500 pointer-events-none ${showToast ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"}`} id="successToast">
    <div className="bg-primary text-on-primary px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4">
    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
    <span className="material-symbols-outlined text-sm">done</span>
    </div>
    <div>
    <p className="font-headline-md text-[16px]">Pesan Terkirim</p>
    <p className="font-body-md text-[14px] opacity-70">Terima kasih, kami akan segera menghubungi Anda.</p>
    </div>
    </div>
    </div>
    </div>
    
  );
}
