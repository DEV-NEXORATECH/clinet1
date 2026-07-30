export default function ServicesPage({ onNavigate }) {
  const scrollToSection = (event, id) => {
    event.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;
    window.scrollTo({ top: target.offsetTop - 120, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col w-full">
    
    <section className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop py-12 lg:py-20 flex flex-col items-start w-full">
    <div className="flex items-center gap-2 mb-4 text-on-surface-variant/60">
    <span className="font-label-md text-label-md uppercase tracking-widest">Beranda</span>
    <span className="material-symbols-outlined text-[14px]">chevron_right</span>
    <span className="font-label-md text-label-md uppercase tracking-widest text-secondary">Layanan Kami</span>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter w-full">
    <h1 className="col-span-1 lg:col-span-7 font-display-lg text-display-lg-mobile lg:text-display-lg text-primary">
                    Solusi Manajemen <br/>
    <span className="text-secondary italic">Fasilitas & Keamanan</span> <br/>
                    Terintegrasi.
                </h1>
    <p className="col-span-1 lg:col-span-5 self-end font-body-lg text-body-lg text-on-surface-variant leading-relaxed pb-2">
                    Kami menyediakan standar operasional kelas dunia untuk melindungi aset Anda dan memastikan efisiensi lingkungan kerja yang maksimal melalui tiga pilar utama layanan kami.
                </p>
    </div>
    </section>
    
    <div className="sticky top-20 z-40 bg-surface/90 backdrop-blur-md border-b border-surface-container-high hidden lg:block">
    <div className="max-w-container-max mx-auto px-margin-desktop h-16 flex items-center gap-12">
    <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-all flex items-center gap-2 group" href="#keamanan" onClick={(event) => scrollToSection(event, "keamanan")}>
    <span className="w-1.5 h-1.5 rounded-full bg-secondary scale-0 group-hover:scale-100 transition-transform"></span>
                    JASA PENGAMANAN
                </a>
    <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-all flex items-center gap-2 group" href="#cleaning" onClick={(event) => scrollToSection(event, "cleaning")}>
    <span className="w-1.5 h-1.5 rounded-full bg-secondary scale-0 group-hover:scale-100 transition-transform"></span>
                    CLEANING SERVICE
                </a>
    <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-all flex items-center gap-2 group" href="#officeboy" onClick={(event) => scrollToSection(event, "officeboy")}>
    <span className="w-1.5 h-1.5 rounded-full bg-secondary scale-0 group-hover:scale-100 transition-transform"></span>
                    OFFICE BOY & SUPPORT
                </a>
    </div>
    </div>
    
    <section className="w-full py-20 lg:py-32" id="keamanan">
    <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop">
    <div className="flex flex-col lg:flex-row gap-16 items-start">
    <div className="w-full lg:w-1/2 relative group">
    <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/10 -z-10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-all duration-700"></div>
    <div className="overflow-hidden rounded-2xl shadow-xl">
    <img alt="Security Professional" className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNh8gkyZaEyGL3wkw8uBsdENQFClfTqK5q9XJ3eNg6Gvq0ZxAbXWkZ6WQA-tsqS1DMCoLnHuYC1CWh7l2gHHDvsvJ65WvexHNx_u5glboX9FHJRd9t1e-UXqvEtIecCZvl-x7lK97J-ZTM0qzws2FUIwQrX4OsyWFcV7J-YPgoOoPvfB6mpJCC2jkp0-LiThbC9-8HugXw4Hgs_2KEvQJVxRuIlStRnEKeFumB0EOb1g_acVi_A6o"/>
    </div>
    <div className="absolute -bottom-8 -right-8 bg-primary text-on-primary p-8 hidden lg:block max-w-[240px]">
    <span className="font-headline-xl text-headline-xl block mb-2">01</span>
    <p className="font-label-md text-label-md opacity-70 uppercase tracking-widest">Keamanan Nasional Berstandar Internasional</p>
    </div>
    </div>
    <div className="w-full lg:w-1/2 pt-8">
    <span className="text-secondary font-label-md text-label-md tracking-[0.2em] uppercase mb-6 block">Premium Protection</span>
    <h2 className="font-headline-xl text-headline-xl text-primary mb-8">Jasa Pengamanan (Security Services)</h2>
    <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 leading-relaxed">
                            Kami menghadirkan personel terlatih yang dibekali dengan kedisiplinan militer dan etika pelayanan profesional untuk menjaga aset, personil, dan keberlangsungan bisnis Anda.
                        </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
    <div className="space-y-4">
    <div className="flex items-start gap-4">
    <span className="material-symbols-outlined text-secondary">verified_user</span>
    <div>
    <h4 className="font-headline-md text-headline-md text-primary mb-1 text-[18px]">Patroli & Pengawasan</h4>
    <p className="font-body-md text-body-md text-on-surface-variant opacity-80">Pemantauan rutin 24/7 di seluruh area vital properti.</p>
    </div>
    </div>
    <div className="flex items-start gap-4">
    <span className="material-symbols-outlined text-secondary">security</span>
    <div>
    <h4 className="font-headline-md text-headline-md text-primary mb-1 text-[18px]">Access Control</h4>
    <p className="font-body-md text-body-md text-on-surface-variant opacity-80">Manajemen lalu lintas manusia dan kendaraan yang ketat.</p>
    </div>
    </div>
    </div>
    <div className="space-y-4">
    <div className="flex items-start gap-4">
    <span className="material-symbols-outlined text-secondary">emergency</span>
    <div>
    <h4 className="font-headline-md text-headline-md text-primary mb-1 text-[18px]">Emergency Response</h4>
    <p className="font-body-md text-body-md text-on-surface-variant opacity-80">Tanggap darurat cepat untuk insiden medis atau bencana.</p>
    </div>
    </div>
    <div className="flex items-start gap-4">
    <span className="material-symbols-outlined text-secondary">monitoring</span>
    <div>
    <h4 className="font-headline-md text-headline-md text-primary mb-1 text-[18px]">CCTV Monitoring</h4>
    <p className="font-body-md text-body-md text-on-surface-variant opacity-80">Sistem integrasi kamera dengan pengawasan real-time.</p>
    </div>
    </div>
    </div>
    </div>
    <button className="bg-primary text-on-primary px-10 py-5 rounded-full font-label-md text-label-md hover:bg-secondary transition-all shadow-lg flex items-center gap-3" type="button" onClick={() => onNavigate("kontak")}>
                            Dapatkan Penawaran Keamanan
                            <span className="material-symbols-outlined">arrow_forward</span>
    </button>
    </div>
    </div>
    </div>
    </section>
    
    <section className="w-full py-20 lg:py-32 bg-surface-container-low relative overflow-hidden" id="cleaning">
    <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop">
    <div className="flex flex-col-reverse lg:flex-row gap-16 items-center">
    <div className="w-full lg:w-1/2">
    <span className="text-secondary font-label-md text-label-md tracking-[0.2em] uppercase mb-6 block">Hygiene Excellence</span>
    <h2 className="font-headline-xl text-headline-xl text-primary mb-8">Professional Cleaning Service</h2>
    <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 leading-relaxed">
                            Lingkungan yang bersih adalah kunci produktivitas. Kami menggunakan peralatan modern dan chemical ramah lingkungan untuk memastikan setiap sudut gedung Anda tetap higienis.
                        </p>
    <div className="space-y-6 mb-12">
    <div className="bg-surface p-6 rounded-xl flex items-center justify-between group hover:shadow-md transition-all cursor-default">
    <div className="flex items-center gap-4">
    <div className="w-12 h-12 rounded-full bg-secondary-fixed-dim flex items-center justify-center text-on-secondary-fixed">
    <span className="material-symbols-outlined">cleaning_services</span>
    </div>
    <div>
    <h4 className="font-headline-md text-headline-md text-primary text-[18px]">Daily Routine Cleaning</h4>
    <p className="font-body-md text-body-md text-on-surface-variant">Pembersihan area kantor, lobi, dan toilet setiap hari.</p>
    </div>
    </div>
    <span className="material-symbols-outlined text-secondary opacity-0 group-hover:opacity-100 transition-opacity">add_circle</span>
    </div>
    <div className="bg-surface p-6 rounded-xl flex items-center justify-between group hover:shadow-md transition-all cursor-default">
    <div className="flex items-center gap-4">
    <div className="w-12 h-12 rounded-full bg-secondary-fixed-dim flex items-center justify-center text-on-secondary-fixed">
    <span className="material-symbols-outlined">window</span>
    </div>
    <div>
    <h4 className="font-headline-md text-headline-md text-primary text-[18px]">Glass & Facade Cleaning</h4>
    <p className="font-body-md text-body-md text-on-surface-variant">Perawatan kaca eksterior dengan tim tersertifikasi K3.</p>
    </div>
    </div>
    <span className="material-symbols-outlined text-secondary opacity-0 group-hover:opacity-100 transition-opacity">add_circle</span>
    </div>
    <div className="bg-surface p-6 rounded-xl flex items-center justify-between group hover:shadow-md transition-all cursor-default">
    <div className="flex items-center gap-4">
    <div className="w-12 h-12 rounded-full bg-secondary-fixed-dim flex items-center justify-center text-on-secondary-fixed">
    <span className="material-symbols-outlined">layers</span>
    </div>
    <div>
    <h4 className="font-headline-md text-headline-md text-primary text-[18px]">Deep & Specialized Cleaning</h4>
    <p className="font-body-md text-body-md text-on-surface-variant">Kristalisasi marmer, pencucian karpet, dan sanitasi berkala.</p>
    </div>
    </div>
    <span className="material-symbols-outlined text-secondary opacity-0 group-hover:opacity-100 transition-opacity">add_circle</span>
    </div>
    </div>
    <button className="border-2 border-primary text-primary px-10 py-5 rounded-full font-label-md text-label-md hover:bg-primary hover:text-on-primary transition-all shadow-md" type="button" onClick={() => onNavigate("kontak")}>
                            Jadwalkan Survey Lokasi
                        </button>
    </div>
    <div className="w-full lg:w-1/2 relative">
    <div className="aspect-square bg-surface rounded-full absolute -z-10 w-[120%] -right-1/4 -top-1/4 opacity-50 blur-3xl"></div>
    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
    <img alt="Cleaning Staff at Work" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAudw132N_-hZJuXRW2LxL-59lgCH_6gO_wGSMj2-xUtImRPAAbJ9CI0F-915NoOQVar96M99KkrJqbv5FAnHKlWLgI3nk3dLKn5rg06Be-8KHIsnn9Aw8gia3v1ftv642tBGZQH30-bn44fal4wIAllLoOboe9JzKuCPX4Fy-k_JrcIZ9RThHvQLcSkesUmr64UOzt2UictPZmTlVebVTb3SjAlrg6hNTmDn5QVKsn2OHrB8i3WEw"/>
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-12">
    <div className="flex items-center gap-4 text-white">
    <span className="font-display-lg text-[64px] font-bold text-secondary">99%</span>
    <p className="font-label-md text-label-md uppercase leading-tight tracking-widest opacity-80">Tingkat Kepuasan<br/>Kebersihan Klien</p>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
    
    <section className="w-full py-20 lg:py-40 relative overflow-hidden" id="officeboy">
    
    <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2"></div>
    <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
    <div className="lg:col-span-5 order-2 lg:order-1">
    <div className="relative">
    <img alt="Office Boy Service" className="w-full rounded-[40px] shadow-2xl relative z-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANz_Kyauv0pOKfj0ceCo1H3FWHyVRl-D7vnQjzgikVAko72X2d6LCWm4DwET5SuH-dGBPNqjzgjamScpVPmh8CKPogoI3rCiQvhTfVjVHAvssV9dzG58Y3R-qFHeTnvPoGvv5W-r0QrYBxvroITLWYzYlqsQs6j1b0-kv_amm4HFtdy9ygRYdY5hdhCTB5SJVObexJi1enrcf8Ft6nVlnVP6FyucHkhFGMfPCb_TRgaU1yxwD1rrM"/>
    <div className="absolute -bottom-10 -left-10 w-48 h-48 border-[16px] border-secondary-fixed rounded-full -z-0"></div>
    </div>
    </div>
    <div className="lg:col-span-7 order-1 lg:order-2">
    <div className="flex items-center gap-4 mb-8">
    <div className="h-px w-20 bg-secondary"></div>
    <span className="text-secondary font-label-md text-label-md tracking-[0.2em] uppercase">Operational Support</span>
    </div>
    <h2 className="font-headline-xl text-headline-xl text-primary mb-10">Office Boy & Building Support</h2>
    <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-2xl">
                            Tingkatkan fokus tim inti Anda dengan menyerahkan detail operasional harian kepada tenaga support kami yang andal, sopan, dan cekatan.
                        </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
    <div className="group">
    <h5 className="font-headline-md text-headline-md text-primary mb-4 flex items-center gap-3">
    <span className="text-secondary font-bold">01.</span>
                                    Meeting Preparation
                                </h5>
    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                                    Penataan ruang rapat, penyiapan alat presentasi, dan pengelolaan konsumsi selama acara berlangsung.
                                </p>
    </div>
    <div className="group">
    <h5 className="font-headline-md text-headline-md text-primary mb-4 flex items-center gap-3">
    <span className="text-secondary font-bold">02.</span>
                                    Pantry Management
                                </h5>
    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                                    Menjaga stok kebutuhan pantry dan melayani kebutuhan minuman/makanan ringan untuk staf & tamu.
                                </p>
    </div>
    <div className="group">
    <h5 className="font-headline-md text-headline-md text-primary mb-4 flex items-center gap-3">
    <span className="text-secondary font-bold">03.</span>
                                    Mail & Document Flow
                                </h5>
    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                                    Pengelolaan pengiriman dokumen internal dan kurir antar-departemen secara efisien.
                                </p>
    </div>
    <div className="group">
    <h5 className="font-headline-md text-headline-md text-primary mb-4 flex items-center gap-3">
    <span className="text-secondary font-bold">04.</span>
                                    Facility Inventory
                                </h5>
    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                                    Pemantauan rutin ketersediaan alat tulis kantor (ATK) dan perlengkapan kebersihan.
                                </p>
    </div>
    </div>
    <button className="inline-flex items-center gap-4 text-primary font-headline-md text-headline-md group" type="button" onClick={() => onNavigate("kontak")}>
    <span className="relative">
                                Pelajari Selengkapnya
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary origin-left scale-x-100 group-hover:scale-x-50 transition-transform duration-300"></span>
    </span>
    <div className="w-12 h-12 rounded-full border border-primary flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-all">
    <span className="material-symbols-outlined">east</span>
    </div>
    </button>
    </div>
    </div>
    </div>
    </section>
    
    <section className="w-full py-24 bg-primary text-on-primary">
    <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop text-center">
    <h2 className="font-headline-xl text-headline-xl mb-6">Siap Mengamankan & Merawat Aset Anda?</h2>
    <p className="font-body-lg text-body-lg opacity-70 mb-12 max-w-2xl mx-auto">
                    Bicarakan kebutuhan spesifik gedung dan perusahaan Anda dengan tim ahli kami untuk solusi yang paling tepat guna.
                </p>
    <div className="flex flex-col sm:flex-row gap-6 justify-center">
    <button className="bg-secondary text-on-secondary px-12 py-5 rounded-lg font-label-md text-label-md hover:brightness-110 shadow-xl transition-all" type="button" onClick={() => onNavigate("kontak")}>
                        Hubungi Kami Sekarang
                    </button>
    <button className="border border-on-primary/30 text-on-primary px-12 py-5 rounded-lg font-label-md text-label-md hover:bg-white/10 transition-all" type="button">
                        Download Profil Perusahaan
                    </button>
    </div>
    </div>
    </section>
    </div>
    
  );
}
