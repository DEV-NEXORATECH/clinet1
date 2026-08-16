export default function AboutPage({ onNavigate }) {
  return (
    <div className="flex flex-col w-full">
    
    <section className="relative w-full h-[70vh] flex items-end overflow-hidden">
    <div className="absolute inset-0 z-0">
    <img alt="SGC Personnel Briefing" className="w-full h-full object-cover" src="/images/IMG-20260704-WA0597.jpg"/>
    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent"></div>
    </div>
    <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop pb-20 w-full">
    <div className="max-w-4xl">
    <span className="font-label-md text-label-md text-secondary-container tracking-[0.2em] uppercase mb-6 block">Profil Perusahaan</span>
    <h1 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-on-primary leading-tight">
                        Membangun Kepercayaan Lewat <br className="hidden lg:block"/> <span className="text-secondary-container italic">Disiplin dan Integritas.</span>
    </h1>
    </div>
    </div>
    </section>
    
    <section className="py-24 bg-surface">
    <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
    <div className="lg:col-span-5 flex flex-col gap-8">
    <div className="w-20 h-1 bg-secondary"></div>
    <h2 className="font-headline-xl text-headline-xl text-primary">Standar Keamanan Tertinggi dengan Pendekatan Mutakhir.</h2>
    <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                            PT Sentra Garuda Cakra Pratama (SGC) (SGC) hadir sebagai manifestasi dari kebutuhan akan layanan keamanan dan manajemen fasilitas yang tidak hanya bersifat reaktif, namun strategis dan terukur. Didirikan dengan landasan kedisiplinan militer yang diadaptasi untuk kebutuhan korporasi modern.
                        </p>
    </div>
    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="p-8 bg-surface-container-low rounded-xl shadow-sm hover:shadow-md transition-shadow">
    <span className="material-symbols-outlined text-secondary mb-4 text-4xl">history_edu</span>
    <h3 className="font-headline-md text-headline-md mb-3">Sejarah Kami</h3>
    <p className="font-body-md text-body-md text-on-surface-variant">Bermula dari sinergi pakar keamanan nasional, kami telah bertransformasi menjadi mitra strategis yang dipercaya untuk melindungi aset vital dan korporasi berskala besar di Indonesia.</p>
    </div>
    <div className="p-8 bg-primary text-on-primary rounded-xl shadow-xl">
    <span className="material-symbols-outlined text-secondary-container mb-4 text-4xl">verified_user</span>
    <h3 className="font-headline-md text-headline-md mb-3">Identitas SGC</h3>
    <p className="font-body-md text-body-md opacity-80">Lebih dari sekadar penyedia layanan, kami adalah garda terdepan Anda. Setiap personel SGC merupakan wujud nyata dari komitmen tanpa batas demi keamanan dan kenyamanan operasional klien.</p>
    </div>
    </div>
    </div>
    </div>
    </section>
    
    <section className="w-full bg-surface-container-high py-24">
    <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-20">
    <div className="space-y-12">
    <div>
    <div className="inline-block px-4 py-1 bg-secondary/10 text-secondary font-label-md text-label-md rounded-full mb-4">VISI KAMI</div>
    <h3 className="font-display-lg text-[48px] leading-tight text-primary mb-6">Menjadi Pionir dan Standar Emas dalam Industri Layanan Keamanan Nasional.</h3>
    <p className="font-body-lg text-body-lg text-on-surface-variant">Kami berambisi untuk mendefinisikan ulang keamanan melalui integrasi teknologi canggih dan sumber daya manusia yang memiliki kompetensi di atas rata-rata industri.</p>
    </div>
    <div className="relative group overflow-hidden rounded-2xl h-80 shadow-2xl">
    <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Close up of a professional security control room with multiple monitors showing surveillance footage, high-tech command center environment with deep blue and black tones, soft glowing lights." src="/images/IMG-20260704-WA0599.jpg"/>
    <div className="absolute inset-0 bg-primary/20"></div>
    </div>
    </div>
    <div className="space-y-8">
    <div className="inline-block px-4 py-1 bg-secondary/10 text-secondary font-label-md text-label-md rounded-full mb-4">MISI KAMI</div>
    <div className="space-y-6">
    <div className="flex gap-6 items-start group">
    <div className="w-12 h-12 shrink-0 bg-primary text-on-primary flex items-center justify-center rounded-lg font-headline-md">01</div>
    <div>
    <h4 className="font-headline-md text-headline-md mb-2 group-hover:text-secondary transition-colors">Integritas Operasional</h4>
    <p className="font-body-md text-body-md text-on-surface-variant">Menyelenggarakan jasa pengamanan dengan ketaatan hukum dan etika profesional yang tinggi.</p>
    </div>
    </div>
    <div className="flex gap-6 items-start group">
    <div className="w-12 h-12 shrink-0 bg-primary text-on-primary flex items-center justify-center rounded-lg font-headline-md">02</div>
    <div>
    <h4 className="font-headline-md text-headline-md mb-2 group-hover:text-secondary transition-colors">Pengembangan SDM</h4>
    <p className="font-body-md text-body-md text-on-surface-variant">Mencetak personel yang tangguh melalui pelatihan berstandar internasional secara berkelanjutan.</p>
    </div>
    </div>
    <div className="flex gap-6 items-start group">
    <div className="w-12 h-12 shrink-0 bg-primary text-on-primary flex items-center justify-center rounded-lg font-headline-md">03</div>
    <div>
    <h4 className="font-headline-md text-headline-md mb-2 group-hover:text-secondary transition-colors">Kepuasan Klien</h4>
    <p className="font-body-md text-body-md text-on-surface-variant">Memberikan solusi yang dipersonalisasi sesuai profil risiko unik dari setiap mitra bisnis.</p>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
    
    <section className="py-24 bg-surface">
    <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop text-center mb-16">
    <h2 className="font-headline-xl text-headline-xl text-primary mb-4">Nilai-Nilai Utama (Core Values)</h2>
    <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Filosofi yang tertanam dalam setiap tindakan dan keputusan setiap anggota SGC.</p>
    </div>
    <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
    
    <div className="flex flex-col items-center p-6 text-center group hover:bg-surface-container transition-all rounded-xl">
    <div className="w-16 h-16 rounded-full bg-secondary/5 flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-on-secondary transition-all">
    <span className="material-symbols-outlined text-3xl">military_tech</span>
    </div>
    <h4 className="font-label-md text-label-md font-bold tracking-wider">DISIPLIN</h4>
    </div>
    <div className="flex flex-col items-center p-6 text-center group hover:bg-surface-container transition-all rounded-xl">
    <div className="w-16 h-16 rounded-full bg-secondary/5 flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-on-secondary transition-all">
    <span className="material-symbols-outlined text-3xl">gavel</span>
    </div>
    <h4 className="font-label-md text-label-md font-bold tracking-wider">INTEGRITAS</h4>
    </div>
    <div className="flex flex-col items-center p-6 text-center group hover:bg-surface-container transition-all rounded-xl">
    <div className="w-16 h-16 rounded-full bg-secondary/5 flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-on-secondary transition-all">
    <span className="material-symbols-outlined text-3xl">assignment_ind</span>
    </div>
    <h4 className="font-label-md text-label-md font-bold tracking-wider">TANGGUNG JAWAB</h4>
    </div>
    <div className="flex flex-col items-center p-6 text-center group hover:bg-surface-container transition-all rounded-xl">
    <div className="w-16 h-16 rounded-full bg-secondary/5 flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-on-secondary transition-all">
    <span className="material-symbols-outlined text-3xl">bolt</span>
    </div>
    <h4 className="font-label-md text-label-md font-bold tracking-wider">RESPONSIF</h4>
    </div>
    <div className="flex flex-col items-center p-6 text-center group hover:bg-surface-container transition-all rounded-xl">
    <div className="w-16 h-16 rounded-full bg-secondary/5 flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-on-secondary transition-all">
    <span className="material-symbols-outlined text-3xl">workspace_premium</span>
    </div>
    <h4 className="font-label-md text-label-md font-bold tracking-wider">PROFESIONAL</h4>
    </div>
    <div className="flex flex-col items-center p-6 text-center group hover:bg-surface-container transition-all rounded-xl">
    <div className="w-16 h-16 rounded-full bg-secondary/5 flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-on-secondary transition-all">
    <span className="material-symbols-outlined text-3xl">groups</span>
    </div>
    <h4 className="font-label-md text-label-md font-bold tracking-wider">KOLABORASI</h4>
    </div>
    </div>
    </section>
    
    <section className="py-24 bg-primary text-on-primary overflow-hidden relative">
    <div className="absolute right-0 top-0 opacity-10 pointer-events-none">
    <svg aria-hidden="true" fill="none" height="400" viewBox="0 0 100 100" width="400" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 0L100 25V75L50 100L0 75V25L50 0Z" fill="white"></path>
    </svg>
    </div>
    <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
    <div className="relative z-10">
    <h2 className="font-display-lg text-display-lg-mobile lg:text-display-lg mb-8">Komitmen Pelayanan Kami</h2>
    <div className="space-y-8">
    <div className="flex gap-4">
    <span className="material-symbols-outlined text-secondary-container">check_circle</span>
    <div>
    <h4 className="font-headline-md text-headline-md mb-2">Respon Cepat 24/7</h4>
    <p className="font-body-md text-body-md opacity-70">Tim reaksi cepat kami selalu siaga untuk menangani segala bentuk insiden dalam waktu singkat.</p>
    </div>
    </div>
    <div className="flex gap-4">
    <span className="material-symbols-outlined text-secondary-container">check_circle</span>
    <div>
    <h4 className="font-headline-md text-headline-md mb-2">Transparansi Operasional</h4>
    <p className="font-body-md text-body-md opacity-70">Laporan harian dan analitik keamanan berbasis aplikasi untuk aksesibilitas data klien secara real-time.</p>
    </div>
    </div>
    </div>
    </div>
    <div className="relative">
    <img className="w-full aspect-square object-cover rounded-3xl shadow-2xl" data-alt="A sharp, professionally dressed security officer in a modern tactical uniform standing confidently in front of a sleek corporate building glass facade, holding a digital tablet, daytime clear lighting, cinematic composition." src="/images/IMG-20260704-WA0591.jpg"/>
    <div className="absolute -bottom-10 -left-10 bg-secondary p-8 rounded-2xl hidden lg:block">
    <p className="font-display-lg text-on-secondary">100%</p>
    <p className="font-label-md text-on-secondary opacity-80 uppercase tracking-widest">Customer Satisfaction</p>
    </div>
    </div>
    </div>
    </section>
    
    <section className="py-24 bg-surface-container-low">
    <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop">
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
    <div className="max-w-2xl">
    <h2 className="font-headline-xl text-headline-xl text-primary mb-4">Standar Ketat Rekrutmen SDM</h2>
    <p className="font-body-lg text-body-lg text-on-surface-variant">Kami memastikan hanya individu terbaik dengan mentalitas baja dan rekam jejak bersih yang bergabung dalam unit kami.</p>
    </div>
    <button className="bg-primary text-on-primary px-8 py-4 rounded-full font-label-md text-label-md hover:bg-secondary transition-all shadow-lg flex items-center gap-2" type="button" onClick={() => onNavigate("rekrutmen")}>
                        Gabung Bersama Kami <span className="material-symbols-outlined">trending_flat</span>
    </button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    
    <div className="bg-surface p-10 rounded-2xl shadow-sm border border-outline-variant/30 flex flex-col justify-between h-80 hover:-translate-y-2 transition-transform">
    <span className="text-6xl font-display-lg text-secondary/10">01</span>
    <div>
    <h4 className="font-headline-md text-headline-md mb-2">Vetting Ketat</h4>
    <p className="font-body-md text-body-md text-on-surface-variant">Pemeriksaan latar belakang komprehensif termasuk rekam jejak kriminal dan integritas pribadi.</p>
    </div>
    </div>
    
    <div className="bg-surface p-10 rounded-2xl shadow-sm border border-outline-variant/30 flex flex-col justify-between h-80 hover:-translate-y-2 transition-transform">
    <span className="text-6xl font-display-lg text-secondary/10">02</span>
    <div>
    <h4 className="font-headline-md text-headline-md mb-2">Uji Kompetensi</h4>
    <p className="font-body-md text-body-md text-on-surface-variant">Tes fisik, psikologis, dan keterampilan taktis yang disesuaikan dengan standar industri.</p>
    </div>
    </div>
    
    <div className="bg-surface p-10 rounded-2xl shadow-sm border border-outline-variant/30 flex flex-col justify-between h-80 hover:-translate-y-2 transition-transform">
    <span className="text-6xl font-display-lg text-secondary/10">03</span>
    <div>
    <h4 className="font-headline-md text-headline-md mb-2">Pelatihan Khusus</h4>
    <p className="font-body-md text-body-md text-on-surface-variant">Program orientasi intensif mengenai etika layanan, pertolongan pertama, dan prosedur darurat.</p>
    </div>
    </div>
    
    <div className="bg-primary p-10 rounded-2xl shadow-xl flex flex-col justify-between h-80 hover:-translate-y-2 transition-transform">
    <span className="text-6xl font-display-lg text-white/10">04</span>
    <div>
    <h4 className="font-headline-md text-headline-md text-on-primary mb-2">Sertifikasi & Penempatan</h4>
    <p className="font-body-md text-body-md text-on-primary opacity-70">Pemberian atribut resmi dan penugasan ke lokasi yang sesuai dengan profil keahlian personel.</p>
    </div>
    </div>
    </div>
    </div>
    </section>
    
    
    <section className="py-24 bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop text-center mb-16">
        <h2 className="font-headline-xl text-headline-xl text-primary mb-4">Jajaran Manajemen</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Dipimpin oleh para profesional berpengalaman dari latar belakang keamanan strategis, manajemen SGC memastikan standar tertinggi dalam setiap operasi.</p>
      </div>
      <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center group">
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-surface shadow-xl">
            <img src="/images/IMG-20260704-WA0617.jpg" alt="Direktur Utama" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
          </div>
          <h4 className="font-headline-md text-headline-md text-primary">Nama Direktur Utama</h4>
          <p className="font-label-md text-label-md text-secondary mt-1 uppercase tracking-wider">Direktur Utama</p>
        </div>
        <div className="text-center group">
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-surface shadow-xl">
            <img src="/images/IMG-20260704-WA0585.jpg" alt="Direktur Operasional" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
          </div>
          <h4 className="font-headline-md text-headline-md text-primary">Nama Direktur Operasional</h4>
          <p className="font-label-md text-label-md text-secondary mt-1 uppercase tracking-wider">Direktur Operasional</p>
        </div>
        <div className="text-center group">
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-surface shadow-xl">
            <img src="/images/IMG-20260704-WA0642.jpg" alt="Manajer Pelatihan" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
          </div>
          <h4 className="font-headline-md text-headline-md text-primary">Nama Manajer Pelatihan</h4>
          <p className="font-label-md text-label-md text-secondary mt-1 uppercase tracking-wider">Manajer Pelatihan & SDM</p>
        </div>
      </div>
    </section>

    <section className="py-20 bg-surface">
    <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop">
    <div className="relative w-full rounded-[40px] overflow-hidden bg-secondary px-8 py-16 md:p-20 text-center">
    <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
    <div className="relative z-10 max-w-3xl mx-auto">
    <h2 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-on-secondary mb-6">Siap Mengamankan Aset Berharga Anda?</h2>
    <p className="font-body-lg text-body-lg text-on-secondary opacity-90 mb-10">Konsultasikan kebutuhan keamanan dan manajemen fasilitas Anda dengan tenaga ahli kami hari ini.</p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <button className="px-10 py-5 bg-primary text-on-primary rounded-xl font-label-md text-label-md hover:scale-105 transition-transform shadow-2xl" type="button" onClick={() => onNavigate("kontak")}>Hubungi Kami</button>
    <button className="px-10 py-5 bg-transparent border-2 border-on-secondary text-on-secondary rounded-xl font-label-md text-label-md hover:bg-on-secondary hover:text-secondary transition-all" type="button" onClick={() => onNavigate("layanan")}>Lihat Layanan</button>
    </div>
    </div>
    </div>
    </div>
    </section>
    </div>
    
    
  );
}
