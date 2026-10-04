import { useState } from 'react'
import PageHead from '../components/PageHead'

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

  const field = 'w-full rounded-md border border-edge bg-ink px-4 py-3 text-sm text-fg placeholder:text-mute outline-none transition focus:border-brand'
  const label = 'font-mono text-[10px] uppercase tracking-widest text-mute'

  const channels = [
    { k: 'E-posta', v: 'mehmetaltiok.ma@gmail.com', href: 'mailto:mehmetaltiok.ma@gmail.com' },
    { k: 'Telefon', v: '0544 525 93 09', href: 'tel:+905445259309' },
    {
      k: 'WhatsApp',
      v: 'Mesaj gönder',
      href: 'https://wa.me/905445259309?text=Merhaba%2C%20Kuzucular%20Premium%20Servis%20i%C3%A7in%20destek%20almak%20istiyorum.',
      external: true,
    },
  ]

  return (
    <>
      <PageHead
        eyebrow="Destek"
        title="Kuzucular Premium Servis destek"
        text="App Store ve Google Play kullanıcıları dahil tüm müşteriler için teknik destek, kurulum yönlendirmesi ve kullanım danışmanlığı."
      />

      <section className="border-b border-edge bg-surface">
        <div className="container-main grid gap-px py-0 sm:grid-cols-3">
          {channels.map((c) => (
            <a
              key={c.k}
              href={c.href}
              {...(c.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              className="group bg-surface py-7 transition sm:px-6 sm:first:pl-0"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand">{c.k}</p>
              <p className="mt-2 font-display text-[15px] font-semibold [overflow-wrap:anywhere] sm:text-lg text-fg transition group-hover:text-brand">{c.v}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-main grid items-start gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="eyebrow">Sık sorulan sorular</p>
            <h2 className="h2 mt-4">Hızlı cevaplar</h2>
            <div className="mt-8 divide-y divide-edge border-y border-edge">
              {faqItems.map((item) => (
                <details key={item.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-display text-base font-semibold text-fg [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <span className="mt-0.5 font-mono text-brand transition group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-mute">{item.a}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="panel p-6 sm:p-8">
            <h2 className="font-display text-xl font-semibold">Destek talebi gönder</h2>
            <p className="mt-2 text-sm text-mute">Sorununuzu kısaca yazın, size e-posta ile dönelim.</p>
            <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="s-name" className={label}>Ad Soyad</label>
                <input id="s-name" required name="Ad Soyad" type="text" className={`${field} mt-2`} />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="s-mail" className={label}>E-posta</label>
                  <input id="s-mail" required name="E-posta" type="email" className={`${field} mt-2`} />
                </div>
                <div>
                  <label htmlFor="s-phone" className={label}>Telefon (opsiyonel)</label>
                  <input id="s-phone" name="Telefon" type="tel" className={`${field} mt-2`} />
                </div>
              </div>
              <div>
                <label htmlFor="s-msg" className={label}>Mesaj</label>
                <textarea id="s-msg" required name="Destek Mesajı" rows="5" placeholder="Sorununuzu veya talebinizi yazın" className={`${field} mt-2`} />
              </div>
              <button type="submit" disabled={sending} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:justify-self-start">
                {sending ? 'Gönderiliyor...' : 'Destek talebi gönder'}
              </button>

              {submitted && <p className="rounded-md border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">Talebiniz alındı. Destek ekibimiz en kısa sürede dönüş yapacaktır.</p>}
              {error && <p className="rounded-md border border-rose-500/40 bg-rose-500/10 px-4 py-3 text-sm text-rose-300">{error}</p>}
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default SupportPage
