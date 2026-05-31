import { useState } from 'react'

const faqItems = [
  {
    q: 'Kuzucular Premium Servis hangi işletmeler için uygun?',
    a: 'Oto servisler, özel servisler ve çoklu personel ile servis operasyonu yöneten işletmeler için uygundur.',
  },
  {
    q: 'App Store ve Play Store kullanıcıları nasıl destek alır?',
    a: 'Uygulama içi iletişim kanalları, destek formu, e-posta ve WhatsApp hattı üzerinden destek talepleri alınır.',
  },
  {
    q: 'Veri taşıma ve kurulum desteği var mı?',
    a: 'Evet. Mevcut çalışma düzeninize göre ilk kurulum ve geçiş planı için ekibimiz yönlendirme sağlar.',
  },
]

function SupportPage() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitted(false)
    setError('')
    setSending(true)

    const form = event.currentTarget
    const formData = new FormData(form)

    formData.append('_subject', 'Kuzucular Premium Servis - Destek Talebi')
    formData.append('_template', 'table')
    formData.append('_captcha', 'false')

    try {
      const response = await fetch('https://formsubmit.co/ajax/mehmetaltiok.ma@gmail.com', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Form gönderimi başarısız oldu.')
      }

      setSubmitted(true)
      form.reset()
    } catch (submitError) {
      setError('Destek talebi gönderilemedi. Lütfen tekrar deneyin.')
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="py-14 sm:py-20">
      <section className="container-main">
        <div className="deep-panel rounded-3xl p-8 sm:p-12">
          <p className="text-xs uppercase tracking-[0.16em] text-sky-800">Destek</p>
          <h1 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-5xl">Kuzucular Premium Servis Destek</h1>
          <p className="mt-5 max-w-4xl text-sm leading-7 text-slate-700 sm:text-base">
            App Store ve Google Play Store kullanıcıları dahil tüm müşterilerimiz için teknik destek, kurulum yönlendirmesi
            ve kullanım danışmanlığı sunuyoruz.
          </p>
        </div>
      </section>

      <section className="container-main mt-8 grid gap-6 lg:grid-cols-2">
        <article className="glass-panel rounded-3xl p-7 sm:p-8">
          <h2 className="text-2xl font-semibold text-slate-900">Sık Sorulan Sorular</h2>
          <div className="mt-5 space-y-4">
            {faqItems.map((item) => (
              <div key={item.q} className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="text-base font-semibold text-slate-900">{item.q}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-sky-50 p-5">
            <p className="text-sm leading-7 text-slate-700">
              Destek e-postası: <a className="font-semibold text-sky-700 hover:text-sky-800" href="mailto:mehmetaltiok.ma@gmail.com">mehmetaltiok.ma@gmail.com</a>
            </p>
            <p className="mt-1 text-sm leading-7 text-slate-700">
              Destek telefonu: <a className="font-semibold text-sky-700 hover:text-sky-800" href="tel:+905445259309">0544 525 93 09</a>
            </p>
            <a
              href="https://wa.me/905445259309?text=Merhaba%2C%20Kuzucular%20Premium%20Servis%20i%C3%A7in%20destek%20almak%20istiyorum."
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100"
            >
              WhatsApp Destek
            </a>
          </div>
        </article>

        <article className="glass-panel rounded-3xl p-7 sm:p-8">
          <h2 className="text-2xl font-semibold text-slate-900">Destek Formu</h2>
          <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
            <input required name="Ad Soyad" type="text" placeholder="Ad Soyad" className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-500 outline-none transition focus:border-sky-500" />
            <input required name="E-posta" type="email" placeholder="E-posta" className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-500 outline-none transition focus:border-sky-500" />
            <input name="Telefon" type="tel" placeholder="Telefon (Opsiyonel)" className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-500 outline-none transition focus:border-sky-500" />
            <textarea required name="Destek Mesajı" rows="5" placeholder="Sorununuzu veya talebinizi yazın" className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-500 outline-none transition focus:border-sky-500" />
            <button type="submit" disabled={sending} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto">
              {sending ? 'Gönderiliyor...' : 'Destek Talebi Gönder'}
            </button>

            {submitted && <p className="rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800">Talebiniz alındı. Destek ekibimiz en kısa sürede dönüş yapacaktır.</p>}
            {error && <p className="rounded-xl border border-rose-300 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">{error}</p>}
          </form>
        </article>
      </section>
    </div>
  )
}

export default SupportPage
