import { introItems } from '../data/siteData'

function AutoCareIntro() {
  return (
    <section id="urunler" className="screen-block flex items-center">
      <div className="container-main">
        <p className="text-xs uppercase tracking-[0.16em] text-sky-300/90">Ürün Ekranı</p>
        <h2 className="section-title mt-3 reveal">AutoCare Ürün Deneyimi</h2>
        <p className="section-subtitle reveal">
          AutoCare, modüler bir servis yönetim paneli sunar. Aşağıdaki ekranlar operasyonun ana akışını
          temsil eder.
        </p>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {introItems.map((item, index) => (
            <article
              key={item}
              className="deep-panel reveal rounded-2xl p-6 transition duration-500 hover:-translate-y-1 hover:shadow-glow"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <p className="text-xs text-sky-300">Ekran {index + 1}</p>
              <h3 className="mt-2 text-lg font-semibold">{item}</h3>
              <p className="mt-2 text-sm text-slate-700">
                Bu modül ile ilgili veriler merkezi olarak yönetilir ve ekip içinde şeffaf şekilde paylaşılır.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AutoCareIntro
