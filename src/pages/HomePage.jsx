import Counter from "../components/Counter.jsx";
import { whatsappUrl } from "../data/site.js";

export default function HomePage({ onNavigate }) {
  return (
    <div className="flex flex-col w-full overflow-hidden">
    
    <section className="relative w-full h-[90vh] flex items-center -mt-20">
    <div className="absolute inset-0 z-0">
    <img alt="Professional Indonesian security guard standing alert in front of a modern glass skyscraper entrance" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNh8gkyZaEyGL3wkw8uBsdENQFClfTqK5q9XJ3eNg6Gvq0ZxAbXWkZ6WQA-tsqS1DMCoLnHuYC1CWh7l2gHHDvsvJ65WvexHNx_u5glboX9FHJRd9t1e-UXqvEtIecCZvl-x7lK97J-ZTM0qzws2FUIwQrX4OsyWFcV7J-YPgoOoPvfB6mpJCC2jkp0-LiThbC9-8HugXw4Hgs_2KEvQJVxRuIlStRnEKeFumB0EOb1g_acVi_A6o"/>
    <div className="absolute inset-0 bg-gradient-to-r from-tertiary/80 via-tertiary/40 to-transparent"></div>
    </div>
    <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop w-full pt-20">
    <div className="max-w-3xl space-y-8 animate-[fadeInUp_1s_ease-out]">
    <div className="inline-flex items-center gap-3 bg-secondary/20 backdrop-blur-md px-4 py-2 rounded-full border border-secondary/30">
    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
    <span className="font-label-md text-label-md text-secondary-fixed-dim uppercase tracking-widest">Security & Facility Support Services</span>
    </div>
    <h1 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-on-primary leading-tight">
                        Perlindungan Profesional untuk Lingkungan Kerja yang Lebih Aman
                    </h1>
    <p className="font-body-lg text-body-lg text-on-primary/80 max-w-xl">
                        Sentra Garuda Cakra menghadirkan standar baru dalam integrasi keamanan dan manajemen fasilitas dengan dedikasi penuh pada kedisiplinan dan profesionalisme.
                    </p>
    <div className="flex flex-wrap gap-4 pt-4">
    <button className="bg-secondary text-on-secondary px-8 py-4 rounded-lg font-label-md text-label-md hover:scale-105 transition-all shadow-xl" type="button" onClick={() => onNavigate("kontak")}>
                            Konsultasikan Kebutuhan
                        </button>
    <button className="border border-on-primary/30 backdrop-blur-sm text-on-primary px-8 py-4 rounded-lg font-label-md text-label-md hover:bg-on-primary hover:text-tertiary transition-all" type="button" onClick={() => onNavigate("layanan")}>
                            Lihat Layanan
                        </button>
    </div>
    </div>
    </div>
    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
    <span className="material-symbols-outlined text-on-primary text-4xl">expand_more</span>
    </div>
    </section>
    
    <section className="relative z-20 -mt-16 max-w-container-max mx-auto w-full px-margin-mobile lg:px-margin-desktop">
    <div className="bg-surface-container-lowest shadow-2xl rounded-2xl grid grid-cols-2 lg:grid-cols-4 divide-x divide-outline-variant p-8 lg:p-12">
    <div className="flex flex-col items-center text-center p-4 group">
    <div className="w-14 h-14 rounded-xl bg-surface-container-high flex items-center justify-center mb-4 group-hover:bg-secondary/10 transition-colors">
    <span className="material-symbols-outlined text-secondary text-3xl">verified_user</span>
    </div>
    <h4 className="font-headline-md text-[18px] mb-1">Personel Terseleksi</h4>
    <p className="text-on-surface-variant text-sm">Rekrutmen standar tinggi</p>
    </div>
    <div className="flex flex-col items-center text-center p-4 group">
    <div className="w-14 h-14 rounded-xl bg-surface-container-high flex items-center justify-center mb-4 group-hover:bg-secondary/10 transition-colors">
    <span className="material-symbols-outlined text-secondary text-3xl">military_tech</span>
    </div>
    <h4 className="font-headline-md text-[18px] mb-1">Disiplin</h4>
    <p className="text-on-surface-variant text-sm">Etos kerja profesional</p>
    </div>
    <div className="flex flex-col items-center text-center p-4 group">
    <div className="w-14 h-14 rounded-xl bg-surface-container-high flex items-center justify-center mb-4 group-hover:bg-secondary/10 transition-colors">
    <span className="material-symbols-outlined text-secondary text-3xl">visibility</span>
    </div>
    <h4 className="font-headline-md text-[18px] mb-1">Sistem Pengawasan</h4>
    <p className="text-on-surface-variant text-sm">Monitoring 24/7 realtime</p>
    </div>
    <div className="flex flex-col items-center text-center p-4 group">
    <div className="w-14 h-14 rounded-xl bg-surface-container-high flex items-center justify-center mb-4 group-hover:bg-secondary/10 transition-colors">
    <span className="material-symbols-outlined text-secondary text-3xl">handshake</span>
    </div>
    <h4 className="font-headline-md text-[18px] mb-1">Layanan Custom</h4>
    <p className="text-on-surface-variant text-sm">Sesuai kebutuhan spesifik</p>
    </div>
    </div>
    </section>
    
    <section className="py-32 max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop">
    <div className="grid lg:grid-cols-2 gap-20 items-center">
    <div className="relative">
    <div className="absolute -top-6 -left-6 w-32 h-32 border-l-4 border-t-4 border-secondary/30"></div>
    <div className="rounded-3xl overflow-hidden shadow-2xl relative">
    <img alt="Morning briefing of a security team in a luxury office lobby" className="w-full aspect-[4/5] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiypTqtfAiu8StnGyX9Pyer0tdCEiV7KwaiusEzNKJv6ok9isGTG-tP6sxumWyxXHsGj0LXMJ2L--aRv3jnYmSZab_Lhymmh1UjJ29J7L-TuMHeM4m-isALF-RSQmlmrRhqCj0auH0BwwEUhsfaMuRrgOfcQZhZ4ev5T5scPSjlnbMvS6MFfuN_RvOHGEdC-QiebsYVPxJLOsmSZ7j1yfvSS7B44F_u2FzB5s9oIFJULoDEkienHU"/>
    <div className="absolute bottom-8 right-8 bg-tertiary p-6 rounded-2xl text-on-primary">
    <p className="font-headline-xl text-secondary">15+</p>
    <p className="text-sm opacity-70">Tahun Pengalaman Operasional</p>
    </div>
    </div>
    </div>
    <div className="space-y-8">
    <div className="space-y-4">
    <span className="font-label-md text-secondary uppercase tracking-[0.2em]">Tentang Kami</span>
    <h2 className="font-display-lg text-headline-xl lg:text-display-lg text-primary leading-tight">
                            Mitra Strategis untuk Keamanan dan Dukungan Operasional
                        </h2>
    </div>
    <p className="font-body-lg text-body-lg text-on-surface-variant">
                        PT Sentra Garuda Cakra Pratama bukan sekadar penyedia jasa, melainkan partner yang berdedikasi menjaga aset dan kelancaran operasional bisnis Anda melalui manajemen fasilitas yang terintegrasi dan akuntabel.
                    </p>
    <ul className="space-y-4">
    <li className="flex gap-4 items-start">
    <span className="material-symbols-outlined text-secondary">check_circle</span>
    <span className="font-body-md text-on-surface">Kepatuhan penuh terhadap regulasi keamanan nasional (POLRI).</span>
    </li>
    <li className="flex gap-4 items-start">
    <span className="material-symbols-outlined text-secondary">check_circle</span>
    <span className="font-body-md text-on-surface">Pelatihan berkala untuk peningkatan kompetensi personel.</span>
    </li>
    <li className="flex gap-4 items-start">
    <span className="material-symbols-outlined text-secondary">check_circle</span>
    <span className="font-body-md text-on-surface">Transparansi pelaporan berbasis teknologi digital.</span>
    </li>
    </ul>
    <button className="font-label-md text-label-md text-primary border-b-2 border-secondary pb-1 hover:text-secondary transition-all" type="button" onClick={() => onNavigate("tentang-kami")}>Pelajari Selengkapnya</button>
    </div>
    </div>
    </section>
    
    <section className="py-32 bg-surface-container">
    <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop">
    <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
    <div className="max-w-2xl">
    <span className="font-label-md text-secondary uppercase tracking-[0.2em]">Layanan Kami</span>
    <h2 className="font-display-lg text-headline-xl lg:text-display-lg mt-4">Solusi Terintegrasi yang Menyeluruh</h2>
    </div>
    <p className="font-body-md text-on-surface-variant max-w-sm">
                        Kami menyediakan ekosistem pendukung bisnis yang memastikan setiap sudut area Anda terjaga dan tertata.
                    </p>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
    
    <div className="bg-surface group rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
    <div className="h-64 overflow-hidden relative">
    <img alt="Security guarding services" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNh8gkyZaEyGL3wkw8uBsdENQFClfTqK5q9XJ3eNg6Gvq0ZxAbXWkZ6WQA-tsqS1DMCoLnHuYC1CWh7l2gHHDvsvJ65WvexHNx_u5glboX9FHJRd9t1e-UXqvEtIecCZvl-x7lK97J-ZTM0qzws2FUIwQrX4OsyWFcV7J-YPgoOoPvfB6mpJCC2jkp0-LiThbC9-8HugXw4Hgs_2KEvQJVxRuIlStRnEKeFumB0EOb1g_acVi_A6o"/>
    <div className="absolute top-4 left-4 bg-secondary text-on-secondary px-4 py-1 rounded-full text-xs font-bold">UTAMA</div>
    </div>
    <div className="p-8 space-y-6">
    <h3 className="font-headline-md text-headline-md">Jasa Pengamanan</h3>
    <p className="text-on-surface-variant line-clamp-3">Penyediaan tenaga Satuan Pengamanan (SATPAM) yang terlatih dalam bela diri, tanggap darurat, dan pelayanan prima.</p>
    <ul className="space-y-2 border-y border-outline-variant py-4">
    <li className="flex items-center gap-2 text-sm"><span className="w-1 h-1 bg-secondary rounded-full"></span> Guarding Services</li>
    <li className="flex items-center gap-2 text-sm"><span className="w-1 h-1 bg-secondary rounded-full"></span> Mobile Patrol</li>
    <li className="flex items-center gap-2 text-sm"><span className="w-1 h-1 bg-secondary rounded-full"></span> Executive Protection</li>
    </ul>
    <button className="w-full py-4 border border-outline text-primary font-label-md rounded-xl group-hover:bg-primary group-hover:text-on-primary transition-all" type="button" onClick={() => onNavigate("layanan")}>Pelajari Layanan</button>
    </div>
    </div>
    
    <div className="bg-surface group rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
    <div className="h-64 overflow-hidden relative">
    <img alt="Professional cleaning services" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAudw132N_-hZJuXRW2LxL-59lgCH_6gO_wGSMj2-xUtImRPAAbJ9CI0F-915NoOQVar96M99KkrJqbv5FAnHKlWLgI3nk3dLKn5rg06Be-8KHIsnn9Aw8gia3v1ftv642tBGZQH30-bn44fal4wIAllLoOboe9JzKuCPX4Fy-k_JrcIZ9RThHvQLcSkesUmr64UOzt2UictPZmTlVebVTb3SjAlrg6hNTmDn5QVKsn2OHrB8i3WEw"/>
    </div>
    <div className="p-8 space-y-6">
    <h3 className="font-headline-md text-headline-md">Cleaning Service</h3>
    <p className="text-on-surface-variant line-clamp-3">Perawatan kebersihan gedung secara menyeluruh dengan menggunakan peralatan modern dan chemical ramah lingkungan.</p>
    <ul className="space-y-2 border-y border-outline-variant py-4">
    <li className="flex items-center gap-2 text-sm"><span className="w-1 h-1 bg-secondary rounded-full"></span> Daily Maintenance</li>
    <li className="flex items-center gap-2 text-sm"><span className="w-1 h-1 bg-secondary rounded-full"></span> Deep Cleaning</li>
    <li className="flex items-center gap-2 text-sm"><span className="w-1 h-1 bg-secondary rounded-full"></span> Glass & Facade Care</li>
    </ul>
    <button className="w-full py-4 border border-outline text-primary font-label-md rounded-xl group-hover:bg-primary group-hover:text-on-primary transition-all" type="button" onClick={() => onNavigate("layanan")}>Pelajari Layanan</button>
    </div>
    </div>
    
    <div className="bg-surface group rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
    <div className="h-64 overflow-hidden relative">
    <img alt="Office support and general affair services" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANz_Kyauv0pOKfj0ceCo1H3FWHyVRl-D7vnQjzgikVAko72X2d6LCWm4DwET5SuH-dGBPNqjzgjamScpVPmh8CKPogoI3rCiQvhTfVjVHAvssV9dzG58Y3R-qFHeTnvPoGvv5W-r0QrYBxvroITLWYzYlqsQs6j1b0-kv_amm4HFtdy9ygRYdY5hdhCTB5SJVObexJi1enrcf8Ft6nVlnVP6FyucHkhFGMfPCb_TRgaU1yxwD1rrM"/>
    </div>
    <div className="p-8 space-y-6">
    <h3 className="font-headline-md text-headline-md">Office Support</h3>
    <p className="text-on-surface-variant line-clamp-3">Dukungan tenaga terampil untuk kelancaran administrasi dan operasional harian kantor Anda.</p>
    <ul className="space-y-2 border-y border-outline-variant py-4">
    <li className="flex items-center gap-2 text-sm"><span className="w-1 h-1 bg-secondary rounded-full"></span> Office Boy & Girl</li>
    <li className="flex items-center gap-2 text-sm"><span className="w-1 h-1 bg-secondary rounded-full"></span> Administration Support</li>
    <li className="flex items-center gap-2 text-sm"><span className="w-1 h-1 bg-secondary rounded-full"></span> Receptionist</li>
    </ul>
    <button className="w-full py-4 border border-outline text-primary font-label-md rounded-xl group-hover:bg-primary group-hover:text-on-primary transition-all" type="button" onClick={() => onNavigate("layanan")}>Pelajari Layanan</button>
    </div>
    </div>
    </div>
    </div>
    </section>
    
    <section className="py-32 bg-tertiary text-on-tertiary">
    <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop">
    <div className="text-center mb-24 max-w-3xl mx-auto">
    <span className="font-label-md text-secondary uppercase tracking-[0.2em]">Keunggulan Kami</span>
    <h2 className="font-display-lg text-headline-xl lg:text-display-lg mt-4">Mengapa Memilih Sentra Garuda Cakra?</h2>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
    <div className="flex gap-6">
    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-secondary flex items-center justify-center text-secondary">
    <span className="material-symbols-outlined">verified</span>
    </div>
    <div>
    <h4 className="font-headline-md text-xl mb-3">Legalitas Resmi</h4>
    <p className="opacity-70 text-sm leading-relaxed">Beroperasi di bawah izin Mabes POLRI dan kementerian terkait untuk kepastian hukum.</p>
    </div>
    </div>
    <div className="flex gap-6">
    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-secondary flex items-center justify-center text-secondary">
    <span className="material-symbols-outlined">psychology</span>
    </div>
    <div>
    <h4 className="font-headline-md text-xl mb-3">Manajemen Modern</h4>
    <p className="opacity-70 text-sm leading-relaxed">Penggunaan aplikasi monitoring untuk pelaporan tugas secara real-time.</p>
    </div>
    </div>
    <div className="flex gap-6">
    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-secondary flex items-center justify-center text-secondary">
    <span className="material-symbols-outlined">trending_up</span>
    </div>
    <div>
    <h4 className="font-headline-md text-xl mb-3">Continuous Training</h4>
    <p className="opacity-70 text-sm leading-relaxed">Kurikulum pelatihan yang diperbarui secara rutin sesuai standar industri terbaru.</p>
    </div>
    </div>
    <div className="flex gap-6">
    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-secondary flex items-center justify-center text-secondary">
    <span className="material-symbols-outlined">fact_check</span>
    </div>
    <div>
    <h4 className="font-headline-md text-xl mb-3">Quality Control</h4>
    <p className="opacity-70 text-sm leading-relaxed">Sistem audit berkala untuk memastikan standar pelayanan tetap di level tertinggi.</p>
    </div>
    </div>
    <div className="flex gap-6">
    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-secondary flex items-center justify-center text-secondary">
    <span className="material-symbols-outlined">support_agent</span>
    </div>
    <div>
    <h4 className="font-headline-md text-xl mb-3">Respon Cepat</h4>
    <p className="opacity-70 text-sm leading-relaxed">Tim tanggap darurat yang siap siaga 24 jam untuk segala situasi mendesak.</p>
    </div>
    </div>
    <div className="flex gap-6">
    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-secondary flex items-center justify-center text-secondary">
    <span className="material-symbols-outlined">shield_with_heart</span>
    </div>
    <div>
    <h4 className="font-headline-md text-xl mb-3">Berorientasi Solusi</h4>
    <p className="opacity-70 text-sm leading-relaxed">Kami mendengarkan masalah Anda dan memberikan solusi yang tepat guna.</p>
    </div>
    </div>
    </div>
    </div>
    </section>
    
    <section className="py-20 bg-secondary text-on-secondary">
    <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop grid grid-cols-2 lg:grid-cols-4 gap-12">
    <div className="text-center space-y-2">
    <Counter target={2500} />
    <p className="font-label-md opacity-80 uppercase tracking-widest">Personel Aktif</p>
    </div>
    <div className="text-center space-y-2">
    <Counter target={150} />
    <p className="font-label-md opacity-80 uppercase tracking-widest">Klien Korporasi</p>
    </div>
    <div className="text-center space-y-2">
    <Counter target={12} />
    <p className="font-label-md opacity-80 uppercase tracking-widest">Provinsi Jangkauan</p>
    </div>
    <div className="text-center space-y-2">
    <Counter target={98} suffix="%" />
    <p className="font-label-md opacity-80 uppercase tracking-widest">% Tingkat Kepuasan</p>
    </div>
    </div>
    </section>
    
    <section className="py-32 bg-surface">
    <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop">
    <div className="text-center mb-20">
    <span className="font-label-md text-secondary uppercase tracking-[0.2em]">Metodologi Kerja</span>
    <h2 className="font-display-lg text-headline-xl lg:text-display-lg mt-4">Alur Kerjasama Profesional</h2>
    </div>
    <div className="relative">
    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-outline-variant -translate-y-1/2 z-0"></div>
    <div className="grid lg:grid-cols-5 gap-8 relative z-10">
    <div className="bg-surface p-8 rounded-2xl shadow-md flex flex-col items-center text-center space-y-4 hover:-translate-y-2 transition-transform duration-300">
    <div className="w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center font-bold">1</div>
    <h5 className="font-headline-md text-lg">Konsultasi</h5>
    <p className="text-sm opacity-70">Identifikasi kebutuhan & asesmen risiko area.</p>
    </div>
    <div className="bg-surface p-8 rounded-2xl shadow-md flex flex-col items-center text-center space-y-4 hover:-translate-y-2 transition-transform duration-300">
    <div className="w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center font-bold">2</div>
    <h5 className="font-headline-md text-lg">Perencanaan</h5>
    <p className="text-sm opacity-70">Penyusunan Standard Operating Procedure (SOP).</p>
    </div>
    <div className="bg-surface p-8 rounded-2xl shadow-md flex flex-col items-center text-center space-y-4 hover:-translate-y-2 transition-transform duration-300">
    <div className="w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center font-bold">3</div>
    <h5 className="font-headline-md text-lg">Mobilisasi</h5>
    <p className="text-sm opacity-70">Penempatan personel pilihan ke lokasi proyek.</p>
    </div>
    <div className="bg-surface p-8 rounded-2xl shadow-md flex flex-col items-center text-center space-y-4 hover:-translate-y-2 transition-transform duration-300">
    <div className="w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center font-bold">4</div>
    <h5 className="font-headline-md text-lg">Operasional</h5>
    <p className="text-sm opacity-70">Implementasi tugas harian & manajemen area.</p>
    </div>
    <div className="bg-surface p-8 rounded-2xl shadow-md flex flex-col items-center text-center space-y-4 hover:-translate-y-2 transition-transform duration-300">
    <div className="w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center font-bold">5</div>
    <h5 className="font-headline-md text-lg">Monitoring</h5>
    <p className="text-sm opacity-70">Evaluasi rutin & laporan performa berkelanjutan.</p>
    </div>
    </div>
    </div>
    </div>
    </section>
    
    <section className="relative py-32 overflow-hidden">
    <div className="absolute inset-0 z-0">
    <div className="w-full h-full bg-cover bg-center scale-110" data-alt="Stunning cinematic wide shot of a modern glass corporate headquarters at dusk, lights glowing warmly from inside, symbolizing growth, stability, and round-the-clock protection by Sentra Garuda Cakra" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDDWd14r-ma7QUaChnjL2RtTeM79c-7QRN_Bxr2kjjuiDPOLjm8C4JFetDq24yr90goAI0SbwfPSJgVnNBDjX4dESQvCf_7BAfqVjFbyKzBiHP3e5KHO56Rkk20J7HNF15DXjv4t52W4xtt-imEvTd-n5Kr4gDyNzDTzUooILBjq77KsV1FTYJv6ayZbjBf-JDm3aArZbhablXRfflksdiusIie0Xq5ZL4BEEmjRhm5MuZtfV7JSTI")'}}></div>
    <div className="absolute inset-0 bg-tertiary/80 backdrop-blur-sm"></div>
    </div>
    <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop text-center">
    <div className="max-w-3xl mx-auto space-y-10">
    <h2 className="font-display-lg text-headline-xl lg:text-display-lg text-on-primary">Bangun Lingkungan Kerja yang Aman & Kondusif Hari Ini</h2>
    <p className="font-body-lg text-on-primary/70">
                        Tim ahli kami siap memberikan solusi keamanan dan manajemen fasilitas terbaik yang disesuaikan dengan profil bisnis Anda.
                    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-6">
    <button className="bg-secondary text-on-secondary px-10 py-5 rounded-xl font-label-md hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-3" type="button" onClick={() => onNavigate("kontak")}>
    <span className="material-symbols-outlined">mail</span>
                            Hubungi Tim Kami
                        </button>
    <button className="bg-surface text-primary px-10 py-5 rounded-xl font-label-md hover:bg-secondary hover:text-on-secondary transition-all shadow-xl flex items-center justify-center gap-3" type="button" onClick={() => window.open(whatsappUrl, "_blank", "noopener,noreferrer")}>
    <span className="material-symbols-outlined">chat</span>
                            Konsultasi via WhatsApp
                        </button>
    </div>
    </div>
    </div>
    </section>
    </div>
    
    
  );
}
