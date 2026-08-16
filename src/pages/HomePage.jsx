import Counter from "../components/Counter.jsx";
import { whatsappUrl } from "../data/site.js";

export default function HomePage({ onNavigate }) {
  return (
    <div className="flex flex-col w-full overflow-hidden">
    
    <section className="relative w-full h-[90vh] flex items-center -mt-20">
    <div className="absolute inset-0 z-0">
    <img alt="Professional Indonesian security guard standing alert in front of a modern glass skyscraper entrance" className="w-full h-full object-cover" src="/images/IMG-20260704-WA0578.jpg"/>
    <div className="absolute inset-0 bg-gradient-to-r from-tertiary/80 via-tertiary/40 to-transparent"></div>
    </div>
    <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop w-full pt-20">
    <div className="max-w-3xl space-y-8 animate-[fadeInUp_1s_ease-out]">
    <div className="inline-flex items-center gap-3 bg-secondary/20 backdrop-blur-md px-4 py-2 rounded-full border border-secondary/30">
    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
    <span className="font-label-md text-label-md text-secondary-fixed-dim uppercase tracking-widest">Security & Facility Support Services</span>
    </div>
    <h1 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-on-primary leading-tight">
                        Mitra Keamanan & Manajemen Fasilitas Terpercaya untuk Korporasi Anda
                    </h1>
    <p className="font-body-lg text-body-lg text-on-primary/80 max-w-xl">
                        PT Sentra Garuda Cakra Pratama (SGC) memberikan solusi pengamanan terpadu dan pengelolaan fasilitas komprehensif. Kami menjamin ketenangan dan efisiensi operasional bisnis Anda melalui standar pelayanan kelas satu.
                    </p>
    <div className="flex flex-wrap gap-4 pt-4">
    <button className="bg-surface text-primary px-8 py-4 rounded-lg font-label-md text-label-md hover:scale-105 transition-all shadow-xl flex items-center gap-2" type="button" onClick={() => window.open('/company-profile.pdf', '_blank')}>
        <span className="material-symbols-outlined">download</span>
        Unduh Company Profile (PDF)
    </button>
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
    
    <section className="relative z-20 mt-8 lg:mt-12 max-w-container-max mx-auto w-full px-margin-mobile lg:px-margin-desktop">
    <div className="bg-surface-container-lowest shadow-2xl rounded-2xl grid grid-cols-2 lg:grid-cols-4 divide-x divide-outline-variant p-8 lg:p-12">
    <div className="flex flex-col items-center text-center p-4 group">
    <div className="w-14 h-14 rounded-xl bg-surface-container-high flex items-center justify-center mb-4 group-hover:bg-secondary/10 transition-colors">
    <span className="material-symbols-outlined text-secondary text-3xl">verified_user</span>
    </div>
    <h4 className="font-headline-md text-[18px] mb-1">SDM Unggul</h4>
    <p className="text-on-surface-variant text-sm">Rekrutmen ketat & pelatihan standar tinggi</p>
    </div>
    <div className="flex flex-col items-center text-center p-4 group">
    <div className="w-14 h-14 rounded-xl bg-surface-container-high flex items-center justify-center mb-4 group-hover:bg-secondary/10 transition-colors">
    <span className="material-symbols-outlined text-secondary text-3xl">military_tech</span>
    </div>
    <h4 className="font-headline-md text-[18px] mb-1">Kedisiplinan</h4>
    <p className="text-on-surface-variant text-sm">Etos kerja profesional tanpa kompromi</p>
    </div>
    <div className="flex flex-col items-center text-center p-4 group">
    <div className="w-14 h-14 rounded-xl bg-surface-container-high flex items-center justify-center mb-4 group-hover:bg-secondary/10 transition-colors">
    <span className="material-symbols-outlined text-secondary text-3xl">visibility</span>
    </div>
    <h4 className="font-headline-md text-[18px] mb-1">Berbasis Teknologi</h4>
    <p className="text-on-surface-variant text-sm">Monitoring operasional 24/7 secara real-time</p>
    </div>
    <div className="flex flex-col items-center text-center p-4 group">
    <div className="w-14 h-14 rounded-xl bg-surface-container-high flex items-center justify-center mb-4 group-hover:bg-secondary/10 transition-colors">
    <span className="material-symbols-outlined text-secondary text-3xl">handshake</span>
    </div>
    <h4 className="font-headline-md text-[18px] mb-1">Solusi Terukur</h4>
    <p className="text-on-surface-variant text-sm">Dirancang khusus sesuai profil bisnis Anda</p>
    </div>
    </div>
    </section>


    <section className="py-16 bg-surface-container-low border-y border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop">
            <p className="text-center text-on-surface-variant font-label-md uppercase tracking-[0.2em] mb-8">Dipercaya oleh Berbagai Perusahaan Terkemuka</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-4xl">corporate_fare</span><span className="font-headline-md">BinaKarya</span></div>
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-4xl">business_center</span><span className="font-headline-md">TechCorp</span></div>
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-4xl">real_estate_agent</span><span className="font-headline-md">Agung Lestari</span></div>
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-4xl">account_balance</span><span className="font-headline-md">Bank Nasional</span></div>
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-4xl">local_shipping</span><span className="font-headline-md">Logistik Global</span></div>
            </div>
        </div>
    </section>
    <section className="py-32 max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop">
    <div className="grid lg:grid-cols-2 gap-20 items-center">
    <div className="relative">
    <div className="absolute -top-6 -left-6 w-32 h-32 border-l-4 border-t-4 border-secondary/30"></div>
    <div className="rounded-3xl overflow-hidden shadow-2xl relative">
    <img alt="Morning briefing of a security team in a luxury office lobby" className="w-full aspect-[4/5] object-cover" src="/images/IMG-20260704-WA0580.jpg"/>
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
                            Dedikasi Kami untuk Keamanan dan Kesuksesan Bisnis Anda
                        </h2>
    </div>
    <p className="font-body-lg text-body-lg text-on-surface-variant">
                        Sebagai mitra strategis, PT Sentra Garuda Cakra Pratama (SGC) hadir untuk melindungi aset berharga dan mendukung kelancaran operasional perusahaan Anda. Kami memadukan tenaga profesional, teknologi pengawasan mutakhir, dan manajemen fasilitas yang akuntabel guna menciptakan lingkungan kerja yang produktif, aman, dan nyaman.
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
    <h2 className="font-display-lg text-headline-xl lg:text-display-lg mt-4">Layanan Komprehensif untuk Kelancaran Operasional Bisnis</h2>
    </div>
    <p className="font-body-md text-on-surface-variant max-w-sm">
                        Dari pengamanan tingkat tinggi hingga perawatan kebersihan gedung, SGC menghadirkan ekosistem layanan terpadu yang menjamin setiap aspek fasilitas Anda dikelola dengan standar kesempurnaan.
                    </p>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
    
    <div className="bg-surface group rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
    <div className="h-64 overflow-hidden relative">
    <img alt="Security guarding services" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="/images/IMG-20260704-WA0582.jpg"/>
    <div className="absolute top-4 left-4 bg-secondary text-on-secondary px-4 py-1 rounded-full text-xs font-bold">UTAMA</div>
    </div>
    <div className="p-8 space-y-6">
    <h3 className="font-headline-md text-headline-md">Security Guarding Services</h3>
    <p className="text-on-surface-variant line-clamp-3">Personel satuan pengamanan (SATPAM) profesional yang dilatih dengan ketat dalam mitigasi risiko, tanggap darurat, bela diri, serta etika pelayanan prima.</p>
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
    <img alt="Professional cleaning services" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="/images/IMG-20260704-WA0584.jpg"/>
    </div>
    <div className="p-8 space-y-6">
    <h3 className="font-headline-md text-headline-md">Professional Cleaning Service</h3>
    <p className="text-on-surface-variant line-clamp-3">Layanan kebersihan dan perawatan gedung menyeluruh. Didukung oleh tenaga terampil, peralatan modern, dan bahan kimia ramah lingkungan.</p>
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
    <img alt="Office support and general affair services" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="/images/IMG-20260704-WA0585.jpg"/>
    </div>
    <div className="p-8 space-y-6">
    <h3 className="font-headline-md text-headline-md">Office Support & General Affair</h3>
    <p className="text-on-surface-variant line-clamp-3">Penyediaan tenaga ahli untuk kelancaran administrasi dan operasional harian, memungkinkan perusahaan Anda untuk fokus pada bisnis inti.</p>
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
    <h2 className="font-display-lg text-headline-xl lg:text-display-lg mt-4">Alasan Korporasi Memilih Sentra Garuda Cakra</h2>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
    <div className="flex gap-6">
    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-secondary flex items-center justify-center text-secondary">
    <span className="material-symbols-outlined">verified</span>
    </div>
    <div>
    <h4 className="font-headline-md text-xl mb-3">Legalitas & Kepatuhan Penuh</h4>
    <p className="opacity-70 text-sm leading-relaxed">Perusahaan resmi terdaftar dengan izin operasional lengkap dari Mabes POLRI dan instansi terkait.</p>
    </div>
    </div>
    <div className="flex gap-6">
    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-secondary flex items-center justify-center text-secondary">
    <span className="material-symbols-outlined">psychology</span>
    </div>
    <div>
    <h4 className="font-headline-md text-xl mb-3">Sistem Manajemen Modern</h4>
    <p className="opacity-70 text-sm leading-relaxed">Didukung oleh teknologi pemantauan dan pelaporan digital untuk memberikan transparansi kinerja yang terukur.</p>
    </div>
    </div>
    <div className="flex gap-6">
    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-secondary flex items-center justify-center text-secondary">
    <span className="material-symbols-outlined">trending_up</span>
    </div>
    <div>
    <h4 className="font-headline-md text-xl mb-3">Pelatihan Berkelanjutan</h4>
    <p className="opacity-70 text-sm leading-relaxed">Program pelatihan berkala bagi personel untuk selalu sigap menghadapi dinamika dan tantangan lapangan.</p>
    </div>
    </div>
    <div className="flex gap-6">
    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-secondary flex items-center justify-center text-secondary">
    <span className="material-symbols-outlined">fact_check</span>
    </div>
    <div>
    <h4 className="font-headline-md text-xl mb-3">Quality Control & Audit Ketat</h4>
    <p className="opacity-70 text-sm leading-relaxed">Pengawasan berjenjang dan audit rutin guna memastikan standar layanan tetap prima dan tanpa celah.</p>
    </div>
    </div>
    <div className="flex gap-6">
    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-secondary flex items-center justify-center text-secondary">
    <span className="material-symbols-outlined">support_agent</span>
    </div>
    <div>
    <h4 className="font-headline-md text-xl mb-3">Quick Response Team (QRT)</h4>
    <p className="opacity-70 text-sm leading-relaxed">Tim tanggap darurat yang terlatih dan siap merespon insiden dalam waktu singkat, siaga 24/7.</p>
    </div>
    </div>
    <div className="flex gap-6">
    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-secondary flex items-center justify-center text-secondary">
    <span className="material-symbols-outlined">shield_with_heart</span>
    </div>
    <div>
    <h4 className="font-headline-md text-xl mb-3">Pendekatan Berorientasi Solusi</h4>
    <p className="opacity-70 text-sm leading-relaxed">Setiap strategi pengamanan dan pengelolaan didesain secara spesifik sesuai karakteristik bisnis Anda.</p>
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
    
    
    <section className="py-32 bg-surface-container">
        <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop">
            <div className="text-center mb-16">
                <span className="font-label-md text-secondary uppercase tracking-[0.2em]">Galeri Operasional</span>
                <h2 className="font-display-lg text-headline-xl lg:text-display-lg mt-4">Aktivitas & Profesionalisme Tim Kami</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden">
                    <img src="/images/PT.%20SENTRA%20GARUDA%20CAKRA%20PRATAMA%20002.jpg" alt="Galeri 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square">
                    <img src="/images/file_0000000082e881f9ad336c6c744a4b76.png" alt="Galeri 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square">
                    <img src="/images/file_00000000b3d082119ea3aa0b5e47c328.png" alt="Galeri 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square">
                    <img src="/images/file_00000000c8f881faa75cb3b34b7ba0c3.png" alt="Galeri 4" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square">
                    <img src="/images/file_00000000c9008230987452174ad6203e.png" alt="Galeri 5" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
                </div>
            </div>
            <div className="text-center mt-12">
                <button className="px-8 py-4 border border-secondary text-secondary font-label-md rounded-lg hover:bg-secondary hover:text-on-secondary transition-all" onClick={() => alert('Galeri selengkapnya akan segera hadir')}>Lihat Semua Galeri</button>
            </div>
        </div>
    </section>

    <section className="py-32 max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop">
        <div className="text-center mb-16">
            <span className="font-label-md text-secondary uppercase tracking-[0.2em]">Testimoni Klien</span>
            <h2 className="font-display-lg text-headline-xl lg:text-display-lg mt-4">Apa Kata Mereka tentang SGC?</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-lg border border-outline-variant/30 relative">
                <span className="material-symbols-outlined absolute top-6 right-6 text-5xl text-secondary/20">format_quote</span>
                <div className="flex gap-1 text-secondary mb-6">
                    <span className="material-symbols-outlined text-sm">star</span><span className="material-symbols-outlined text-sm">star</span><span className="material-symbols-outlined text-sm">star</span><span className="material-symbols-outlined text-sm">star</span><span className="material-symbols-outlined text-sm">star</span>
                </div>
                <p className="font-body-md text-on-surface-variant italic mb-8">"Sejak bekerjasama dengan PT Sentra Garuda Cakra Pratama, sistem keamanan di pabrik kami menjadi jauh lebih ketat dan terukur. Kedisiplinan personel mereka luar biasa."</p>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">AW</div>
                    <div>
                        <h5 className="font-headline-md">Bpk. Arief Wibowo</h5>
                        <p className="text-xs text-on-surface-variant">Operational Manager, Manufaktur</p>
                    </div>
                </div>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-lg border border-outline-variant/30 relative">
                <span className="material-symbols-outlined absolute top-6 right-6 text-5xl text-secondary/20">format_quote</span>
                <div className="flex gap-1 text-secondary mb-6">
                    <span className="material-symbols-outlined text-sm">star</span><span className="material-symbols-outlined text-sm">star</span><span className="material-symbols-outlined text-sm">star</span><span className="material-symbols-outlined text-sm">star</span><span className="material-symbols-outlined text-sm">star</span>
                </div>
                <p className="font-body-md text-on-surface-variant italic mb-8">"Tim kebersihan dari SGC sangat detail dan proaktif. Lingkungan kantor kami kini selalu prima, yang sangat berdampak positif pada produktivitas seluruh karyawan."</p>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">DR</div>
                    <div>
                        <h5 className="font-headline-md">Ibu Dian Rosita</h5>
                        <p className="text-xs text-on-surface-variant">HR & GA Director, Tech Company</p>
                    </div>
                </div>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-lg border border-outline-variant/30 relative">
                <span className="material-symbols-outlined absolute top-6 right-6 text-5xl text-secondary/20">format_quote</span>
                <div className="flex gap-1 text-secondary mb-6">
                    <span className="material-symbols-outlined text-sm">star</span><span className="material-symbols-outlined text-sm">star</span><span className="material-symbols-outlined text-sm">star</span><span className="material-symbols-outlined text-sm">star</span><span className="material-symbols-outlined text-sm">star</span>
                </div>
                <p className="font-body-md text-on-surface-variant italic mb-8">"Respon cepat (QRT) dari manajemen SGC saat terjadi kondisi darurat sangat mengesankan. Kami merasa benar-benar memiliki partner operasional yang bisa diandalkan 24 jam."</p>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">HS</div>
                    <div>
                        <h5 className="font-headline-md">Bpk. Hendra Saputra</h5>
                        <p className="text-xs text-on-surface-variant">Property Manager, Real Estate</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="py-32 bg-surface">
    <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop">
    <div className="text-center mb-20">
    <span className="font-label-md text-secondary uppercase tracking-[0.2em]">Metodologi Kerja</span>
    <h2 className="font-display-lg text-headline-xl lg:text-display-lg mt-4">Sistem Kemitraan Strategis yang Transparan</h2>
    </div>
    <div className="relative">
    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-outline-variant -translate-y-1/2 z-0"></div>
    <div className="grid lg:grid-cols-5 gap-8 relative z-10">
    <div className="bg-surface p-8 rounded-2xl shadow-md flex flex-col items-center text-center space-y-4 hover:-translate-y-2 transition-transform duration-300">
    <div className="w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center font-bold">1</div>
    <h5 className="font-headline-md text-lg">Konsultasi & Asesmen</h5>
    <p className="text-sm opacity-70">Identifikasi detail kebutuhan operasional & pemetaan risiko komprehensif pada area Anda.</p>
    </div>
    <div className="bg-surface p-8 rounded-2xl shadow-md flex flex-col items-center text-center space-y-4 hover:-translate-y-2 transition-transform duration-300">
    <div className="w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center font-bold">2</div>
    <h5 className="font-headline-md text-lg">Perencanaan Strategis</h5>
    <p className="text-sm opacity-70">Penyusunan Standard Operating Procedure (SOP) dan Service Level Agreement (SLA) yang terukur.</p>
    </div>
    <div className="bg-surface p-8 rounded-2xl shadow-md flex flex-col items-center text-center space-y-4 hover:-translate-y-2 transition-transform duration-300">
    <div className="w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center font-bold">3</div>
    <h5 className="font-headline-md text-lg">Mobilisasi & Transisi</h5>
    <p className="text-sm opacity-70">Pengerahan personel terpilih dan serah-terima operasional yang mulus tanpa mengganggu aktivitas bisnis.</p>
    </div>
    <div className="bg-surface p-8 rounded-2xl shadow-md flex flex-col items-center text-center space-y-4 hover:-translate-y-2 transition-transform duration-300">
    <div className="w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center font-bold">4</div>
    <h5 className="font-headline-md text-lg">Pelaksanaan Operasional</h5>
    <p className="text-sm opacity-70">Implementasi tugas harian dengan disiplin tinggi sesuai SOP dan arahan strategis perusahaan.</p>
    </div>
    <div className="bg-surface p-8 rounded-2xl shadow-md flex flex-col items-center text-center space-y-4 hover:-translate-y-2 transition-transform duration-300">
    <div className="w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center font-bold">5</div>
    <h5 className="font-headline-md text-lg">Evaluasi & Monitoring</h5>
    <p className="text-sm opacity-70">Laporan kinerja rutin, audit lapangan, dan evaluasi berkelanjutan demi kepuasan klien.</p>
    </div>
    </div>
    </div>
    </div>
    </section>
    
    <section className="relative py-32 overflow-hidden">
    <div className="absolute inset-0 z-0">
    <div className="w-full h-full bg-cover bg-center scale-110" data-alt="Stunning cinematic wide shot of a modern glass corporate headquarters at dusk, lights glowing warmly from inside, symbolizing growth, stability, and round-the-clock protection by Sentra Garuda Cakra" style={{backgroundImage: 'url("/images/IMG-20260704-WA0586.jpg")'}}></div>
    <div className="absolute inset-0 bg-tertiary/80 backdrop-blur-sm"></div>
    </div>
    <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop text-center">
    <div className="max-w-3xl mx-auto space-y-10">
    <h2 className="font-display-lg text-headline-xl lg:text-display-lg text-on-primary">Tingkatkan Standar Keamanan & Profesionalisme Fasilitas Anda Hari Ini</h2>
    <p className="font-body-lg text-on-primary/70">
                        Tim ahli SGC siap merancang solusi keamanan dan manajemen fasilitas berkelas yang disesuaikan dengan kebutuhan unik korporasi Anda.
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
