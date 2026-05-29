import AutoCareIntro from '../components/AutoCareIntro'
import Features from '../components/Features'

const detailBlocks = [
  {
    title: 'Operasyon Yönetimi',
    text: 'AutoCare, servis kabulden teslimata kadar tüm süreci tek panelde yönetmenizi sağlar. İş emirleri, işlem adımları ve personel notları kayıt altına alınır.',
  },
  {
    title: 'Finansal Takip',
    text: 'Cari hesap, kasa hareketleri, tahsilat ve borç-alacak takibini sade bir arayüzle yürütür. Gün sonu finans görünümü ile kontrol kaybını önler.',
  },
  {
    title: 'Kurumsal İletişim',
    text: 'Müşteri bilgilendirme akışı sayesinde servis süreci daha şeffaf ilerler. PDF çıktılar ve firma teması ile profesyonel bir marka deneyimi sunulur.',
  },
]

function ProductsPage() {
  return (
    <div className="py-14 sm:py-20">
      <section className="container-main">
        <div className="deep-panel rounded-3xl p-8 sm:p-12">
          <p className="text-xs uppercase tracking-[0.16em] text-sky-800">Ürünler</p>
          <h1 className="mt-3 text-3xl font-semibold sm:text-5xl">AutoCare Servis Yönetim Platformu</h1>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-700 sm:text-base">
            Altıok Software'in geliştirdiği AutoCare, otomotiv servis işletmeleri için operasyonel verimlilik,
            düzenli kayıt ve kurumsal müşteri deneyimi sağlayan modern bir dijital yönetim çözümüdür.
          </p>
        </div>
      </section>

      <section className="container-main mt-8 grid gap-5 md:grid-cols-3">
        {detailBlocks.map((item) => (
          <article key={item.title} className="glass-panel rounded-2xl p-6">
            <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700">{item.text}</p>
          </article>
        ))}
      </section>

      <AutoCareIntro />
      <Features />
    </div>
  )
}

export default ProductsPage
