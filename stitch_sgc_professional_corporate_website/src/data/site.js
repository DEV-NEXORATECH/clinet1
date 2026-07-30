export const logoUrl =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB3FW5YxMGa05gdlgfzi6vNhza6m3MPHeZPyfuEvKpA9ckoxSvhbqcnklr_3HjJPDi-11Rqg6YEbcL13KQDhMKNxcPUVA5tI3V4218CsfwGVzmqhCnORgOtum0M0BF7qMiBFQZZh1mY9mpf5SBTOkKNbegI9u7PYAl0Ojah2nYEvwBlPKlL6BhYKnqnrO5zA-6xmkxQxuP1UloBJjxsNCW1RpWKSkaoDA-X-kQZMBQqk0Kb3hCOkMM";

export const whatsappNumber = "6282211227088";

export const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Halo%20SGC%2C%20saya%20ingin%20berkonsultasi%20mengenai%20layanan%20keamanan%20dan%20facility%20support.`;

export const navItems = [
  ["beranda", "Beranda"],
  ["tentang-kami", "Tentang Kami"],
  ["layanan", "Layanan"],
  ["blog", "Blog"],
  ["rekrutmen", "Rekrutmen"],
  ["kontak", "Kontak"]
];

export const routes = {
  beranda: "/",
  "tentang-kami": "/tentang-kami",
  layanan: "/layanan",
  blog: "/blog",
  rekrutmen: "/rekrutmen",
  kontak: "/kontak"
};

export const pageByPath = Object.fromEntries(Object.entries(routes).map(([page, path]) => [path, page]));

export const seoPages = {
  beranda: {
    title: "Jasa Security, Cleaning Service & Office Support | PT SGC",
    description:
      "PT Sentra Garuda Cakra Pratama menyediakan jasa security, cleaning service, office support, dan facility management profesional untuk kebutuhan bisnis.",
    keywords: "jasa security, jasa satpam, cleaning service, office support, facility management, Sentra Garuda Cakra"
  },
  "tentang-kami": {
    title: "Tentang PT Sentra Garuda Cakra Pratama",
    description:
      "Profil PT Sentra Garuda Cakra Pratama sebagai mitra keamanan dan facility support dengan standar operasional profesional.",
    keywords: "profil perusahaan security, Sentra Garuda Cakra, perusahaan jasa keamanan"
  },
  layanan: {
    title: "Layanan Jasa Security, Cleaning Service & Office Support",
    description:
      "Layanan jasa pengamanan, cleaning service, office boy, dan building support terintegrasi untuk perusahaan dan gedung komersial.",
    keywords: "jasa pengamanan, security gedung, cleaning service kantor, office boy, building support"
  },
  blog: {
    title: "Blog Security dan Facility Management | PT SGC",
    description:
      "Artikel SEO tentang jasa security, vendor satpam, cleaning service profesional, monitoring keamanan, dan facility management.",
    keywords: "blog security, vendor satpam, tips keamanan gedung, cleaning service profesional, facility management"
  },
  rekrutmen: {
    title: "Rekrutmen Security, Cleaning Service & Office Support",
    description:
      "Informasi karier dan pendaftaran kerja security, cleaning service, office boy, supervisor, dan staff di PT Sentra Garuda Cakra Pratama.",
    keywords: "lowongan security, lowongan satpam, lowongan cleaning service, rekrutmen office boy"
  },
  kontak: {
    title: "Kontak PT Sentra Garuda Cakra Pratama",
    description:
      "Hubungi PT Sentra Garuda Cakra Pratama untuk konsultasi kebutuhan keamanan, cleaning service, dan facility support perusahaan.",
    keywords: "kontak jasa security, konsultasi security, vendor security Bandung, jasa satpam Bandung"
  }
};

export const blogPosts = [
  {
    title: "Checklist Memilih Vendor Security untuk Gedung Perkantoran",
    category: "Keamanan",
    readTime: "5 menit baca",
    excerpt:
      "Kenali indikator penting sebelum memilih penyedia jasa pengamanan, mulai dari legalitas, SOP, pelatihan personel, hingga sistem pelaporan.",
    keywords: ["vendor security", "jasa satpam", "keamanan gedung"]
  },
  {
    title: "Peran Cleaning Service Profesional dalam Produktivitas Kerja",
    category: "Facility Support",
    readTime: "4 menit baca",
    excerpt:
      "Lingkungan kerja yang bersih membantu menjaga kenyamanan, reputasi kantor, dan kesehatan penghuni gedung secara berkelanjutan.",
    keywords: ["cleaning service", "kebersihan kantor", "facility management"]
  },
  {
    title: "Mengapa Sistem Monitoring Real-Time Penting untuk Operasional Security",
    category: "Operasional",
    readTime: "6 menit baca",
    excerpt:
      "Monitoring digital membantu klien melihat performa lapangan, laporan insiden, patroli, dan tindak lanjut secara lebih transparan.",
    keywords: ["monitoring security", "laporan patroli", "manajemen keamanan"]
  }
];
