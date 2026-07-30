import { useEffect, useMemo, useState } from "react";
import Layout from "./components/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import CareersPage from "./pages/CareersPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";

const pageTitles = {
  beranda: "Beranda",
  "tentang-kami": "Tentang Kami",
  layanan: "Layanan",
  blog: "Blog",
  rekrutmen: "Rekrutmen",
  kontak: "Kontak"
};

const pageDescriptions = {
  beranda: "PT Sentra Garuda Cakra Pratama menyediakan jasa security, cleaning service, dan office support profesional untuk kebutuhan bisnis.",
  "tentang-kami": "Profil PT Sentra Garuda Cakra Pratama sebagai mitra keamanan dan facility support dengan standar operasional profesional.",
  layanan: "Layanan jasa pengamanan, cleaning service, office boy, dan building support terintegrasi untuk perusahaan dan gedung komersial.",
  blog: "Artikel SEO tentang jasa security, vendor satpam, cleaning service profesional, monitoring keamanan, dan facility management.",
  rekrutmen: "Informasi karier dan pendaftaran kerja security, cleaning service, office boy, supervisor, dan staff di PT Sentra Garuda Cakra Pratama.",
  kontak: "Hubungi PT Sentra Garuda Cakra Pratama untuk konsultasi kebutuhan keamanan, cleaning service, dan facility support perusahaan."
};

function Page({ page, onNavigate }) {
  const pages = {
    beranda: <HomePage onNavigate={onNavigate} />,
    "tentang-kami": <AboutPage onNavigate={onNavigate} />,
    layanan: <ServicesPage onNavigate={onNavigate} />,
    blog: <BlogPage onNavigate={onNavigate} />,
    rekrutmen: <CareersPage onNavigate={onNavigate} />,
    kontak: <ContactPage />
  };

  return pages[page] ?? pages.beranda;
}

export default function App() {
  const [page, setPage] = useState("beranda");

  const currentTitle = useMemo(() => pageTitles[page] ?? pageTitles.beranda, [page]);

  useEffect(() => {
    document.title = `SGC - ${currentTitle}`;
    document.querySelector("meta[name='description']")?.setAttribute("content", pageDescriptions[page] ?? pageDescriptions.beranda);
    document
      .querySelector("meta[name='keywords']")
      ?.setAttribute("content", "jasa security, jasa satpam, cleaning service, office support, facility management, Sentra Garuda Cakra");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentTitle, page]);

  return (
    <Layout currentPage={page} onNavigate={setPage}>
      <Page page={page} onNavigate={setPage} />
    </Layout>
  );
}
