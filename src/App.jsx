import { useEffect, useMemo, useState } from "react";
import Layout from "./components/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import CareersPage from "./pages/CareersPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import { blogPosts, logoUrl, pageByPath, routes, seoPages, whatsappNumber } from "./data/site.js";

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

function getInitialPage() {
  return pageByPath[window.location.pathname] ?? "beranda";
}

function setMeta(name, content, attr = "name") {
  let tag = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setCanonical(href) {
  let tag = document.head.querySelector('link[rel="canonical"]');
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", "canonical");
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
}

function setStructuredData(page, canonicalUrl) {
  let tag = document.getElementById("sgc-json-ld");
  if (!tag) {
    tag = document.createElement("script");
    tag.id = "sgc-json-ld";
    tag.type = "application/ld+json";
    document.head.appendChild(tag);
  }

  const organization = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "PT Sentra Garuda Cakra Pratama",
    url: canonicalUrl,
    logo: logoUrl,
    telephone: `+${whatsappNumber}`,
    areaServed: "Indonesia",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Raya Bandung No. 123",
      addressLocality: "Bandung",
      addressRegion: "Jawa Barat",
      addressCountry: "ID"
    },
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Jasa Pengamanan" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cleaning Service" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Office Support" } }
    ]
  };

  const graph = [organization];
  if (page === "blog") {
    graph.push({
      "@type": "Blog",
      name: "Blog Security dan Facility Management PT SGC",
      url: canonicalUrl,
      blogPost: blogPosts.map((post) => ({
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        keywords: post.keywords.join(", ")
      }))
    });
  }

  tag.textContent = JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
}

export default function App() {
  const [page, setPage] = useState(getInitialPage);

  const currentSeo = useMemo(() => seoPages[page] ?? seoPages.beranda, [page]);

  const navigate = (nextPage) => {
    const nextPath = routes[nextPage] ?? routes.beranda;
    if (window.location.pathname !== nextPath) window.history.pushState({ page: nextPage }, "", nextPath);
    setPage(nextPage);
  };

  useEffect(() => {
    const handlePopState = () => setPage(getInitialPage());
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    const canonicalUrl = `${window.location.origin}${routes[page] ?? routes.beranda}`;

    document.title = currentSeo.title;
    setMeta("description", currentSeo.description);
    setMeta("keywords", currentSeo.keywords);
    setMeta("robots", "index, follow");
    setMeta("og:title", currentSeo.title, "property");
    setMeta("og:description", currentSeo.description, "property");
    setMeta("og:type", page === "blog" ? "article" : "website", "property");
    setMeta("og:url", canonicalUrl, "property");
    setMeta("og:image", logoUrl, "property");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", currentSeo.title);
    setMeta("twitter:description", currentSeo.description);
    setMeta("twitter:image", logoUrl);
    setCanonical(canonicalUrl);
    setStructuredData(page, canonicalUrl);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentSeo, page]);

  return (
    <Layout currentPage={page} onNavigate={navigate}>
      <Page page={page} onNavigate={navigate} />
    </Layout>
  );
}
