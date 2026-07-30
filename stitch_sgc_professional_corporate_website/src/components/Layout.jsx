import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import FloatingWhatsApp from "./FloatingWhatsApp.jsx";

export default function Layout({ children, currentPage, onNavigate }) {
  return (
    <>
      <Header currentPage={currentPage} onNavigate={onNavigate} />
      <main className="w-full pt-20 bg-surface min-h-screen">
        {children}
      </main>
      <FloatingWhatsApp />
      <Footer onNavigate={onNavigate} />
    </>
  );
}
