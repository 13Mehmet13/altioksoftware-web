import { motion } from 'framer-motion'

const items = [
  {
    title: 'Modern Teknolojiler',
    text: 'Flutter, FastAPI, PostgreSQL ve modern cloud altyapıları.',
  },
  {
    title: 'Mobil Öncelikli Yaklaşım',
    text: 'Tüm ürünler mobil deneyim düşünülerek geliştirilir.',
  },
  {
    title: 'Yapay Zeka Entegrasyonu',
    text: 'AI destekli çözümler ve otomasyon sistemleri.',
  },
  {
    title: 'Ölçeklenebilir Mimari',
    text: 'Küçük işletmeden büyük organizasyonlara kadar büyüyebilen sistemler.',
  },
]

function WhyAltiok() {
  return (
    <section className="screen-block">
      <div className="container-main">
        <h2 className="section-title">Neden Altıok Software?</h2>
        <p className="section-subtitle">Startup hızını kurumsal mühendislikle birleştiren ürün yaklaşımı.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="deep-panel rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-glow"
            >
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyAltiok
