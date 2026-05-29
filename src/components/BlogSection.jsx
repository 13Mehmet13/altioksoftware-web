const posts = [
  'Oto Servislerde Dijital Dönüşüm',
  'Mobil Uygulamalar İşletmelere Ne Kazandırır?',
  'Yapay Zeka Destekli İş Süreçleri',
]

function BlogSection() {
  return (
    <section className="screen-block py-10 sm:py-14">
      <div className="container-main">
        <h2 className="section-title">Blog / İçerik</h2>
        <p className="section-subtitle">Sektör odaklı teknoloji içerikleri yakında burada.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post} className="glass-panel rounded-2xl p-6 transition hover:-translate-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-700">Örnek İçerik</p>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{post}</h3>
              <p className="mt-3 text-sm text-slate-700">Bu başlık altında yakında detaylı içerik yayınlanacaktır.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSection
