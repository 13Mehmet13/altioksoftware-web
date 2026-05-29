const steps = [
  {
    title: 'Analiz ve Kurulum',
    text: 'Servis operasyonunuza uygun yapılandırma ile hızlı başlangıç yapılır.',
  },
  {
    title: 'Aktif Kullanım',
    text: 'Müşteri, araç, servis ve finans süreçleri tek platformda yönetilir.',
  },
  {
    title: 'Ölçüm ve Gelişim',
    text: 'Raporlama ve çıktı sistemi ile süreçler sürekli iyileştirilir.',
  },
]

function ModernFlow() {
  return (
    <section className="screen-block pt-4 sm:pt-10">
      <div className="container-main">
        <div className="deep-panel reveal rounded-3xl p-8 sm:p-10">
          <p className="text-xs uppercase tracking-[0.16em] text-sky-300/90">Nasıl Çalışır?</p>
          <h2 className="section-title mt-3">AutoCare ile Dijital Dönüşüm Akışı</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <article key={step.title} className="glass-panel rounded-2xl p-6">
                <p className="text-xs text-sky-200">Adım {index + 1}</p>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ModernFlow
