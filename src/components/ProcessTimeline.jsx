import { motion } from 'framer-motion'

const steps = ['Analiz', 'Tasarım', 'Geliştirme', 'Test', 'Canlı Yayın']

function ProcessTimeline() {
  return (
    <section className="screen-block py-10 sm:py-14">
      <div className="container-main">
        <h2 className="section-title">Proje Geliştirme Süreci</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-5">
          {steps.map((s, i) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="glass-panel rounded-xl p-4 text-center"
            >
              <p className="text-sm font-semibold text-slate-900">{s}</p>
              {i < steps.length - 1 && <p className="mt-2 text-sky-600">↓</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessTimeline
