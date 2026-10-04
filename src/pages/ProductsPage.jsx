import { Link } from 'react-router-dom'
import PageHead from '../components/PageHead'

const blocks = [
  { title: 'Operasyon yönetimi', text: 'Servis kabulden teslimata tüm süreç tek panelde. İş emirleri, işlem adımları ve personel notları kayıt altında.' },
  { title: 'Finansal takip', text: 'Cari hesap, kasa hareketleri, tahsilat ve borç-alacak takibi sade bir arayüzle.' },
  { title: 'Kurumsal iletişim', text: 'Müşteri bilgilendirme akışı, PDF servis formu ve firma temasıyla profesyonel görünüm.' },
]

const features = ['Araç yönetimi', 'Müşteri yönetimi', 'Servis kayıtları', 'Servis geçmişi', 'PDF servis raporları', 'Bildirim sistemi', 'Cari ve kasa takibi', 'Firma özelleştirme']

function ProductsPage() {
  return (
    <>
      <PageHead
        eyebrow="Ürün · AutoCare"
        title="AutoCare servis yönetim platformu"
        text="Oto servisler için müşteri, araç, iş emri ve kasa yönetimini tek yerde toplayan modern bir yönetim çözümü."
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to="/iletisim" className="btn-primary">Demo talep et</Link>
          <Link to="/projects/kuzucular-premium-servis" className="btn-secondary">Kuzucular Premium Servis</Link>
        </div>
      </PageHead>

      <section className="py-16 sm:py-24">
        <div className="container-main grid gap-5 md:grid-cols-3">
          {blocks.map((b) => (
            <article key={b.title} className="panel p-6">
              <h2 className="font-display text-xl font-semibold">{b.title}</h2>
              <p className="mt-3 text-sm leading-6 text-mute">{b.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-edge bg-surface py-16 sm:py-24">
        <div className="container-main">
          <p className="eyebrow">Özellikler</p>
          <ul className="mt-8 grid gap-px overflow-hidden rounded-xl border border-edge bg-edge sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <li key={f} className="bg-ink p-5 text-sm font-medium">{f}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

export default ProductsPage
