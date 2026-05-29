import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section id="anasayfa" className="screen-block">
      <div className="container-main">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="deep-panel reveal rounded-3xl p-8 sm:p-12">
            <p className="mb-4 inline-flex rounded-full border border-sky-300/40 bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-800">
              Altıok Software | Automotive & Digital Solutions
            </p>
            <h1 className="max-w-4xl text-3xl font-semibold leading-tight sm:text-5xl">
              Servis yönetiminde hız, kontrol ve kurumsal görünüm tek platformda
            </h1>
            <p className="mt-6 max-w-2xl text-base text-slate-800 sm:text-lg">
              AutoCare ile operasyonel süreçlerinizi dijitalleştirin, ekip koordinasyonunu güçlendirin
              ve müşterinize güven veren bir servis deneyimi sunun.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/iletisim" className="btn-primary text-center">
                Demo Talep Et
              </Link>
              <Link to="/urunler" className="btn-secondary text-center">
                Ürün Detaylarını Gör
              </Link>
            </div>
          </div>

          <div className="grid gap-4 reveal">
            <div className="deep-panel rounded-2xl p-6 transition duration-500 hover:-translate-y-1">
              <p className="text-xs uppercase tracking-[0.14em] text-sky-800">Kontrol Paneli</p>
              <p className="mt-2 text-2xl font-semibold text-slate-900">Anlık Servis Akışı</p>
              <p className="mt-2 text-base text-slate-800">Açık iş emirleri, teslim bekleyen araçlar, tahsilat ve müşteri bilgilendirme tek ekranda.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="deep-panel rounded-2xl p-5 transition duration-500 hover:-translate-y-1">
                <p className="text-2xl font-semibold text-sky-700">7/24</p>
                <p className="mt-1 text-sm text-slate-800">Veri erişimi</p>
              </div>
              <div className="deep-panel rounded-2xl p-5 transition duration-500 hover:-translate-y-1">
                <p className="text-2xl font-semibold text-sky-700">PDF</p>
                <p className="mt-1 text-sm text-slate-800">Kurumsal servis çıktısı</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-3">
          <div className="glass-panel rounded-2xl px-5 py-4 text-base text-slate-800">Servis kabulden teslimata kadar uçtan uca takip</div>
          <div className="glass-panel rounded-2xl px-5 py-4 text-base text-slate-800">Müşteri ve araç geçmişine anında erişim</div>
          <div className="glass-panel rounded-2xl px-5 py-4 text-base text-slate-800">Cari/kasa görünürlüğü ile finansal kontrol</div>
        </div>
      </div>
    </section>
  )
}

export default Hero
