import Contact from '../components/Contact'

function ContactPage() {
  return (
    <div className="py-14 sm:py-20">
      <section className="container-main">
        <div className="deep-panel rounded-3xl p-8 sm:p-12">
          <p className="text-xs uppercase tracking-[0.16em] text-sky-800">İletişim</p>
          <h1 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-5xl">Altıok Software ile İletişime Geçin</h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-800 sm:text-lg">
            AutoCare hakkında detaylı bilgi almak, demo talep etmek veya işletmenize uygun kullanım senaryosunu
            konuşmak için formu doldurabilirsiniz.
          </p>
        </div>
      </section>
      <Contact />
    </div>
  )
}

export default ContactPage
