import { useState } from "react";

export default function CareersPage({ onNavigate }) {
  const [submitted, setSubmitted] = useState(false);
  const [files, setFiles] = useState({
    fileCV: "Upload CV",
    fileKTP: "Upload KTP",
    fileCert: "Sertifikat"
  });

  const handleFileChange = (event) => {
    const fileName = event.target.files?.[0]?.name;
    if (!fileName) return;

    setFiles((current) => ({
      ...current,
      [event.target.id]: fileName.length > 15 ? `${fileName.slice(0, 12)}...` : fileName
    }));
  };

  const resetForm = () => {
    setSubmitted(false);
    setFiles({
      fileCV: "Upload CV",
      fileKTP: "Upload KTP",
      fileCert: "Sertifikat"
    });
  };

  return (
    <div className="flex flex-col w-full">
    
    <section className="relative w-full overflow-hidden bg-tertiary pt-24 pb-40">
    <div className="absolute inset-0 opacity-20">
    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,#7c5800_0%,transparent_50%)]"></div>
    <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '32px 32px'}}></div>
    </div>
    <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop relative z-10">
    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
    <div className="max-w-3xl">
    <span className="inline-block font-label-md text-label-md text-secondary-fixed-dim tracking-[0.2em] uppercase mb-6">Karier di Sentra Garuda Cakra</span>
    <h1 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-on-tertiary leading-tight">
                            Bergabung Bersama <span className="text-secondary-fixed-dim">Sentra Garuda Cakra Pratama</span>
    </h1>
    <p className="mt-8 font-body-lg text-body-lg text-on-tertiary/70 max-w-xl">
                            Kami mencari individu yang berintegritas, disiplin, dan memiliki semangat pelayanan tinggi untuk menjaga standar keunggulan operasional di seluruh Indonesia.
                        </p>
    </div>
    <div className="hidden lg:block">
    <div className="flex items-center gap-4 text-on-tertiary/40 font-label-md text-label-md border-l border-white/10 pl-8 h-24">
    <span className="text-secondary-fixed-dim text-headline-xl">05+</span>
    <span className="max-w-[120px] leading-tight">Kategori Pekerjaan Tersedia</span>
    </div>
    </div>
    </div>
    </div>
    </section>
    
    <section className="relative z-20 -mt-20 px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto w-full">
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
    <div className="bg-surface-container-lowest p-8 rounded-xl shadow-xl group hover:bg-secondary transition-all duration-500 cursor-default">
    <span className="material-symbols-outlined text-secondary group-hover:text-on-secondary mb-4 text-[32px]">shield_person</span>
    <h3 className="font-headline-md text-headline-md text-primary group-hover:text-on-secondary">Security</h3>
    <p className="mt-2 font-label-md text-label-md text-on-surface-variant group-hover:text-on-secondary/70">Garda terdepan keamanan fisik.</p>
    </div>
    <div className="bg-surface-container-lowest p-8 rounded-xl shadow-xl group hover:bg-secondary transition-all duration-500 cursor-default">
    <span className="material-symbols-outlined text-secondary group-hover:text-on-secondary mb-4 text-[32px]">cleaning_services</span>
    <h3 className="font-headline-md text-headline-md text-primary group-hover:text-on-secondary">Cleaning Service</h3>
    <p className="mt-2 font-label-md text-label-md text-on-surface-variant group-hover:text-on-secondary/70">Menjaga higienitas lingkungan.</p>
    </div>
    <div className="bg-surface-container-lowest p-8 rounded-xl shadow-xl group hover:bg-secondary transition-all duration-500 cursor-default">
    <span className="material-symbols-outlined text-secondary group-hover:text-on-secondary mb-4 text-[32px]">support_agent</span>
    <h3 className="font-headline-md text-headline-md text-primary group-hover:text-on-secondary">Office Boy</h3>
    <p className="mt-2 font-label-md text-label-md text-on-surface-variant group-hover:text-on-secondary/70">Asistensi operasional harian.</p>
    </div>
    <div className="bg-surface-container-lowest p-8 rounded-xl shadow-xl group hover:bg-secondary transition-all duration-500 cursor-default">
    <span className="material-symbols-outlined text-secondary group-hover:text-on-secondary mb-4 text-[32px]">manage_accounts</span>
    <h3 className="font-headline-md text-headline-md text-primary group-hover:text-on-secondary">Supervisor</h3>
    <p className="mt-2 font-label-md text-label-md text-on-surface-variant group-hover:text-on-secondary/70">Kepemimpinan tim lapangan.</p>
    </div>
    <div className="bg-surface-container-lowest p-8 rounded-xl shadow-xl group hover:bg-secondary transition-all duration-500 cursor-default">
    <span className="material-symbols-outlined text-secondary group-hover:text-on-secondary mb-4 text-[32px]">badge</span>
    <h3 className="font-headline-md text-headline-md text-primary group-hover:text-on-secondary">Staff</h3>
    <p className="mt-2 font-label-md text-label-md text-on-surface-variant group-hover:text-on-secondary/70">Dukungan administrasi pusat.</p>
    </div>
    </div>
    </section>
    
    <section className="py-32 px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto w-full">
    <div className="flex flex-col lg:flex-row gap-20">
    
    <div className="lg:w-1/3">
    <div className="sticky top-32">
    <h2 className="font-headline-xl text-headline-xl text-primary mb-8">Alur Pendaftaran</h2>
    <div className="space-y-12">
    <div className="flex gap-6">
    <div className="flex-none w-10 h-10 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-headline-md">1</div>
    <div>
    <h4 className="font-headline-md text-headline-md text-primary mb-2">Lengkapi Formulir</h4>
    <p className="font-body-md text-body-md text-on-surface-variant">Pastikan semua data diri dan pengalaman kerja sesuai dengan dokumen asli.</p>
    </div>
    </div>
    <div className="flex gap-6">
    <div className="flex-none w-10 h-10 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-headline-md">2</div>
    <div>
    <h4 className="font-headline-md text-headline-md text-primary mb-2">Unggah Berkas</h4>
    <p className="font-body-md text-body-md text-on-surface-variant">Lampirkan CV terbaru, KTP, dan sertifikat pendukung dalam format PDF atau gambar.</p>
    </div>
    </div>
    <div className="flex gap-6">
    <div className="flex-none w-10 h-10 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-headline-md">3</div>
    <div>
    <h4 className="font-headline-md text-headline-md text-primary mb-2">Wawancara & Seleksi</h4>
    <p className="font-body-md text-body-md text-on-surface-variant">Tim HR kami akan menghubungi Anda melalui WhatsApp atau Email jika memenuhi kualifikasi.</p>
    </div>
    </div>
    </div>
    <div className="mt-16 p-8 bg-surface-container rounded-2xl relative overflow-hidden">
    <div className="relative z-10">
    <h4 className="font-headline-md text-headline-md text-primary mb-4">Butuh Bantuan?</h4>
    <p className="font-body-md text-body-md text-on-surface-variant mb-6">Tanyakan seputar rekrutmen kepada tim HR kami.</p>
    <button className="inline-flex items-center gap-2 text-secondary font-label-md hover:underline" type="button" onClick={() => onNavigate("kontak")}>
    <span className="material-symbols-outlined text-[20px]">chat</span>
                                    Hubungi HR Sentra Garuda Cakra Pratama
                                </button>
    </div>
    <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-[120px] text-primary/5 rotate-12">info</span>
    </div>
    </div>
    </div>
    
    <div className="lg:w-2/3 bg-surface-container-lowest p-8 lg:p-12 rounded-3xl shadow-2xl">
    {!submitted ? <form className="space-y-8" id="recruitmentForm" onSubmit={(event) => {
    event.preventDefault();
    setSubmitted(true);
    }}>
    
    <div>
    <h3 className="font-headline-md text-headline-md text-primary mb-8 pb-4 border-b border-surface-container-high">Data Pribadi</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="flex flex-col gap-2">
    <label className="font-label-md text-label-md text-on-surface-variant">Nama Lengkap</label>
    <input className="w-full px-6 py-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-secondary/20 outline-none transition-all font-body-md" placeholder="Masukkan nama sesuai KTP" required type="text"/>
    </div>
    <div className="flex flex-col gap-2">
    <label className="font-label-md text-label-md text-on-surface-variant">Nomor WhatsApp</label>
    <input className="w-full px-6 py-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-secondary/20 outline-none transition-all font-body-md" placeholder="Contoh: 08123456789" required type="tel"/>
    </div>
    <div className="flex flex-col gap-2">
    <label className="font-label-md text-label-md text-on-surface-variant">Email Aktif</label>
    <input className="w-full px-6 py-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-secondary/20 outline-none transition-all font-body-md" placeholder="email@domain.com" required type="email"/>
    </div>
    <div className="flex flex-col gap-2">
    <label className="font-label-md text-label-md text-on-surface-variant">Domisili</label>
    <input className="w-full px-6 py-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-secondary/20 outline-none transition-all font-body-md" placeholder="Kota, Provinsi" required type="text"/>
    </div>
    </div>
    </div>
    
    <div>
    <h3 className="font-headline-md text-headline-md text-primary mb-8 pb-4 border-b border-surface-container-high">Kualifikasi & Posisi</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="flex flex-col gap-2">
    <label className="font-label-md text-label-md text-on-surface-variant">Posisi yang Dilamar</label>
    <select className="w-full px-6 py-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-secondary/20 outline-none transition-all font-body-md appearance-none" required defaultValue="">
    <option disabled value="">Pilih Posisi</option>
    <option>Security (Satpam)</option>
    <option>Cleaning Service</option>
    <option>Office Boy</option>
    <option>Supervisor</option>
    <option>Staff Kantor</option>
    </select>
    </div>
    <div className="flex flex-col gap-2">
    <label className="font-label-md text-label-md text-on-surface-variant">Pendidikan Terakhir</label>
    <select className="w-full px-6 py-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-secondary/20 outline-none transition-all font-body-md appearance-none" required defaultValue="">
    <option disabled value="">Pilih Pendidikan</option>
    <option>SMA/SMK Sederajat</option>
    <option>Diploma (D3)</option>
    <option>Sarjana (S1)</option>
    <option>Magister (S2)</option>
    </select>
    </div>
    <div className="flex flex-col gap-2">
    <label className="font-label-md text-label-md text-on-surface-variant">Tinggi Badan (cm)</label>
    <input className="w-full px-6 py-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-secondary/20 outline-none transition-all font-body-md" placeholder="Contoh: 170" type="number"/>
    </div>
    <div className="flex flex-col gap-2">
    <label className="font-label-md text-label-md text-on-surface-variant">Pengalaman Kerja (Tahun)</label>
    <input className="w-full px-6 py-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-secondary/20 outline-none transition-all font-body-md" placeholder="Contoh: 2" type="number"/>
    </div>
    </div>
    </div>
    
    <div>
    <h3 className="font-headline-md text-headline-md text-primary mb-8 pb-4 border-b border-surface-container-high">Unggah Berkas</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="relative group">
    <input className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" id="fileCV" type="file" onChange={handleFileChange}/>
    <div className={`border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center text-center group-hover:bg-surface-container-low transition-all ${files.fileCV === "Upload CV" ? "border-surface-container-high" : "bg-secondary-fixed border-secondary"}`}>
    <span className="material-symbols-outlined text-secondary mb-2">description</span>
    <span className="font-label-md text-label-md text-primary">{files.fileCV}</span>
    <span className="text-[10px] text-on-surface-variant mt-1">PDF/JPG (Max 2MB)</span>
    </div>
    </div>
    <div className="relative group">
    <input className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" id="fileKTP" type="file" onChange={handleFileChange}/>
    <div className={`border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center text-center group-hover:bg-surface-container-low transition-all ${files.fileKTP === "Upload KTP" ? "border-surface-container-high" : "bg-secondary-fixed border-secondary"}`}>
    <span className="material-symbols-outlined text-secondary mb-2">badge</span>
    <span className="font-label-md text-label-md text-primary">{files.fileKTP}</span>
    <span className="text-[10px] text-on-surface-variant mt-1">JPG/PNG (Max 1MB)</span>
    </div>
    </div>
    <div className="relative group">
    <input className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" id="fileCert" type="file" onChange={handleFileChange}/>
    <div className={`border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center text-center group-hover:bg-surface-container-low transition-all ${files.fileCert === "Sertifikat" ? "border-surface-container-high" : "bg-secondary-fixed border-secondary"}`}>
    <span className="material-symbols-outlined text-secondary mb-2">verified</span>
    <span className="font-label-md text-label-md text-primary">{files.fileCert}</span>
    <span className="text-[10px] text-on-surface-variant mt-1">PDF/JPG (Opsional)</span>
    </div>
    </div>
    </div>
    </div>
    <button className="w-full bg-primary text-on-primary py-6 rounded-xl font-headline-md text-headline-md hover:bg-secondary transition-all shadow-xl flex items-center justify-center gap-3" type="submit">
                            Kirim Lamaran & Bergabung dengan Tim Elite Sentra Garuda Cakra Pratama Pekerjaan
                            <span className="material-symbols-outlined">send</span>
    </button>
    </form> : null}
    
    {submitted ? <div className="flex flex-col items-center text-center py-20 animate-in fade-in zoom-in duration-500" id="successState">
    <div className="w-24 h-24 bg-secondary/10 rounded-full flex items-center justify-center mb-8">
    <span className="material-symbols-outlined text-secondary text-[48px]">check_circle</span>
    </div>
    <h3 className="font-display-lg text-headline-xl text-primary mb-4">Lamaran Terkirim!</h3>
    <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md mx-auto mb-10">
                            Terima kasih telah mendaftar di PT Sentra Garuda Cakra Pratama. Tim rekrutmen kami akan meninjau berkas Anda dan menghubungi dalam 7 hari kerja jika lolos seleksi awal.
                        </p>
    <button className="px-10 py-4 border-2 border-secondary text-secondary font-label-md rounded-xl hover:bg-secondary hover:text-on-secondary transition-all" type="button" onClick={resetForm}>
                            Kembali ke Form
                        </button>
    </div> : null}
    </div>
    </div>
    </section>
    
    <section className="py-24 bg-surface-container-high overflow-hidden">
    <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop flex flex-col lg:flex-row items-center gap-20">
    <div className="lg:w-1/2 relative">
    <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
    <img className="w-full h-full object-cover" data-alt="A professional security guard team standing in a formation in front of a modern corporate glass building during a bright morning. They are wearing sharp black uniforms with gold accents, exuding authority, discipline, and unity. The lighting is crisp and cinematic, emphasizing professionalism and institutional strength." src="/images/IMG-20260704-WA0595.jpg"/>
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
    <div className="absolute bottom-8 left-8 right-8">
    <p className="text-on-primary font-headline-md italic leading-tight">"Disiplin adalah fondasi utama kami dalam menjaga keamanan dan kepercayaan klien."</p>
    </div>
    </div>
    
    <div className="absolute -top-10 -left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>
    <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
    </div>
    <div className="lg:w-1/2">
    <h2 className="font-display-lg text-headline-xl lg:text-headline-xl text-primary mb-8">Keuntungan Berkarir di Sentra Garuda Cakra Pratama</h2>
    <div className="grid grid-cols-1 gap-8">
    <div className="flex gap-6">
    <span className="material-symbols-outlined text-secondary text-[32px]">workspace_premium</span>
    <div>
    <h4 className="font-headline-md text-headline-md text-primary mb-2">Standar Nasional</h4>
    <p className="font-body-md text-body-md text-on-surface-variant">Bekerja di bawah naungan perusahaan dengan sertifikasi resmi dan standar operasional nasional.</p>
    </div>
    </div>
    <div className="flex gap-6">
    <span className="material-symbols-outlined text-secondary text-[32px]">trending_up</span>
    <div>
    <h4 className="font-headline-md text-headline-md text-primary mb-2">Jenjang Karier</h4>
    <p className="font-body-md text-body-md text-on-surface-variant">Kami menghargai loyalitas dan prestasi dengan jalur kenaikan jabatan yang transparan bagi setiap personil.</p>
    </div>
    </div>
    <div className="flex gap-6">
    <span className="material-symbols-outlined text-secondary text-[32px]">medical_services</span>
    <div>
    <h4 className="font-headline-md text-headline-md text-primary mb-2">Kesejahteraan</h4>
    <p className="font-body-md text-body-md text-on-surface-variant">Perlindungan kesehatan, asuransi kerja, dan kompensasi yang kompetitif sesuai regulasi ketenagakerjaan.</p>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
    
    </div>
  );
}
