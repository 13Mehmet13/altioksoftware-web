import Technologies from '../components/Technologies'
import WhyAltiok from '../components/WhyAltiok'
import ProcessTimeline from '../components/ProcessTimeline'

function TechnologiesPage() {
  return (
    <div className="py-14 sm:py-20">
      <section className="container-main">
        <div className="deep-panel rounded-3xl p-8 sm:p-12">
          <p className="text-xs uppercase tracking-[0.16em] text-sky-800">Teknoloji</p>
          <h1 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-5xl">Mühendislik Altyapımız</h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-800 sm:text-lg">
            Altıok Software, modern ürün geliştirme prensipleriyle mobil, backend ve AI odaklı çözümler üretir.
          </p>
        </div>
      </section>
      <WhyAltiok />
      <Technologies />
      <ProcessTimeline />
    </div>
  )
}

export default TechnologiesPage
