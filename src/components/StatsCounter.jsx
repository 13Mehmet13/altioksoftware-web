import { motion } from 'framer-motion'

const items = [
  { value: '1+', label: 'Aktif Ürün' },
  { value: '2026', label: 'Kuruluş Yılı' },
  { value: '100%', label: 'Mobil Odaklı' },
  { value: '∞', label: 'Gelişim Hedefi' },
]

function StatsCounter() {
  return (
    <section className="screen-block py-8 sm:py-12">
      <div className="container-main grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <motion.article
            key={item.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass-panel rounded-2xl p-6 text-center"
          >
            <p className="text-3xl font-bold text-sky-700">{item.value}</p>
            <p className="mt-2 text-sm text-slate-700">{item.label}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default StatsCounter
