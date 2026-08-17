import { blogPosts } from "../data/site.js";

const seoTopics = [
  "Jasa pengamanan gedung perkantoran",
  "Cleaning service profesional",
  "Office support dan facility management",
  "Vendor security Bandung dan Indonesia"
];

export default function BlogPage({ onNavigate }) {
  return (
    <div className="flex flex-col w-full">
      <section className="bg-primary text-on-primary py-20 lg:py-28">
        <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <span className="font-label-md text-label-md text-secondary-fixed-dim uppercase tracking-[0.2em]">Blog & Insight</span>
            <h1 className="font-display-lg text-display-lg-mobile lg:text-display-lg mt-5 mb-6">
              Wawasan Keamanan dan Facility Support untuk Bisnis
            </h1>
            <p className="font-body-lg text-body-lg text-on-primary/70 max-w-2xl">
              Artikel praktis dari PT Sentra Garuda Cakra Pratama untuk membantu perusahaan memilih layanan security, cleaning service, dan dukungan operasional yang tepat.
            </p>
          </div>
          <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="font-label-md text-label-md text-secondary-fixed-dim uppercase tracking-widest mb-4">Topik SEO</p>
            <div className="flex flex-wrap gap-2">
              {seoTopics.map((topic) => (
                <span className="rounded-full border border-white/15 px-3 py-2 text-sm text-on-primary/75" key={topic}>
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-8 shadow-lg shadow-primary/5 hover:-translate-y-1 transition-transform" key={post.title}>
                <div className="flex items-center justify-between gap-4 mb-8">
                  <span className="rounded-full bg-secondary/10 px-3 py-1 font-label-md text-[12px] text-secondary uppercase tracking-wider">{post.category}</span>
                  <span className="font-label-md text-[12px] text-on-surface-variant uppercase tracking-wider">{post.readTime}</span>
                </div>
                <span className="font-display-lg text-5xl text-secondary/20">0{index + 1}</span>
                <h2 className="font-headline-md text-headline-md text-primary mt-5 mb-4">{post.title}</h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {post.keywords.map((keyword) => (
                    <span className="text-xs rounded-full bg-surface-container px-3 py-1 text-on-surface-variant" key={keyword}>
                      {keyword}
                    </span>
                  ))}
                </div>
                <button className="font-label-md text-label-md text-primary border-b-2 border-secondary pb-1 hover:text-secondary transition-colors" type="button" onClick={() => onNavigate("kontak")}>
                  Konsultasikan Topik Ini
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface-container">
        <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <span className="font-label-md text-label-md text-secondary uppercase tracking-[0.2em]">Strategi SEO</span>
            <h2 className="font-headline-xl text-headline-xl text-primary mt-4 mb-5">Blog membantu calon klien menemukan Sentra Garuda Cakra Pratama dari kebutuhan spesifik.</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Halaman artikel seperti ini bagus untuk menargetkan pencarian informasional, misalnya cara memilih vendor security, standar cleaning service kantor, atau manfaat monitoring patroli digital.
            </p>
          </div>
          <div className="lg:col-span-5 bg-primary text-on-primary rounded-2xl p-8">
            <h3 className="font-headline-md text-headline-md mb-4">Butuh artikel tambahan?</h3>
            <p className="font-body-md text-body-md opacity-70 mb-8">
              Konten SEO paling efektif bila diterbitkan rutin dan mengarah ke halaman layanan atau kontak.
            </p>
            <button className="bg-secondary text-on-secondary px-8 py-4 rounded-lg font-label-md text-label-md hover:brightness-110 transition-all" type="button" onClick={() => onNavigate("kontak")}>
              Diskusikan Kebutuhan
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
