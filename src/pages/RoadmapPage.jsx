import Roadmap from '../components/Roadmap'
import StatsCounter from '../components/StatsCounter'
import BlogSection from '../components/BlogSection'

function RoadmapPage() {
  return (
    <div className="py-14 sm:py-20">
      <section className="container-main">
        <div className="deep-panel rounded-3xl p-8 sm:p-12">
          <p className="text-xs uppercase tracking-[0.16em] text-sky-800">Roadmap</p>
          <h1 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-5xl">Ürün Yol Haritamız</h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-800 sm:text-lg">
            AutoCare merkezli ürün ailesini, veri odaklı yeni servislerle büyütmeyi hedefliyoruz.
          </p>
        </div>
      </section>
      <Roadmap />
      <StatsCounter />
      <BlogSection />
    </div>
  )
}

export default RoadmapPage
