import { motion } from 'framer-motion'

const tech = [
  { name: 'Flutter', icon: 'https://cdn.simpleicons.org/flutter/02569B' },
  { name: 'FastAPI', icon: 'https://cdn.simpleicons.org/fastapi/009688' },
  { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
  { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' },
  { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED' },
  { name: 'AI', icon: 'https://cdn.simpleicons.org/openai/412991' },
  { name: 'REST API', icon: 'https://cdn.simpleicons.org/json/000000' },
  { name: 'Cloud', icon: 'https://cdn.simpleicons.org/googlecloud/4285F4' },
]

function Technologies() {
  return (
    <section id="teknolojiler" className="screen-block py-10 sm:py-14">
      <div className="container-main">
        <h2 className="section-title">Teknolojilerimiz</h2>
        <p className="section-subtitle">Modern, güvenilir ve sürdürülebilir teknoloji stack.</p>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {tech.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.25 }}
              className="glass-panel rounded-xl p-5 text-center"
            >
              <img src={item.icon} alt={item.name} className="mx-auto mb-3 h-9 w-9" loading="lazy" />
              <p className="text-sm font-semibold text-slate-900">{item.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies
