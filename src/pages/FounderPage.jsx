import FounderSection from '../components/FounderSection'
import About from '../components/About'

function FounderPage() {
  return (
    <div className="py-14 sm:py-20">
      <section className="container-main">
        <div className="deep-panel rounded-3xl p-8 sm:p-12">
          <p className="text-xs uppercase tracking-[0.16em] text-sky-800">Kurucu</p>
          <h1 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-5xl">Altıok Software Hikayesi</h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-800 sm:text-lg">
            Marka vizyonu, teknik yaklaşım ve ürün odağımızın arkasındaki temel perspektif.
          </p>
        </div>
      </section>
      <FounderSection />
      <About />
    </div>
  )
}

export default FounderPage
